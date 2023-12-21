package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entity.Timeoff;


@Repository
public interface TimeoffRepository extends JpaRepository<Timeoff, Long> {
    
}
