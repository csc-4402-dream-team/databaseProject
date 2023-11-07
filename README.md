# Example 4402 Database Project

## Introduction

This project provides a starting point for your database project that has both a backend component (built with Spring Boot) and a frontend component (built with React).

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

2. Build the project using Maven and run the Spring Boot application by running the main class. This will run the backend server on port 8080.

### Frontend (React)

1. Open a terminal and navigate to the `frontend` directory in our project.

2. Install project dependencies by running:
    
    npm install

3. Start the React development server by running:

    npm start

This will start the frontend application on port 3000.

### Database Configuration

By default, this project uses an in-memory H2 SQL database for development. We configured the default database settings in `application.properties` file in the backend project.
Two files load and populate the database, located under the resources folder in the backend. There is schema.sql and data.sql, which creates the schema and adds dummy data to the
database. To create the schema and sample data for your database, you will need to change these files.

### Accessing the Application User Interface

- Once you have the frontend and backend running, open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.

### Accessing the Database console

- Once you have the frontend and backend running, open your web browser and go to [http://localhost:8080/h2-console](http://localhost:8080/h2-console) to access the database console (not required).
- While not required, using the h2 console can be helpful for testing the structure and integrity of your database. You can also run example queries here.
- The credentials to login to the h2 console should be as follows: url: jdbc:h2:mem:example username: user (and no password, so leave blank)
- You can change the name of your database and the login credentials by changing the name (from example) in application properties.

### Additional Notes

- The SQL console execution feature is available on the frontend for testing pure SQL statements.
- In order for the project to work, you must have both the frontend running on port 3000 and the backend running on port 8080.
  
## Usage

- Use the web interface to add, view, update, or delete records in the database.

## Authors

- Example project for class created by Sadie Forbes
- {TEAM MEMBERS NAMES GO HERE}
