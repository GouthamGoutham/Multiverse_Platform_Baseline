/*
SN.no 			Owner name  		created date 		Description
001				Goutham.M 			04/06/2024			Created for the multiverse platform
*/

--creating database
create database multiverse_db;

--creating tables
---------------------------------------------------------------Authentication tables----------------------------------------------
-- Table: g_t_users
CREATE TABLE g_t_users (
    i_user_id INT AUTO_INCREMENT PRIMARY KEY,
    sz_user_name VARCHAR(255) NOT NULL,
    sz_mail VARCHAR(255) NOT NULL,
    sz_password VARCHAR(255) NOT NULL,
    dt_dob DATE,
    sz_number VARCHAR(20),
    dt_created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    sz_role VARCHAR(50)
);

-- Table: g_t_session
CREATE TABLE g_t_session (
    i_session_id INT AUTO_INCREMENT PRIMARY KEY,
    i_user_id INT,
    sz_user_name VARCHAR(255) NOT NULL,
    dt_created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    sz_role VARCHAR(50),
    FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id)
);

-----------------------------------------------------------Service 1:Shopsphere marketplace--------------------------------------------
-- Table: sm_t_products
CREATE TABLE sm_t_products (
    i_product_id INT AUTO_INCREMENT PRIMARY KEY,
    sz_product_name VARCHAR(255) NOT NULL,
    sz_product_desc TEXT,
    sz_category VARCHAR(100),
    sz_stock_YN CHAR(1) DEFAULT 'Y'
);

-- Table: sm_t_product_details
CREATE TABLE sm_t_product_details (
    i_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    i_product_id INT,
    sz_product_name VARCHAR(255),
    f_price DECIMAL(10, 2),
    f_discount DECIMAL(10, 2),
    sz_product_info TEXT,
    FOREIGN KEY (i_product_id) REFERENCES sm_t_products(i_product_id)
);

-- Table: sm_t_cart_details
CREATE TABLE sm_t_cart_details (
    i_cart_id INT AUTO_INCREMENT PRIMARY KEY,
    i_user_id INT,
    i_detail_id INT,
    i_product_id INT,
    sz_product_name VARCHAR(255),
	f_price DECIMAL(10, 2),
    i_quantity INT,
    dt_created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    sz_order_placed_YN CHAR(1) DEFAULT 'N',
    FOREIGN KEY (i_detail_id) REFERENCES sm_t_product_details(i_detail_id),
	FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id)
);

-- Table: sm_t_reviews
CREATE TABLE sm_t_reviews (
    i_review_id INT AUTO_INCREMENT PRIMARY KEY,
    i_product_id INT,
    sz_user_name VARCHAR(255),
    sz_review TEXT,
    i_rating_count INT,
    dt_created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (i_product_id) REFERENCES sm_t_products(i_product_id)
);

----------------------------------------------------Service 2:Shopsphere marketplace--------------------------------------------

-- Table: te_t_restaurants
CREATE TABLE te_t_restaurants (
    i_restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
    sz_restaurant_name VARCHAR(255) NOT NULL,
    sz_restaurant_address VARCHAR(255),
    sz_city VARCHAR(100),
    sz_state VARCHAR(100),
    sz_phone VARCHAR(20),
    sz_email VARCHAR(255),
    f_opening_hrs TIME,
    f_closing_hrs TIME
);

-- Table: te_t_menu_items
CREATE TABLE te_t_menu_items (
    i_item_id INT AUTO_INCREMENT PRIMARY KEY,
    i_restaurant_id INT,
    sz_item_name VARCHAR(255) NOT NULL,
    sz_desc TEXT,
    f_price DECIMAL(10, 2),
    sz_category VARCHAR(100),
    sz_cuisine VARCHAR(100),
    sz_image_url VARCHAR(255),
    FOREIGN KEY (i_restaurant_id) REFERENCES te_t_restaurants(i_restaurant_id)
);

-- Table: te_t_order_details
CREATE TABLE te_t_order_details (
    i_order_id INT AUTO_INCREMENT PRIMARY KEY,
    i_user_id INT,
    i_item_id INT,
    i_quantity INT,
    f_total_price DECIMAL(10, 2),
    dt_order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    sz_order_status VARCHAR(50),
    FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id), 
    FOREIGN KEY (i_item_id) REFERENCES te_t_menu_items(i_item_id)
);

-- Table: te_t_feedback
CREATE TABLE te_t_feedback (
    i_feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    i_user_id INT,
    i_restaurant_id INT,
    sz_comment TEXT,
    dt_feedback_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id),
    FOREIGN KEY (i_restaurant_id) REFERENCES te_t_restaurants(i_restaurant_id)
);

----------------------------------------------------Service 3:Journey Junction Navigator--------------------------------------------
-- Table: jn_t_flight_dtls
CREATE TABLE jn_t_flight_dtls (
    i_flight_id INT PRIMARY KEY,
    i_flight_number INT,
    sz_departure_airport VARCHAR(255),
    sz_arrival_airport VARCHAR(255),
    sz_departure_time VARCHAR(50),
    sz_arrival_time VARCHAR(50),
    f_ticket_price DECIMAL(10, 2),
    i_available_seats INT,
    sz_duration VARCHAR(50)
);

-- Table: jn_t_hotel_dtls
CREATE TABLE jn_t_hotel_dtls (
    i_hotel_id INT PRIMARY KEY,
    sz_hotel_name VARCHAR(255),
    sz_location VARCHAR(255),
    i_rating INT,
    f_price_per_night DECIMAL(10, 2),
    i_available_rooms INT,
    sz_check_in_time VARCHAR(50),
    sz_check_out_time VARCHAR(50)
);

-- Table: jn_t_booking_dtls
CREATE TABLE jn_t_booking_dtls (
    i_booking_id INT PRIMARY KEY,
    i_user_id INT,
    i_flight_id INT,
    i_hotel_id INT,
    dt_booking_date DATE,
    f_total_price DECIMAL(10, 2),
    sz_payment_status VARCHAR(50),
    FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id),
    FOREIGN KEY (i_flight_id) REFERENCES jn_t_flight_dtls(i_flight_id),
    FOREIGN KEY (i_hotel_id) REFERENCES jn_t_hotel_dtls(i_hotel_id)
);

-- Table: jn_t_feedback
CREATE TABLE jn_t_feedback (
    i_feedback_id INT PRIMARY KEY,
    i_user_id INT,
    i_flight_id INT,
    i_hotel_id INT,
    i_rating INT,
    sz_comments TEXT,
    dt_created_date DATE,
    FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id),
    FOREIGN KEY (i_flight_id) REFERENCES jn_t_flight_dtls(i_flight_id),
    FOREIGN KEY (i_hotel_id) REFERENCES jn_t_hotel_dtls(i_hotel_id)
);

----------------------------------------------------Service 4:Vitalverse Care--------------------------------------------

-- Table: vc_t_hospital_dtls
CREATE TABLE vc_t_hospital_dtls (
    i_hospital_id INT PRIMARY KEY,
    sz_hospital_name VARCHAR(255),
    sz_location VARCHAR(255),
    i_rating INT,
    sz_specialties VARCHAR(255),
    I_contact_number VARCHAR(20)
);

-- Table: vc_t_appointment_dtls
CREATE TABLE vc_t_appointment_dtls (
    i_appointment_id INT PRIMARY KEY,
    i_patient_id INT,
    hospital_id INT,
    doctor_id INT,
    dt_appointment_date DATE,
    sz_appointment_time TIME,
    sz_status VARCHAR(50),
    i_user_id INT,
    FOREIGN KEY (i_patient_id) REFERENCES vc_t_patient_health_info(i_patient_id),
    FOREIGN KEY (hospital_id) REFERENCES vc_t_hospital_dtls(i_hospital_id),
    FOREIGN KEY (doctor_id) REFERENCES vc_t_doctor_details(i_doctor_id),
	FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id)
);

-- Table: vc_t_health_resourses
CREATE TABLE vc_t_health_resourses (
    i_resource_id INT PRIMARY KEY,
    sz_resource_title VARCHAR(255),
    sz_description TEXT,
    sz_category VARCHAR(100),
    dt_upload_date DATE,
    sz_source_url VARCHAR(255)
);

-- Table: vc_t_patient_health_info
CREATE TABLE vc_t_patient_health_info (
    i_patient_id INT PRIMARY KEY,
    sz_patient_name VARCHAR(255),
    sz_gender VARCHAR(10),
    dt_dob DATE,
    sz_address VARCHAR(255),
    i_contact_number VARCHAR(20),
    sz_email VARCHAR(255),
    b_scan_reports BLOB,
    i_user_id INT,
    dt_created_date DATE,
	FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id),
);

-- Table: vc_t_doctor_details
CREATE TABLE vc_t_doctor_details (
    i_doctor_id INT PRIMARY KEY,
    sz_doctor_name VARCHAR(255),
    sz_specialization VARCHAR(255),
    i_hospital_id INT,
    sz_qualification VARCHAR(255),
    sz_experience VARCHAR(50),
    i_contact_number VARCHAR(20),
    sz_email VARCHAR(255),
    sz_profile_picture_url VARCHAR(255),
    FOREIGN KEY (i_hospital_id) REFERENCES vc_t_hospital_dtls(i_hospital_id)
);


----------------------------------------------------Service 5:Connect-verse platform--------------------------------------------

-- Table: cv_t_user_profiles
CREATE TABLE cv_t_user_profiles (
    i_user_id INT,
    sz_username VARCHAR(255),
    sz_bio TEXT,
    sz_location VARCHAR(255),
    sz_profile_picture_url VARCHAR(255),
    dt_joined DATE,
    sz_social_links TEXT,
    sz_interests TEXT,
    i_followers_count INT,
    i_following_count INT,
	FOREIGN KEY (i_user_id) REFERENCES g_t_users(i_user_id)
);

-- Table: cv_t_feed_posts
CREATE TABLE cv_t_feed_posts (
    i_post_id INT PRIMARY KEY,
    i_user_id INT,
    sz_captions TEXT,
    dt_posted DATETIME,
    sz_image_url VARCHAR(255),
    i_likes_count INT,
    FOREIGN KEY (i_user_id) REFERENCES cv_t_user_profiles(i_user_id)
);

-- Table: cv_t_message_details
CREATE TABLE cv_t_message_details (
    i_message_id INT PRIMARY KEY,
    i_sender_id INT,
    i_receiver_id INT,
    sz_message_content TEXT,
    dt_sent DATETIME,
    sz_status VARCHAR(50),
    FOREIGN KEY (i_sender_id) REFERENCES cv_t_user_profiles(i_user_id),
    FOREIGN KEY (i_receiver_id) REFERENCES cv_t_user_profiles(i_user_id)
);


--creating indexes

-- Indexes for g_t_users table
CREATE INDEX idx_user_name ON g_t_users (sz_user_name);
CREATE INDEX idx_user_mail ON g_t_users (sz_mail);
CREATE INDEX idx_user_role ON g_t_users (sz_role);

-- Indexes for g_t_session table
CREATE INDEX idx_session_user_id ON g_t_session (i_user_id);

-- Indexes for sm_t_products table
CREATE INDEX idx_product_name ON sm_t_products (sz_product_name);
CREATE INDEX idx_product_category ON sm_t_products (sz_category);

-- Indexes for sm_t_product_details table
CREATE INDEX idx_product_id ON sm_t_product_details (i_product_id);

-- Indexes for sm_t_cart_details table
CREATE INDEX idx_cart_user_id ON sm_t_cart_details (i_user_id);
CREATE INDEX idx_cart_detail_id ON sm_t_cart_details (i_detail_id);

-- Indexes for sm_t_reviews table
CREATE INDEX idx_review_product_id ON sm_t_reviews (i_product_id);

-- Indexes for te_t_restaurants table
CREATE INDEX idx_restaurant_name ON te_t_restaurants (sz_restaurant_name);
CREATE INDEX idx_restaurant_city ON te_t_restaurants (sz_city);

-- Indexes for te_t_menu_items table
CREATE INDEX idx_menu_item_name ON te_t_menu_items (sz_item_name);
CREATE INDEX idx_menu_item_restaurant_id ON te_t_menu_items (i_restaurant_id);

-- Indexes for te_t_order_details table
CREATE INDEX idx_order_user_id ON te_t_order_details (i_user_id);
CREATE INDEX idx_order_item_id ON te_t_order_details (i_item_id);

-- Indexes for te_t_feedback table
CREATE INDEX idx_feedback_user_id ON te_t_feedback (i_user_id);
CREATE INDEX idx_feedback_restaurant_id ON te_t_feedback (i_restaurant_id);

-- Indexes for jn_t_flight_dtls table
CREATE INDEX idx_flight_departure_airport ON jn_t_flight_dtls (sz_departure_airport);
CREATE INDEX idx_flight_arrival_airport ON jn_t_flight_dtls (sz_arrival_airport);

-- Indexes for jn_t_hotel_dtls table
CREATE INDEX idx_hotel_name ON jn_t_hotel_dtls (sz_hotel_name);
CREATE INDEX idx_hotel_location ON jn_t_hotel_dtls (sz_location);

-- Indexes for jn_t_booking_dtls table
CREATE INDEX idx_booking_user_id ON jn_t_booking_dtls (i_user_id);
CREATE INDEX idx_booking_flight_id ON jn_t_booking_dtls (i_flight_id);
CREATE INDEX idx_booking_hotel_id ON jn_t_booking_dtls (i_hotel_id);

-- Indexes for jn_t_feedback table
CREATE INDEX idx_feedback_user_id ON jn_t_feedback (i_user_id);
CREATE INDEX idx_feedback_flight_id ON jn_t_feedback (i_flight_id);
CREATE INDEX idx_feedback_hotel_id ON jn_t_feedback (i_hotel_id);

-- Indexes for vc_t_hospital_dtls table
CREATE INDEX idx_hospital_name ON vc_t_hospital_dtls (sz_hospital_name);
CREATE INDEX idx_hospital_location ON vc_t_hospital_dtls (sz_location);

-- Indexes for vc_t_appointment_dtls table
CREATE INDEX idx_appointment_patient_id ON vc_t_appointment_dtls (i_patient_id);
CREATE INDEX idx_appointment_hospital_id ON vc_t_appointment_dtls (hospital_id);
CREATE INDEX idx_appointment_doctor_id ON vc_t_appointment_dtls (doctor_id);

-- Indexes for vc_t_health_resourses table
CREATE INDEX idx_resource_category ON vc_t_health_resourses (sz_category);

-- Indexes for vc_t_patient_health_info table
CREATE INDEX idx_patient_name ON vc_t_patient_health_info (sz_patient_name);
CREATE INDEX idx_patient_email ON vc_t_patient_health_info (sz_email);

-- Indexes for vc_t_doctor_details table
CREATE INDEX idx_doctor_name ON vc_t_doctor_details (sz_doctor_name);
CREATE INDEX idx_doctor_specialization ON vc_t_doctor_details (sz_specialization);

-- Indexes for cv_t_user_profiles table
CREATE INDEX idx_user_profile_username ON cv_t_user_profiles (sz_username);

-- Indexes for cv_t_feed_posts table
CREATE INDEX idx_feed_post_user_id ON cv_t_feed_posts (i_user_id);

-- Indexes for cv_t_message_details table
CREATE INDEX idx_message_sender_id ON cv_t_message_details (i_sender_id);
CREATE INDEX idx_message_receiver_id ON cv_t_message_details (i_receiver_id);

--Function to Retrieve User Profile
DELIMITER //
CREATE FUNCTION GetUserProfile(p_user_id INT) RETURNS VARCHAR(255)
BEGIN
    DECLARE user_profile VARCHAR(255);

    SELECT CONCAT(sz_username, ', ', sz_bio, ', ', sz_location) INTO user_profile
    FROM cv_t_user_profiles
    WHERE i_user_id = p_user_id;

    RETURN user_profile;
END //
DELIMITER ;


--Function to Calculate Total Price of Cart
DELIMITER //
CREATE FUNCTION CalculateTotalPrice(p_user_id INT) RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE total_price DECIMAL(10, 2);

    SELECT SUM(f_price * i_quantity) INTO total_price
    FROM sm_t_cart_details
    WHERE i_user_id = p_user_id;

    RETURN total_price;
END //
DELIMITER ;

--Procedure for User Authentication
DELIMITER //
CREATE PROCEDURE AuthenticateUser(IN p_username VARCHAR(255), IN p_password VARCHAR(255), OUT p_session_id INT)
BEGIN
    DECLARE user_count INT;

    SELECT COUNT(*) INTO user_count 
    FROM g_t_users 
    WHERE sz_user_name = p_username AND sz_password = p_password;

    IF user_count = 1 THEN
        -- Generate Session ID (You can implement your own session management logic)
        SET p_session_id = 12345; -- Example session ID
    ELSE
        SET p_session_id = NULL;
    END IF;
END //
DELIMITER ;

--Procedure for Booking Appointment
DELIMITER //
CREATE PROCEDURE BookAppointment(IN p_user_id INT, IN p_hospital_id INT, IN p_doctor_id INT, IN p_date DATE, IN p_time TIME, OUT p_appointment_id INT)
BEGIN
    INSERT INTO vc_t_appointment_dtls (i_patient_id, hospital_id, doctor_id, dt_appointment_date, sz_appointment_time, sz_status, i_user_id)
    VALUES (p_user_id, p_hospital_id, p_doctor_id, p_date, p_time, 'Scheduled', p_user_id);

    SET p_appointment_id = LAST_INSERT_ID();
END //
DELIMITER ;

--Trigger for Updating Available Seats
CREATE TRIGGER UpdateAvailableSeats AFTER INSERT ON te_t_order_details
FOR EACH ROW
BEGIN
    UPDATE te_t_menu_items
    SET i_available_seats = i_available_seats - NEW.i_quantity
    WHERE i_item_id = NEW.i_item_id;
END;

--Trigger for Recording User Activity
CREATE TRIGGER RecordUserActivity AFTER INSERT ON any_table
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (user_id, action, timestamp)
    VALUES (NEW.i_user_id, 'INSERT', NOW());
END;
