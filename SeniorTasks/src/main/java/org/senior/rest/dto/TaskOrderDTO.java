package org.senior.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class TaskOrderDTO {

    @NotEmpty
    private String time;

    @NotEmpty
    private String tax;

    @NotEmpty
    private String employee;

    @NotNull
    private Integer idTask;
}
