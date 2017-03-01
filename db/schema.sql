CREATE DATABASE tweetsList_db;
USE tweetsList2_db;

CREATE TABLE tweets (
id int NOT NULL AUTO_INCREMENT,
hash_name varchar(255) NOT NULL,
saved BOOLEAN NOT NULL,
PRIMARY KEY (id)
);
