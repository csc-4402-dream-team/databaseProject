package com.example.backend4402.entities;
import jakarta.persistence.*;

@Entity
public class Office {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OFFICE_ID")
    private Long officeId;
    @Column(name = "OFFICE_NAME")
    private String officeName;
    @Column(name = "STREET")
    private String street;
    @Column(name = "CITY")
    private String city;
    @Column(name = "STATE")
    private String state;
    @Column(name = "ZIPCODE")
    private String zipcode;
    @Column(name = "PHONE")
    private String phone;

    // Constructors, getters, setters, and other methods
}
