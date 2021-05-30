package org.senior.rest;

import lombok.RequiredArgsConstructor;
import org.senior.model.entity.Task;
import org.senior.model.entity.TaskOrder;
import org.senior.model.repository.TaskOrderRepository;
import org.senior.model.repository.TaskRepository;
import org.senior.rest.dto.TaskOrderDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final TaskOrderRepository orderRepository;
    private final TaskRepository taskRepository;

    // POST
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskOrder save(@RequestBody @Valid TaskOrderDTO dto ){
        TaskOrder order = new TaskOrder();

        BigDecimal tax = new BigDecimal(dto.getTax());
        Integer idTask = dto.getIdTask();

        Task task = taskRepository
                .findById(idTask)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Serviço inexistente"));

        BigDecimal price = task.getPrice();
        BigDecimal taxMath = price.multiply(tax.divide(new BigDecimal(100)));
        BigDecimal finalPrice = price.add(taxMath);


        order.setEmployee(dto.getEmployee());
        order.setTime(new Integer(dto.getTime()));
        order.setTax(tax);
        order.setFinalPrice(finalPrice);
        order.setTask(task);

        return orderRepository.save(order);
    }

    // GET
    @GetMapping("{id}")
    public  TaskOrder findById( @PathVariable Integer id ){
        return orderRepository
                .findById(id)
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordem de serviço não encontrado") );
    }

    @GetMapping
    public List<TaskOrder> findAll(){
        return  orderRepository.findAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        orderRepository
                .findById(id)
                .map( task -> {
                    orderRepository.delete(task);
                    return Void.TYPE;
                })
                .orElseThrow( ()-> new ResponseStatusException(HttpStatus.NOT_FOUND, "Pedido de serviço não encontrado") );
    }

}
