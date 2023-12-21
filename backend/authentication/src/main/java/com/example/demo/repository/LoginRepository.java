package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Login;
import java.util.List;


public interface LoginRepository extends JpaRepository<Login, Integer> {
	Optional<Login> findByEmail(String email);
	Optional<Login> deleteByEmail(String email);  

}
