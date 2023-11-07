-- Example file that defines the schema for the database.
-- All relations will be defined here, like the one below.

CREATE TABLE Employee (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10, 2)
);

-- DEFINE YOUR TABLES HERE