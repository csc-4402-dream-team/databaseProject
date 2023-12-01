# Red Stick Realty Database Project

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

3. Start the Spring Boot application by running the main class, which is called Backend4402Application. This will run the backend server on port 8080.

### Frontend (React)

1. Open a terminal and navigate to the `frontend` directory in our project.

2. Install project dependencies by running:
    
    npm install

3. Start the React development server by running:

    npm start

This will start the frontend application on port 3000.

### Database Configuration

By default, this project uses an in-memory H2 database for development. We configured the default database settings in `application.properties` file in the backend project.
Two files load and populate the database, located under the resources folder in the backend. There is schema.sql and data.sql, which creates the schema and adds dummy data to the
database.

### Accessing the Application User Interface

- Once you have the frontend and backend running, open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.


### Accessing the H2 Database console to run SQL queries

- Once you have the frontend and backend running, open your web browser and go to [http://localhost:8080/h2-console](http://localhost:8080/h2-console) to access the database console (not required). The login is username: `user` and there is no password, so leave this entry blank. The URL to connect to is `jdbc:h2:mem:redstickrealty`. You can execute raw SQL queries here to test the structure and integrity of the database.

### Additional Notes

- The SQL console execution feature is available on the frontend for testing pure SQL statements.
- In order for the project to work, you must have both the frontend running on port 3000 and the backend running on port 8080.
  
## Usage

The application provides functionality to manage clients, agents, properties, client inquiries, and property images. Use the web interface to add, view, update, or delete records in the database. 

## Data Population
There is data that is automatically populated everytime we start the backend server. This data generates entries for all of the tables in the database. We added two different Agents and Clients that the user can "login" as, with IDs 1 and 2.

## Authors

- [Sadie Forbes](https://github.com/sadief630)
- Calvin Feldt
- Aditya Syrvistava
- Jake Weber
- Gustavo Coloma

