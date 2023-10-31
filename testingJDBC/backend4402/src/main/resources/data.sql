-- Insert data into the CLIENT table
INSERT INTO CLIENT (FIRST_NAME, LAST_NAME, EMAIL, PHONE, STREET, CITY, STATE, ZIPCODE)
VALUES ('John', 'Doe', 'john@example.com', '555-123-4567', '123 Main St', 'City', 'State', '12345');

-- Insert data into the OFFICE table
INSERT INTO OFFICE (OFFICE_NAME, STREET, CITY, STATE, ZIPCODE, PHONE)
VALUES ('Sample Office', '456 Elm St', 'City', 'State', '54321', '555-987-6543');

-- Insert data into the AGENT table
INSERT INTO AGENT (OFFICE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE, LICENSE_NUMBER, DATE_HIRED)
VALUES (1, 'Jane', 'Smith', 'jane@example.com', '555-987-6543', 'A12345', '2023-10-31');

-- Insert data into the PROPERTY table
INSERT INTO PROPERTY (AGENT_ID, PROPERTY_TYPE, STREET, CITY, STATE, ZIPCODE, LIST_PRICE, NUM_BEDROOMS, NUM_BATHROOMS, SQUARE_FOOTAGE, DESCRIPTION, LISTING_DATE, STATUS)
VALUES (1, 'House', '789 Oak St', 'City', 'State', '67890', 250000.00, 3, 2, 1800, 'A lovely house', '2023-10-31', 'Active');

-- Insert data into the TRANSACTION table
INSERT INTO TRANSACTION (PROPERTY_ID, AGENT_ID, CLIENT_ID, DATE_SENT, AMOUNT, TYPE)
VALUES (1, 1, 1, '2023-10-31', 240000.00, 'Sell');

-- Insert data into the APPOINTMENT table
INSERT INTO APPOINTMENT (CLIENT_ID, AGENT_ID, PROPERTY_ID, APPT_DATE, APPT_TIME, PURPOSE)
VALUES (1, 1, 1, '2023-10-31', '10:00:00', 'Viewing');

-- Insert data into the IMAGE table
-- Use appropriate BLOB data for the IMAGE_DATA column

-- Insert data into the CLIENT_INQUIRY table
INSERT INTO CLIENT_INQUIRY (CLIENT_ID, PROPERTY_ID, MESSAGE, DATE_SENT)
VALUES (1, 1, 'Interested in this property', '2023-10-31');
