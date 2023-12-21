package com.example.demo.service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class LoginService {

	@Autowired
    private  LoginRepository loginRepository;

    public List<Login> getAllUsers() {
        return loginRepository.findAll();
    }

    public Login getUserById(int id) {
        Optional<Login> userOptional = loginRepository.findById(id);
        return userOptional.orElse(null);
    }

    public Login createUser(Login user) {
        return loginRepository.save(user);
    }

    public Login updateUser(int id, Login updatedUser) {
        Optional<Login> existingUserOptional = loginRepository.findById(id);

        if (existingUserOptional.isPresent()) {
            Login existingUser = existingUserOptional.get();

            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            existingUser.setRole(updatedUser.getRole());

            return loginRepository.save(existingUser);
        } else {
            return null; 
        }
    }

    public Optional<Login> findByUsername(String email) {
        return loginRepository.findByEmail(email);
    }
    public Optional<Login> deleteByUsername(String email) {
        return loginRepository.deleteByEmail(email);
    }
    public void deleteUser(int id) {
        loginRepository.deleteById(id);
    }
    
}
