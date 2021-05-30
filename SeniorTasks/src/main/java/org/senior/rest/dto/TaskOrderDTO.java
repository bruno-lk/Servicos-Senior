package org.senior.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class TaskOrderDTO {
    
    private Integer id;

    @NotEmpty
    private String time;

    @NotEmpty
    private String tax;

    private BigDecimal finalPrice;

    @NotEmpty
    private String employee;

    @NotNull
    private Integer idTask;
}
