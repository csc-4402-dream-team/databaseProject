package com.example.backend4402.Agent;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.sql.Date;
import java.time.LocalDate;

public class Agent {

    private long agentId;
    private long officeId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String licenseNumber;
    private Date dateHired;

    public Agent() {
    }

    public Agent(long agentId, long officeId, String firstName, String lastName, String email,
                 String phone, String licenseNumber, Date dateHired) {
        this.agentId = agentId;
        this.officeId = officeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.licenseNumber = licenseNumber;
        this.dateHired = dateHired;
    }

    public long getAgentId() {
        return agentId;
    }

    public void setAgentId(long agentId) {
        this.agentId = agentId;
    }

    public long getOfficeId() {
        return officeId;
    }

    public void setOfficeId(long officeId) {
        this.officeId = officeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public Date getDateHired() {
        return dateHired;
    }

    public void setDateHired(Date dateHired) {
        this.dateHired = dateHired;
    }

    public String toJSON() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.writeValueAsString(this);
        } catch (Exception e) {
            e.printStackTrace();
            return "{}"; // Handle the exception as needed
        }
    }
}
