package com.example.demo.dto;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class RegisterRequest {
	private String email;
	@Column(unique = true)
	private String password;
	private String role;
	private String name;
}
