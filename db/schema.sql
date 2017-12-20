-- Create the database:

create database burgers_db;

use burgers_db;

create table burgers(
	id int auto_increment NOT NULL,
	burger_name varchar(50) NOT NULL,
	devoured boolean default false NOT NULL,
	date timestamp NOT NULL,
	PRIMARY KEY(id)
);

