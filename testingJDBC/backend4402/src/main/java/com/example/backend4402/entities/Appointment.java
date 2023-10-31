package com.example.backend4402.entities;

import jakarta.persistence.*;

import java.sql.Time;
import java.sql.Date;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "APPOINTMENT_ID")
    private Long appointmentId;
    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private Client client;
    @ManyToOne
    @JoinColumn(name = "AGENT_ID")
    private Agent agent;
    @ManyToOne
    @JoinColumn(name = "PROPERTY_ID")
    private Property property;
    @Column(name = "APPT_DATE")
    private Date apptDate;
    @Column(name = "APPT_TIME")
    private Time apptTime;
    @Column(name = "PURPOSE")
    private String purpose;

    // Constructors, getters, setters, and other methods
}

