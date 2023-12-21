package com.example.service;

import com.example.entity.Timeoff;
import com.example.repository.TimeoffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeOffRequestService {
    @Autowired
    private TimeoffRepository timeoffRepository;

    public List<Timeoff> getAllTimeoffs() {
        return timeoffRepository.findAll();
    }

    public Optional<Timeoff> getTimeoffById(Long id) {
        return timeoffRepository.findById(id);
    }

    public Timeoff saveTimeoff(Timeoff timeoff) {
        return timeoffRepository.save(timeoff);
    }

    public void deleteTimeoff(Long id) {
        timeoffRepository.deleteById(id);
    }
}
