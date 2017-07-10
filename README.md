# Bamazon

The Bamazon application is a storefront that uses MySQL to manage the inventory. There are three different node JS files that can be run in the terminal depending on if the user of the application is a customer, manager, or supervisor.

## bamazonCustomer.js

When bamazonCustomer.js is ran in the terminal, all of the products in the inventory will be displayed. This information will include the product name, the product department, the price, and the quantity in stock. The user will also be prompted, "Would you like to buy something?"

![bamazonCustomer1](bamazonScreenshots/customer1.png)

If the user selects yes, the user will then be asked for the ID of the product that they would like to buy and the quantity. When the order has been gone through, the user will see the text, "SOLD!!!" across the screen, and all of the products will be displayed again.

![bamazonCustomer2](bamazonScreenshots/customer2.png)

## bamazonManager.js

When the bamazonManager.js is ran in the terminal, the user will be asked whether they would like to:
* View Products for Sale
* View Low Inventory
* Add to Inventory
* Add New Product 

![bamazonManager1](bamazonScreenshots/manager1.png)

If View Products for Sale is selected, all of the products in the inventory will be displayed. This information will include the product name, the product department, the price, and the quantity in stock.

![bamazonManager2](bamazonScreenshots/manager2.png)

If View Low Inventory is selected, all of the products with less than 5 items in stock will be displayed.

![bamazonManager3](bamazonScreenshots/manager3.png)

If Add to Inventory is selected, the user will be asked for the product and quantity that they would like to update.

![bamazonManager4](bamazonScreenshots/manager4.png)

If Add a New Product is selected, the user will be asked for the product name, the product department, the price, and the quantity in stock. The user can confirm that the product has been added by then choosing View Products for Sale.

![bamazonManager6](bamazonScreenshots/manager6.png)

## bamazonSupervisor.js

When the bamazonSupervisor.js is ran in the terminal, the user will be asked whether they would like to:
* View Product Sales by Department
* Create New Department

![bamazonSupervisor1](bamazonScreenshots/supervisor1.png)

If View Product Sales by Department is selected, the table will be displayed showing the department ID, the department name, overhead costs, product sales, and total profit.

![bamazonSupervisor2](bamazonScreenshots/supervisor2.png)

If Create New Department is selected, the user will be asked for the new department name and the overhead costs for that department. When the department was successfull created, the message "Department Added!" will be displayed. 

The user can also confirm that the department was created by choosing the View Product Sales by Department option again.

![bamazonSupervisor3](bamazonScreenshots/supervisor3.png)

