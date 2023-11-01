# Real Estate Agency Database Project

## Introduction

This project is a real estate agency database system that allows you to manage and store information related to clients, agents, properties, client inquiries, and property images. It provides both a backend component (built with Spring Boot) and a frontend component (built with React).

## Prerequisites

Before running the project, ensure you have the following prerequisites installed on your system:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - version 11 or higher.
- [Node.js](https://nodejs.org/) - version 14 or higher.
- [npm](https://www.npmjs.com/) - This is included with Node.js.
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) - Recommended for running and building the Spring Boot application.

## Getting Started

Follow these steps to get the project up and running:

### Backend (Spring Boot)

1. Open the Spring Boot project in your preferred Java IDE. We used IntelliJ.

2. Build the project using Maven.

3. Start the Spring Boot application. This will run the backend server on port 8080.

### Frontend (React)

1. Open a terminal and navigate to the `frontend` directory in your project.

2. Install project dependencies by running:
    
    npm install

3. Start the React development server by running:

    npm start

This will start the frontend application on port 3000.

### Database Configuration

By default, this project uses an in-memory H2 database for development. You can configure the database settings in the `application.properties` file in the backend project.

### Accessing the Application User Interface

- Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.


### Accessing the Database console

- Open your web browser and go to [http://localhost:8080/h2-console](http://localhost:8080/h2-console) to access the frontend.

### Additional Notes

- The SQL execution feature is available on the frontend for testing SQL statements. 

## Usage

The application provides functionality to manage clients, agents, properties, client inquiries, and property images. Use the web interface to add, view, update, or delete records in the database.

## Authors

- [Sadie Forbes](https://github.com/sadief630)
- Calvin Feldt
- {Other team members add names here}

## Acknowledgments

- extra stuff here

