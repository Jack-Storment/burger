CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers_table
(
  id int NOT NULL IDENTITY PRIMARY KEY,
  burger_name varchar(255),
  burger_devoured BOOLEAN
    PRIMARY KEY (id)
);

