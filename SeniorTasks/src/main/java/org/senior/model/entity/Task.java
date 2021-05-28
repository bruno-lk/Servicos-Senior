package org.senior.model.entity;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 255)
    @NotEmpty
    private String description;

    @Column(nullable = false)
    @NotNull
    private BigDecimal price;
}
