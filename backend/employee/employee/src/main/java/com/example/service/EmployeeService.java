package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import com.example.entity.Employee;

import com.example.events.EmployeeDeletedEvent;
import com.example.repository.EmployeeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final ApplicationEventPublisher applicationEventPublisher;  // Add this field

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository, ApplicationEventPublisher applicationEventPublisher) {
        this.employeeRepository = employeeRepository;
        this.applicationEventPublisher = applicationEventPublisher;  // Initialize the field
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return employeeRepository.findById(id);
    }
   
    public Optional<Employee> getEmployeeByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(int id, Employee updatedEmployee) {
        Optional<Employee> existingEmployeeOptional = employeeRepository.findById(id);

        if (existingEmployeeOptional.isPresent()) {
            Employee existingEmployee = existingEmployeeOptional.get();
            existingEmployee.setEmpName(updatedEmployee.getEmpName());
            existingEmployee.setGender(updatedEmployee.getGender());
            existingEmployee.setEmail(updatedEmployee.getEmail());
            existingEmployee.setContactnum(updatedEmployee.getContactnum());
            existingEmployee.setAddress(updatedEmployee.getAddress());
            existingEmployee.setDep(updatedEmployee.getDep());
            existingEmployee.setSkills(updatedEmployee.getSkills());
            existingEmployee.setAge(updatedEmployee.getAge());
            existingEmployee.setDob(updatedEmployee.getDob());

            return employeeRepository.save(existingEmployee);
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }

    public void deleteEmployee(int id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);

        if (employeeOptional.isPresent()) {
            employeeRepository.deleteById(id);
            // Publish an event indicating the employee deletion
            applicationEventPublisher.publishEvent(new EmployeeDeletedEvent(id));
        } else {
            throw new RuntimeException("Employee not found with ID: " + id);
        }
    }
   
}
