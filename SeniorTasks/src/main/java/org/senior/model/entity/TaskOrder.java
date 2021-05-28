package org.senior.model.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class TaskOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private Integer time;

    @Column(nullable = false)
    private BigDecimal tax;

    @Column(nullable = false)
    private String employee;

    @ManyToOne
    @JoinColumn(name = "id_task")
    private Task task;
}
