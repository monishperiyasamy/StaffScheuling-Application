package com.example.demo.controller;
import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth/register")
public class LoginController {
    @Autowired
    private LoginService loginService;
    @GetMapping("/getreg")
    public List<Login> getAllUsers() {
        return loginService.getAllUsers();
    }
    @GetMapping("/reg/{id}")
    public Optional<Login>getUserById(@PathVariable int id) {
        return Optional.of(loginService.getUserById(id));
    }
    @PutMapping("/reg/{id}")
    public Login updateUser(@PathVariable int id, @RequestBody Login updatedUser) {
        return loginService.updateUser(id, updatedUser);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        loginService.deleteUser(id);
        return "Deleted";
    }
//    @DeleteMapping("/delete/{email}")
//    public String deleteUseremail(@PathVariable String email) {
//        loginService.deleteByUsername(email);
//        return "Deleted";
//    }
//    @GetMapping("/reg/{email}")
//    public Optional<Login> findByUsername(@PathVariable String email) {
//    	return loginService.findByUsername(email);
//    }
    @PostMapping
    public Login createUser(@RequestBody Login user) {
       return loginService.createUser(user);
   }
   
}
