package com.example.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

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
public class WeeklySchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scheduleid;

    private int empId;
    private String empName;
    private String email;
    private String gender;
    private LocalDate date;
    private String shift;
    private String skills;
    private Long conatactnum;
    private String startTime;
    private String endTime;
    private String dep;

    public void setStartTime(String string) {
        this.startTime = string;
    }

    public void setEndTime(String string) {
        this.endTime = string;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
