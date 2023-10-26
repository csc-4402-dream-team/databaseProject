package com.example.backend4402;

import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from the Java backend!";
    }
    @PostMapping("/add")
    public String addNumbers(@RequestBody Map<String, Integer> numbers) {
        int result = numbers.get("num1") + numbers.get("num2");
        return "The result is: " + result;
    }
    // creates a local database file
    @PostMapping("/createDatabase")
    public String createDatabase() {
        String databaseName = "4402database.db";
        Connection connection = null;
        File databaseFile = new File(databaseName);

        try {
            if (databaseFile.exists()) {
                return databaseName + " exists. Connected.";
            }

            // Register JDBC driver (optional for newer versions of JDBC)
            Class.forName("org.sqlite.JDBC");

            // Create a connection to the SQLite database (creates the file if it doesn't exist)
            connection = DriverManager.getConnection("jdbc:sqlite:" + databaseName);

            if (connection != null) {
                return databaseName + " created successfully. Connected.";
            } else {
                return "Failed to create the database.";
            }
        } catch (ClassNotFoundException e) {
            return "SQLite JDBC driver not found.";
        } catch (SQLException e) {
            return "SQL Exception: " + e.getMessage();
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}