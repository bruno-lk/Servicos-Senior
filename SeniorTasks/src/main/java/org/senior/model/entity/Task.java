package org.senior.model.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false,length = 255)
    private String descrition;

    @Column(nullable = false)
    private BigDecimal price;
}
