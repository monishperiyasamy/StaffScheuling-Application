package com.example.controller;

import com.example.entity.Timeoff;
import com.example.service.TimeOffRequestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/timeoff-requests/api/timeoffs")
public class TimeOffRequestController {
    @Autowired
    private TimeOffRequestService timeoffService;

    @GetMapping
    public List<Timeoff> getAllTimeoffs() {
        return timeoffService.getAllTimeoffs();
    }

    @GetMapping("/{id}")
    public Optional<Timeoff> getTimeoffById(@PathVariable Long id) {
        return timeoffService.getTimeoffById(id);
    }

    @PostMapping
    public Timeoff saveTimeoff(@RequestBody Timeoff timeoff) {
        return timeoffService.saveTimeoff(timeoff);
    }

    @PutMapping("/{id}")
    public Timeoff updateTimeoff(@PathVariable Long id, @RequestBody Timeoff timeoff) {
        // Assuming you want to update an existing Timeoff
        timeoff.setId(id);
        return timeoffService.saveTimeoff(timeoff);
    }

    @DeleteMapping("/{id}")
    public void deleteTimeoff(@PathVariable Long id) {
        timeoffService.deleteTimeoff(id);
    }
}
