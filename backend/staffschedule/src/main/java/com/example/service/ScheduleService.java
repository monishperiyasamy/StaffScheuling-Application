package com.example.service;

//ScheduleService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.dto.EmployeeResponse;
import com.example.repository.ScheduleRepository;

import jakarta.transaction.Transactional;

import com.example.entity.Schedule;
import com.example.events.EmployeeDeletedEvent;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
@Transactional
public class ScheduleService {

 @Autowired
 private RestTemplate restTemplate;

 @Autowired
 private ScheduleRepository scheduleRepository;
 
 @EventListener
 public void handleEmployeeDeletedEvent(EmployeeDeletedEvent event) {
     int deletedEmployeeId = event.getEmployeeId();

     // Delete the associated schedule
     scheduleRepository.deleteByEmpId(deletedEmployeeId);
 }

 public void generateSchedule() {
     // Use the service name (employee-server) as registered in Eureka
     ResponseEntity<EmployeeResponse[]> responseEntity = restTemplate.getForEntity("http://localhost:1204/employee/getAll", EmployeeResponse[].class);
     EmployeeResponse[] employees = responseEntity.getBody();

     // Iterate through the retrieved employees and create and save Schedule objects
     for (EmployeeResponse employee : employees) {
         // Check if the employee already has a schedule
         Optional<Schedule> existingScheduleOptional = scheduleRepository.findByEmpId(employee.getEmpId());

         if (existingScheduleOptional.isPresent()) {
             // Schedule already exists for the employee, skip to the next employee
             continue;
         }

         // No schedule exists for the employee, proceed to create a new one
         Schedule schedule = new Schedule();
         schedule.setEmpId(employee.getEmpId());
         schedule.setEmpName(employee.getEmpName());
         schedule.setEmail(employee.getEmail());
         schedule.setGender(employee.getGender());
         schedule.setConatactnum(employee.getContactnum());
         schedule.setSkills(employee.getSkills());
         schedule.setDep(employee.getDep());

         // Assign the shift based on gender
         if ("Female".equalsIgnoreCase(employee.getGender())) {
             // Female employees get morning shifts
             schedule.setShift("Morning");
         } else if ("Male".equalsIgnoreCase(employee.getGender())) {
             // Male employees can have either morning or night shifts
             schedule.setShift(Math.random() < 0.5 ? "Morning" : "Night");
         } else {
             // Handle other gender cases if needed
             schedule.setShift("Other");
         }

         // Assign date, start time, and end time
         LocalDateTime currentTime = LocalDateTime.now();
         schedule.setDate(currentTime.toLocalDate());

         // Assuming working hours are 7 hours
         LocalDateTime startTime = currentTime.withHour(9).withMinute(0);  // Adjust based on your business rules
         LocalDateTime endTime = startTime.plusHours(7);

         // No conflict, set the start and end time in 12-hour format with AM/PM
         DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a");
         schedule.setStartTime(startTime.format(formatter));
         schedule.setEndTime(endTime.format(formatter));

         // Save the schedule to the repository
         scheduleRepository.save(schedule);
     }
 }
}
