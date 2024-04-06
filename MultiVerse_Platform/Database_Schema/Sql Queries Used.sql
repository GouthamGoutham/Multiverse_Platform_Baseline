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
