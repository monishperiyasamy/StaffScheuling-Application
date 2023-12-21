package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entity.Attendence;
import com.example.demo.service.AttendenceService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/attendance")
public class AttendenceController {

    @Autowired
    private AttendenceService attendenceService;

    @GetMapping
    public List<Attendence> getAllAttendance() {
        return attendenceService.getAllAttendance();
    }

    @GetMapping("/{id}")
    public Attendence getAttendanceById(@PathVariable int id) {
        Optional<Attendence> attendance = attendenceService.getAttendanceById(id);
        return attendance.orElse(null);  
    }

    @PostMapping
    public Attendence createAttendance(@RequestBody Attendence attendance) {
        return attendenceService.createAttendance(attendance);
    }

    @PutMapping("/{id}")
    public Attendence updateAttendance(@PathVariable int id, @RequestBody Attendence updatedAttendance) {
        return attendenceService.updateAttendance(id, updatedAttendance);
    }

    @DeleteMapping("/{id}")
    public void deleteAttendance(@PathVariable int id) {
        attendenceService.deleteAttendance(id);
    }
}
