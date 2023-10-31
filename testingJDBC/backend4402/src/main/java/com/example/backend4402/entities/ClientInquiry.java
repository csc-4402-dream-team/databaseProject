package com.example.backend4402.entities;
import jakarta.persistence.*;
import java.sql.Date;
@Entity
@Table(name = "CLIENT_INQUIRY")
public class ClientInquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "INQUIRY_ID")
    private Long inquiryId;

    @Column(name = "CLIENT_ID")
    private Long clientId;

    @Column(name = "PROPERTY_ID")
    private Long propertyId;

    @Column(name = "MESSAGE", columnDefinition = "TEXT")
    private String message;

    @Column(name = "DATE_SENT")
    private Date dateSent;

    @ManyToOne
    @JoinColumn(name = "CLIENT_ID", referencedColumnName = "CLIENT_ID", insertable = false, updatable = false)
    private Client client;

    @ManyToOne
    @JoinColumn(name = "PROPERTY_ID", referencedColumnName = "PROPERTY_ID", insertable = false, updatable = false)
    private Property property;

    // Getters and setters

    // Additional methods and constructors as needed
}
