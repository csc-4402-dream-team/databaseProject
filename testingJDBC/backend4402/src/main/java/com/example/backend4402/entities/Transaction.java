package com.example.backend4402.entities;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TRANSACTION_ID")
    private Long transactionId;
    @ManyToOne
    @JoinColumn(name = "PROPERTY_ID")
    private Property property;
    @ManyToOne
    @JoinColumn(name = "AGENT_ID")
    private Agent agent;
    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private Client client;
    @Column(name = "DATE_SENT")
    private Date dateSent;
    @Column(name = "AMOUNT")
    private BigDecimal amount;
    @Column(name = "TYPE")
    private String type;

    // Constructors, getters, setters, and other methods
}
