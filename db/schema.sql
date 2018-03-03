CREATE DATABASE fight_club_db;
USE fight_club_db;

CREATE TABLE fighters
(
	id int NOT NULL AUTO_INCREMENT,
	fighter_name varchar(255) NOT NULL,
	fighter_gender varchar(6) NOT NULL,
	fighter_image varchar(1000) NOT NULL,
	createdDate TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);