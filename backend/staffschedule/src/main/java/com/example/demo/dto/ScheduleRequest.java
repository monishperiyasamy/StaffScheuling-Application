//package com.example.demo.dto;
//
//import java.util.Date;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class ScheduleRequest {
//	private int empId;  // Match the data type to the EmployeeResponse DTO
//    private String shift;
//    private Date startTime;
//    private Date endTime;
//    private Date date;
//	private String Preference ;
//		
//}

package com.example.demo.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleRequest {
    private int empId;  // Match the data type to the EmployeeResponse DTO
    private String shift;
    private Date startTime;
    private Date endTime;
    private Date date;
    private String preference;  // Corrected field name
}
