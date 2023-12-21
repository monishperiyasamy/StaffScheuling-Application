package com.example.repository;

import com.example.entity.Shiftswap;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShiftswapRepository extends JpaRepository<Shiftswap, Long> {
    // You can add custom query methods if needed
}
