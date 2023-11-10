CREATE TABLE IF NOT EXISTS CLIENT (
    CLIENT_ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME VARCHAR(255),
    LAST_NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PHONE VARCHAR(20),
    STREET VARCHAR(255),
    CITY VARCHAR(255),
    STATE VARCHAR(255),
    ZIPCODE VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS OFFICE (
    OFFICE_ID INT AUTO_INCREMENT PRIMARY KEY,
    OFFICE_NAME VARCHAR(255),
    STREET VARCHAR(255),
    CITY VARCHAR(255),
    STATE VARCHAR(255),
    ZIPCODE VARCHAR(10),
    PHONE VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS AGENT (
    AGENT_ID INT AUTO_INCREMENT PRIMARY KEY,
    OFFICE_ID INT,
    FIRST_NAME VARCHAR(255),
    LAST_NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PHONE VARCHAR(20),
    LICENSE_NUMBER VARCHAR(20),
    DATE_HIRED DATE,
    FOREIGN KEY (OFFICE_ID) REFERENCES OFFICE (OFFICE_ID)
);

CREATE TABLE IF NOT EXISTS PROPERTY (
    PROPERTY_ID INT AUTO_INCREMENT PRIMARY KEY,
    AGENT_ID INT,
    PROPERTY_TYPE VARCHAR(50),
    STREET VARCHAR(255),
    CITY VARCHAR(255),
    STATE VARCHAR(255),
    ZIPCODE VARCHAR(10),
    LIST_PRICE DECIMAL(10, 2),
    NUM_BEDROOMS INT,
    NUM_BATHROOMS INT,
    SQUARE_FOOTAGE INT,
    DESCRIPTION TEXT,
    LISTING_DATE DATE,
    STATUS VARCHAR(50),
    FOREIGN KEY (AGENT_ID) REFERENCES AGENT (AGENT_ID)
);

CREATE TABLE IF NOT EXISTS TRANSACTION (
    TRANSACTION_ID INT AUTO_INCREMENT PRIMARY KEY,
    PROPERTY_ID INT,
    AGENT_ID INT,
    CLIENT_ID INT,
    DATE_SENT DATE,
    AMOUNT DECIMAL(10, 2),
    TYPE VARCHAR(50),
    FOREIGN KEY (AGENT_ID) REFERENCES AGENT (AGENT_ID),
    FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT (CLIENT_ID),
    FOREIGN KEY (PROPERTY_ID) REFERENCES PROPERTY (PROPERTY_ID)
);

CREATE TABLE IF NOT EXISTS APPOINTMENT (
    APPOINTMENT_ID INT AUTO_INCREMENT PRIMARY KEY,
    CLIENT_ID INT,
    AGENT_ID INT,
    PROPERTY_ID INT,
    APPT_DATE DATE,
    APPT_TIME TIME,
    PURPOSE VARCHAR(50),
    FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT (CLIENT_ID),
    FOREIGN KEY (AGENT_ID) REFERENCES AGENT (AGENT_ID),
    FOREIGN KEY (PROPERTY_ID) REFERENCES PROPERTY (PROPERTY_ID)
);

CREATE TABLE IF NOT EXISTS IMAGE (
    IMAGE_ID INT AUTO_INCREMENT PRIMARY KEY,
    PROPERTY_ID INT,
    IMAGE_DATA BLOB,
    FOREIGN KEY (PROPERTY_ID) REFERENCES PROPERTY (PROPERTY_ID)
);

CREATE TABLE IF NOT EXISTS CLIENT_AGENT (
    AGENT_ID INT,
    CLIENT_ID INT,
    FOREIGN KEY (CLIENT_ID) REFERENCES CLIENT (CLIENT_ID),
    FOREIGN KEY (AGENT_ID) REFERENCES AGENT (AGENT_ID),
    PRIMARY KEY(AGENT_ID, CLIENT_ID)
)