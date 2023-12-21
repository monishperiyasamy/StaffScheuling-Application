//package com.example.Controller;
//
//import com.example.service.ScheduleService;
//import com.example.entity.Schedule;
//import com.example.repository.ScheduleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/schedule")
//public class ScheduleController {
//
//    private final ScheduleService scheduleService;
//    private final ScheduleRepository scheduleRepository;
//
//    @Autowired
//    public ScheduleController(ScheduleService scheduleService, ScheduleRepository scheduleRepository) {
//        this.scheduleService = scheduleService;
//        this.scheduleRepository = scheduleRepository;
//    }
//
//    @PostMapping("/generate-schedule")
//    public void generateSchedule() {
//        scheduleService.generateSchedule();
//    }
//    
//    @GetMapping("/get-all-schedules")
//    public List<Schedule> getAllSchedules() {
//        return scheduleRepository.findAll(); 
//    }
//}

package com.example.Controller;

import com.example.service.ScheduleService;
import com.example.demo.dto.ScheduleRequest;
import com.example.entity.Schedule;
import com.example.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

    private final ScheduleService scheduleService;
    private final ScheduleRepository scheduleRepository;

    @Autowired
    public ScheduleController(ScheduleService scheduleService, ScheduleRepository scheduleRepository) {
        this.scheduleService = scheduleService;
        this.scheduleRepository = scheduleRepository;
    }

    @PostMapping("/generate-schedule")
    public void generateSchedule() {
        scheduleService.generateSchedule();
    }

    @GetMapping("/get-all-schedules")
    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }
}

