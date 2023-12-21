// WeeklyScheduleRepository.java
package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entity.WeeklySchedule;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface WeeklyScheduleRepository extends JpaRepository<WeeklySchedule, Long> {
    List<WeeklySchedule> findByEmpIdAndDate(Long employeeId, Date date);

    @Query("SELECT s FROM WeeklySchedule s WHERE s.empId = :employeeId")
    Optional<WeeklySchedule> findByEmpId(int employeeId);

    void deleteByEmpId(int deletedEmployeeId);

    @Query("SELECT s FROM WeeklySchedule s WHERE s.email = :employeeEmail")
    List<WeeklySchedule> findByEmail(String employeeEmail);

    boolean existsByEmpIdAndDateAndShift(int empId, LocalDate date, String shift);

	Optional<WeeklySchedule> findByEmpIdAndDateBetween(int empId, LocalDate localDate, LocalDate localDate2);
    Optional<WeeklySchedule> findByEmpIdAndDateAndShift(@Param("empId") int empId, @Param("date") LocalDate date, @Param("shift") String shift);
}
