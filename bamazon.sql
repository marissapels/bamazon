DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INTEGER(11),
    product_sales DECIMAL(10,2)
);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Purse","Accessories",50.75,10, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES("Dress","Clothing",20.00,50,2000);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Hat","Accessories",15.35,25,1200);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Frying Pan","Kitchen Supplies",45.00,20,3000);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Pens","Office Supplies",2.50,500,500);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Laptop Case","Office Supplies", 17.75,40,1100);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Coffee Maker","Kitchen Supplies",38.25,25,900);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Blouse","Clothing",25.34,20,1000);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Belt","Accessories",15.00,40,900);

INSERT INTO products(product_name, department_name, price,stock_quantity, product_sales)
VALUES("Silverware","Kitchen Supplies",86.75,55,500);

SELECT*FROM products;

CREATE TABLE departments (
	id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(50),
    over_head_costs DECIMAL(10,2)
);

INSERT INTO departments(department_name,over_head_costs)
VALUES("Accessories",1000.00), ("Clothing",900.00), ("Kitchen Supplies",850.00),("Office Supplies",800);

SELECT*FROM departments;

SELECT departments.id, departments.department_name, departments.over_head_costs, 
	SUM(products.product_sales) AS product_sales,
    (SUM(products.product_sales)- departments.over_head_costs) AS total_profit
FROM departments 
LEFT JOIN products
ON departments.department_name=products.department_name
GROUP BY departments.department_name
ORDER BY departments.id;

SELECT products.department_name, SUM(products.product_sales)
FROM products
GROUP BY products.department_name;

