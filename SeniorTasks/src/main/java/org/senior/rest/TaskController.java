package org.senior.rest;

import org.senior.model.entity.Task;
import org.senior.model.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskController( TaskRepository taskRepository ) {
        this.taskRepository = taskRepository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task save( @RequestBody Task task ){
        return taskRepository.save(task);
    }

    @GetMapping("{id}")
    public  Task findById( @PathVariable Integer id ){
        return taskRepository
                .findById(id)
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado") );
    }

    @GetMapping
    public List<Task> findAll(){
        return  taskRepository.findAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        taskRepository
                .findById(id)
                .map( task -> {
                    taskRepository.delete(task);
                    return Void.TYPE;
                })
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Serviço não encontrado") );
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void update( @PathVariable Integer id, @RequestBody @Valid Task updateTask ){
        taskRepository
                .findById(id)
                .map( task -> {
                    task.setDescription(updateTask.getDescription());
                    task.setPrice(updateTask.getPrice());
                    return taskRepository.save(task);
                })
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado") );
    }
}
