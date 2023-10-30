package com.example.backend4402;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {
    @GetMapping("/hello")
    public String sayHello() {
        return "Java Backend: Connected!\n";
    }

    @PostMapping("/add")
    public String addNumbers(@RequestBody Map<String, Integer> numbers) {
        int result = numbers.get("num1") + numbers.get("num2");
        return "The result is: " + result;
    }

    // creates a local database file
    @PostMapping("/createDatabase")
    public String createDatabase() {
        String message = "";
        String databaseName = "4402database.db";
        Connection connection = null;
        File databaseFile = new File(databaseName);
        try {
            if (databaseFile.exists()) {
                message = databaseName + " exists. Connected.";
            }
            // Register JDBC driver (optional for newer versions of JDBC)
            Class.forName("org.sqlite.JDBC");
            // Create a connection to the SQLite database (creates the file if it doesn't exist)
            connection = DriverManager.getConnection("jdbc:sqlite:" + databaseName);
            if (connection != null) {
                message = databaseName + " created successfully. Connected.";
            } else {
                message = "Failed to create the database.";
            }
        } catch (ClassNotFoundException e) {
            message = "SQLite JDBC driver not found.";
        } catch (SQLException e) {
            message = "SQL Exception: " + e.getMessage();
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                message = "SQL Exception: " + e.getMessage();
            }
        }
        return message;
    }

    @PostMapping("/createTables")
    public static String createTables() {
        String databaseName = "4402database.db";
        String message = "";
        Connection connection = null;
        try {
            Class.forName("org.sqlite.JDBC");
            connection = DriverManager.getConnection("jdbc:sqlite:" + databaseName);
            if (connection != null) {
                Statement statement = connection.createStatement();
                // Create a sample table called "users"
                String createUsersTableSQL = "CREATE TABLE IF NOT EXISTS users (" +
                        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        "username TEXT NOT NULL, " +
                        "email TEXT NOT NULL, " +
                        "password TEXT NOT NULL)";
                statement.execute(createUsersTableSQL);
                // Create a sample table called "products"
                String createProductsTableSQL = "CREATE TABLE IF NOT EXISTS products (" +
                        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                        "name TEXT NOT NULL, " +
                        "description TEXT, " +
                        "price REAL)";
                statement.execute(createProductsTableSQL);
                message = "Sample tables created successfully.";
                statement.close();
            } else {
                message = "Failed to create tables: Database connection not established.";
            }
        } catch (ClassNotFoundException e) {
            message = "SQLite JDBC driver not found.";
        } catch (SQLException e) {
            message = "SQL Exception: " + e.getMessage();
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return message;
    }
//
//    @PostMapping("/populateDatabase")
//    public String populateDatabaseWithJson() {
//        String databaseName = "4402database.db";
//        String tableName = "users"; // Replace with your table name
//        String message = "";
//        Connection connection = null;
//        try {
//            Class.forName("org.sqlite.JDBC");
//            connection = DriverManager.getConnection("jdbc:sqlite:" + databaseName);
//
//            if (connection != null) {
//                // Read the JSON file
//                ObjectMapper objectMapper = new ObjectMapper();
//                List<Map<String, Object>> jsonData = objectMapper.readValue(new File("./data.json"), new TypeReference<>() {
//                });
//
//                // Insert data into the database
//                String insertSql = "INSERT INTO " + tableName + " (username, email, password) VALUES (?, ?, ?)";
//                PreparedStatement preparedStatement = connection.prepareStatement(insertSql);
//
//                for (Map<String, Object> data : jsonData) {
//                    preparedStatement.setString(1, (String) data.get("username"));
//                    preparedStatement.setString(2, (String) data.get("email"));
//                    preparedStatement.setString(3, (String) data.get("password"));
//                    preparedStatement.executeUpdate();
//                }
//                preparedStatement.close();
//                message = "Data from the JSON file inserted into the database.";
//            } else {
//                message = "Failed to insert data: Database connection not established.";
//            }
//        } catch (ClassNotFoundException e) {
//            message = "SQLite JDBC driver not found.";
//        } catch (SQLException | IOException e) {
//            message = "SQL Exception: " + e.getMessage();
//        } finally {
//            try {
//                if (connection != null) {
//                    connection.close();
//                }
//            } catch (SQLException e) {
//                e.printStackTrace();
//            }
//        }
//        return message;
//    }
}