package com.example.events;

public class EmployeeDeletedEvent {
	private final int employeeId;

    public EmployeeDeletedEvent(int employeeId) {
        this.employeeId = employeeId;
    }

    public int getEmployeeId() {
        return employeeId;
    }

}
