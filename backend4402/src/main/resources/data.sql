-- SAMPLE DATA FILE, REPOPULATES EVERY TIME PROGRAM IS RESTARTED.

INSERT INTO CLIENT (FIRST_NAME, LAST_NAME, EMAIL, PHONE, STREET, CITY, STATE, ZIPCODE)
VALUES
  ('John', 'Doe', 'john@example.com', '555-123-4567', '123 Main St', 'City', 'LA', '12345'),
  ('Alice', 'Johnson', 'alice@example.com', '555-987-6543', '456 Elm St', 'Town', 'LA', '56789');

INSERT INTO OFFICE (OFFICE_NAME, STREET, CITY, STATE, ZIPCODE, PHONE)
VALUES
  ('Baton Rouge Office', '456 Highland Rd', 'Baton Rouge', 'LA', '70808', '225-123-456'),
  ('New Orleans Office', '789 Canal St', 'New Orleans', 'LA', '70130', '504-987-654');

INSERT INTO AGENT (OFFICE_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE, LICENSE_NUMBER, DATE_HIRED)
VALUES
  (1, 'Jane', 'Smith', 'jane@example.com', '555-987-6543', 'A12345', '2023-10-31'),
  (2, 'Bob', 'Johnson', 'bob@example.com', '555-555-5555', 'B67890', '2023-11-01');

INSERT INTO PROPERTY (AGENT_ID, PROPERTY_TYPE, STREET, CITY, STATE, ZIPCODE, LIST_PRICE, NUM_BEDROOMS, NUM_BATHROOMS, SQUARE_FOOTAGE, DESCRIPTION, LISTING_DATE, STATUS, IMAGE_URL)
VALUES
  (1, 'House', '123 Main St', 'Baton Rouge', 'Louisiana', '70801', 300000.00, 4, 3, 2500, 'Spacious family home in a quiet neighborhood.', '2023-11-15', 'For Sale', 'https://media.levelhomeslifestyle.com/275/2021/6/23/95842055_2576514915934523_4874021237887598592_n.1000x750.jpg'),
  (2, 'Apartment', '456 Elm St', 'New Orleans', 'Louisiana', '70112', 200000.00, 2, 2, 1500, 'Modern apartment with great amenities.', '2023-11-16', 'For Sale', 'https://cdn.decoist.com/wp-content/uploads/2017/03/Modern-apartment-units-inside-heritage-building-Down-Under.jpg'),
  (1, 'Townhouse', '789 Oak St', 'Baton Rouge', 'Louisiana', '70809', 350000.00, 3, 2, 1800, 'Townhouse with a backyard and updated kitchen.', '2023-11-17', 'For Sale', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/347348510.jpg?k=56332536d74bb82e8275fd8dd9ba16cc43cb964227bcf9798e254e4f4fc366c2&o=&hp=1'),
  (2, 'House', '101 Maple St', 'Lafayette', 'Louisiana', '70501', 280000.00, 3, 2, 1900, 'Charming house with a wrap-around porch.', '2023-11-18', 'For Sale', 'https://maddenhomedesign.com/wp-content/uploads/2020/08/Rendering-rquick.jpeg'),
  (1, 'Apartment', '777 Pine St', 'Baton Rouge', 'Louisiana', '70802', 180000.00, 1, 1, 900, 'Cozy apartment close to downtown.', '2023-11-19', 'For Rent', 'https://rentpath-res.cloudinary.com/$img_current/t_3x2_webp_xl/t_unpaid/09571aa6323c75df60f6e0079a61b6f7'),
  (2, 'House', '555 Cedar St', 'Shreveport', 'Louisiana', '71101', 320000.00, 4, 3, 2200, 'Beautifully renovated historic home.', '2023-11-20', 'For Sale', 'https://images.dwell.com/photos-6063391372700811264/6133497471906439168-large/the-patio-and-the-rest-of-the-house-are-equally-open-to-the-outdoors.jpg'),
  (1, 'Townhouse', '888 Walnut St', 'Metairie', 'Louisiana', '70001', 260000.00, 2, 2, 1600, 'Townhouse with a view near the city.', '2023-11-21', 'For Sale', 'https://i.pinimg.com/originals/c9/6c/34/c96c34e5c7d3ba62ffb7ea296d50ccda.jpg'),
  (2, 'House', '999 Oak St', 'Baton Rouge', 'Louisiana', '70803', 400000.00, 5, 4, 3000, 'Spacious house with a backyard pool and unique design.', '2023-11-22', 'For Sale', 'https://s42173.pcdn.co/wp-content/uploads/2016/04/Cover-2-exterior.jpg.optimal.jpg'),
  (1, 'Apartment', '222 Elm St', 'Alexandria', 'Louisiana', '71301', 170000.00, 1, 1, 800, 'Bright and modern apartment complex.', '2023-11-23', 'For Rent', 'https://modern-apartment-in-prime-location-id-x30.bestbatonrougehotels.com/data/Pictures/OriginalPhoto/14076/1407610/1407610613/picture-baton-rouge-1.JPEG'),
  (2, 'House', '333 Magnolia St', 'Monroe', 'Louisiana', '71201', 550000.00, 4, 3, 2400, 'House with a large backyard and luxurious design.', '2023-11-24', 'For Sale', 'https://www.thehousedesigners.com/images/plans/HWD/bulk/6900/2_1.jpg');

INSERT INTO TRANSACTION (PROPERTY_ID, AGENT_ID, CLIENT_ID, DATE_SENT, AMOUNT, TYPE)
VALUES
  (1, 1, 1, '2023-10-31', 240000.00, 'Down Payment'),
  (2, 2, 2, '2023-11-01', 130000.00, 'Buy');

INSERT INTO APPOINTMENT (CLIENT_ID, AGENT_ID, PROPERTY_ID, APPT_DATE, APPT_TIME, PURPOSE)
VALUES
  (1, 1, 1, '2023-10-31', '10:00:00', 'Viewing'),
  (1, 1, 3, '2023-10-29', '08:00:00', 'Consultation'),
  (2, 2, 2, '2023-11-01', '14:00:00', 'Consultation');

INSERT INTO CLIENT_AGENT (CLIENT_ID, AGENT_ID) VALUES
    (1,1),
    (2,2);