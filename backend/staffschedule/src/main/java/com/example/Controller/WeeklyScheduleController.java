package com.example.Controller;

import com.example.service.WeeklyService;
import com.example.demo.dto.WeeklyScheduleRequest;
import com.example.entity.WeeklySchedule;
import com.example.repository.WeeklyScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/schedule/weekly-schedule")
@CrossOrigin
public class WeeklyScheduleController {

    private final WeeklyService weeklyService;
    private final WeeklyScheduleRepository weeklyScheduleRepository;

    @Autowired
    public WeeklyScheduleController(WeeklyService weeklyService, WeeklyScheduleRepository weeklyScheduleRepository) {
        this.weeklyService = weeklyService;
        this.weeklyScheduleRepository = weeklyScheduleRepository;
    }

    @PostMapping("/generate-weekly-schedule")
    public void generateWeeklySchedule() {
        weeklyService.generateWeeklySchedule();
    }

    @GetMapping("/get-all-weekly-schedules")
    public List<WeeklySchedule> getAllWeeklySchedules() {
        return weeklyScheduleRepository.findAll();
    }
    @GetMapping("/get-weekly-schedule-by-email/{email}")
    public ResponseEntity<List<WeeklySchedule>> getWeeklyScheduleByEmail(@PathVariable String email) {
        List<WeeklySchedule> weeklySchedule = weeklyService.getWeeklyScheduleByEmail(email);
        return ResponseEntity.ok(weeklySchedule);
    }
}
