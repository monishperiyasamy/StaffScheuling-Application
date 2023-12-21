package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Attendence;

public interface AttendenceRepository extends JpaRepository<Attendence, Integer>{

}
