package com.example.backend4402.entities;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PROPERTY_ID")
    private Long propertyId;
    @ManyToOne
    @JoinColumn(name = "AGENT_ID")
    private Agent agent;
    @Column(name = "PROPERTY_TYPE")
    private String propertyType;
    @Column(name = "STREET")
    private String street;
    @Column(name = "CITY")
    private String city;
    @Column(name = "STATE")
    private String state;
    @Column(name = "ZIPCODE")
    private String zipcode;
    @Column(name = "LIST_PRICE")
    private BigDecimal listPrice;
    @Column(name = "NUM_BEDROOMS")
    private Integer numBedrooms;
    @Column(name = "NUM_BATHROOMS")
    private Integer numBathrooms;
    @Column(name = "SQUARE_FOOTAGE")
    private Integer squareFootage;
    @Column(name = "DESCRIPTION")
    private String description;
    @Column(name = "LISTING_DATE")
    private Date listingDate;
    @Column(name = "STATUS")
    private String status;

    // Constructors, getters, setters, and other methods
}
