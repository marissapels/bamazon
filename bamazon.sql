DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INTEGER(11)
);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Purse","Accessories",50.75,5);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dress","Clothing",20.00,30);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Hat","Accessories",15.35,25);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Frying Pan","Kitchen Supplies",45.00,20);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Pens","Office Supplies",2.50,500);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Laptop Case","Office Supplies", 17.75,40);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Coffee Maker","Kitchen Supplies",38.25,25);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Blouse","Clothing",25.34,18);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Belt","Accessories",15.00,40);

INSERT INTO products(product_name, department_name, price,stock_quantity)
VALUES("Silverware","Kitchen Supplies",86.75,55);

SELECT*FROM products;
