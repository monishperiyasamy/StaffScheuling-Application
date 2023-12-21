package com.example.repository;

//ScheduleRepository.java

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.entity.Schedule;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
 List<Schedule> findByEmpIdAndDate(Long employeeId, Date date);

 @Query("SELECT s FROM Schedule s WHERE s.empId = :employeeId")
 Optional<Schedule> findByEmpId(int employeeId);
 void deleteByEmpId(int deletedEmployeeId);

 @Query("SELECT s FROM Schedule s WHERE s.email = :employeeEmail")
 List<Schedule> findByEmail(String employeeEmail);

 boolean existsByEmpIdAndDateAndShift(int empId, LocalDate date, String shift);


}
