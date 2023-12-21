package com.example.demo.dto;

import org.springframework.stereotype.Component;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Component
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeResponse {
	
	 private int empId;  // Match the data type to the ScheduleRequest DTO
	    private String empName;
	    private String email;
	    private String gender;
	    private long contactnum;
	    private String skills;
	    private String dep;
	    private String shiftPreference;

}
