package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Attendence;
import com.example.demo.repository.AttendenceRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AttendenceService {

	@Autowired
    private  AttendenceRepository attendenceRepository;

    public AttendenceService(AttendenceRepository attendenceRepository) {
        this.attendenceRepository = attendenceRepository;
    }

    public List<Attendence> getAllAttendance() {
        return attendenceRepository.findAll();
    }

    public Optional<Attendence> getAttendanceById(int id) {
        return attendenceRepository.findById(id);
    }

    public Attendence createAttendance(Attendence attendance) {
        return attendenceRepository.save(attendance);
    }

    public Attendence updateAttendance(int id, Attendence updatedAttendance) {
        Optional<Attendence> existingAttendanceOptional = attendenceRepository.findById(id);

        if (existingAttendanceOptional.isPresent()) {
            Attendence existingAttendance = existingAttendanceOptional.get();
            existingAttendance.setEmpId(updatedAttendance.getEmpId());
            existingAttendance.setHour(updatedAttendance.getHour());
            existingAttendance.setDate(updatedAttendance.getDate());
           

            return attendenceRepository.save(existingAttendance);
        } else {
            return null; 
        }
    }

    public void deleteAttendance(int id) {
        attendenceRepository.deleteById(id);
    }
}
