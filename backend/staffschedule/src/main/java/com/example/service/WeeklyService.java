package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.dto.EmployeeResponse;
import com.example.repository.WeeklyScheduleRepository;

import jakarta.transaction.Transactional;

import com.example.entity.WeeklySchedule;
import com.example.events.EmployeeDeletedEvent;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class WeeklyService {

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private WeeklyScheduleRepository weeklyScheduleRepository;

    @EventListener
    public void handleEmployeeDeletedEvent(EmployeeDeletedEvent event) {
        int deletedEmployeeId = event.getEmployeeId();

        // Delete the associated weekly schedule
        weeklyScheduleRepository.deleteByEmpId(deletedEmployeeId);
    }

    public List<WeeklySchedule> getWeeklyScheduleByEmail(String email) {
        return weeklyScheduleRepository.findByEmail(email);
    }

    public void generateWeeklySchedule() {
        // Use the service name (employee-server) as registered in Eureka
        ResponseEntity<EmployeeResponse[]> responseEntity = restTemplate.getForEntity("http://localhost:1204/employee/getAll", EmployeeResponse[].class);
        EmployeeResponse[] employees = responseEntity.getBody();

        // Iterate through the retrieved employees and create and save WeeklySchedule objects
        for (EmployeeResponse employee : employees) {
            // Iterate through the next 5 days (excluding the current date)
            LocalDateTime currentTime = LocalDateTime.now().plusDays(1); // Starting from tomorrow
            for (int i = 0; i < 5; i++) {
                LocalDateTime nextDate = currentTime.plusDays(i);
                String shift = getEmployeeShift(employee);

                // Check if a schedule already exists for the specific date and shift
                Optional<WeeklySchedule> existingWeeklyScheduleOptional = weeklyScheduleRepository
                        .findByEmpIdAndDateAndShift(employee.getEmpId(), nextDate.toLocalDate(), shift);

                if (existingWeeklyScheduleOptional.isPresent()) {
                    // Weekly schedule already exists for the employee for the specific date and shift, skip to the next day
                    continue;
                }

                // No weekly schedule exists for the employee and specific date, proceed to create a new one
                WeeklySchedule weeklySchedule = new WeeklySchedule(); // Create a new instance for each day

                weeklySchedule.setEmpId(employee.getEmpId());
                weeklySchedule.setEmpName(employee.getEmpName());
                weeklySchedule.setEmail(employee.getEmail());
                weeklySchedule.setGender(employee.getGender());
                weeklySchedule.setConatactnum(employee.getContactnum());
                weeklySchedule.setSkills(employee.getSkills());
                weeklySchedule.setDep(employee.getDep());
                weeklySchedule.setShift(shift);
                weeklySchedule.setDate(nextDate.toLocalDate());

                // Set the start and end time based on the shift
                setStartAndEndTime(weeklySchedule);

                // Save the weekly schedule to the repository
                weeklyScheduleRepository.save(weeklySchedule);
            }
        }
    }

    private String getEmployeeShift(EmployeeResponse employee) {
        // Logic to determine the employee's shift based on gender
        if ("Female".equalsIgnoreCase(employee.getGender())) {
            // Female employees get morning shifts
            return "Morning";
        } else if ("Male".equalsIgnoreCase(employee.getGender())) {
            // Male employees get alternative shifts (morning, night, morning, night, and so on)
            return generateAlternativeShift(employee.getEmpId());
        } else {
            // Handle other gender cases if needed
            return "Other";
        }
    }

    private String generateAlternativeShift(int empId) {
        // Logic to determine the alternative shift based on the employee's ID
        // You can implement your own logic here
        return (empId % 2 == 0) ? "Morning" : "Night";
    }

    private void setStartAndEndTime(WeeklySchedule weeklySchedule) {
        // Assuming working hours are 7 hours
        LocalDateTime startTime = LocalDateTime.of(weeklySchedule.getDate(), LocalTime.of(9, 0)); // Adjust based on your business rules
        LocalDateTime endTime = startTime.plusHours(7);

        // Set the start and end time in 12-hour format with AM/PM
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a");
        weeklySchedule.setStartTime(startTime.format(formatter));
        weeklySchedule.setEndTime(endTime.format(formatter));
    }
}
