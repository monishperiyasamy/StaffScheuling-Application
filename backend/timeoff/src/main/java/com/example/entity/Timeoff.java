package com.example.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Timeoff {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String empName;
    private String dep;
    private String requestDate;
    private String reason;
}
