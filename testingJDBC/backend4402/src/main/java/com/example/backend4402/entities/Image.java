package com.example.backend4402.entities;
import jakarta.persistence.*;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IMAGE_ID")
    private Long imageId;
    @ManyToOne
    @JoinColumn(name = "PROPERTY_ID")
    private Property property;
    @Column(name = "IMAGE_DATA")
    private byte[] imageData;

    // Constructors, getters, setters, and other methods
}
