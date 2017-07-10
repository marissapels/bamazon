var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Map-121790",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
});


function showOptions(){
	inquirer.prompt([
		{
			type:"list",
			name:"options",
			message:"Hello, manager! What would you like to do?",
			choices:["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product"]
		}
	]).then(function(answer){
		switch (answer.options){
			case "View Products for Sale":
				displayProducts();
				break;
			case "View Low Inventory":
				lowInventory();
				break;
			case "Add to Inventory":
				addInventory();
				break;
			case "Add New Product":
				addProduct();
				break;
		}
	});
}

function displayProducts(){
	connection.query("SELECT*FROM products", function(error,results){
		if (error) throw error;
		for (var i=0; i<results.length; i++){
			console.log("ID: " + results[i].id + "  | " + results[i].product_name + " | " + results[i].department_name + " | $" + results[i].price + " | " + results[i].stock_quantity + " in stock");
		}
		console.log("-----------------------------------------");
		showOptions();
	});
	
}

function lowInventory(){
	connection.query("SELECT*FROM products WHERE stock_quantity < 5", function(error,results){
		if (error) throw error;
		for (var i=0; i<results.length; i++){
			console.log("ID: " + results[i].id + "  | " + results[i].product_name + " | " + results[i].department_name + " | $" + results[i].price + " | " + results[i].stock_quantity + " in stock");
		}
		console.log("-----------------------------------------");
		showOptions();
	});
	
}

function addInventory(){
	inquirer.prompt([
		{
			type:"input",
			name:"chooseProduct",
			message:"What is the ID of the product you would like to change the inventory for?"
		},
		{
			type:"input",
			name:"newInventory",
			message:"What is the new product quantity?"
		}
	]).then(function(answer){
		connection.query("UPDATE products SET ? WHERE ?",[
			{
				stock_quantity: answer.newInventory
			},
			{
				id: answer.chooseProduct
			}
		], function(error,results){
			if (error) throw error;
		});
		console.log("Inventory updated for product: "+answer.chooseProduct+"!\n");
		showOptions();
	});
}

function addProduct(){
	inquirer.prompt([
		{
			type:"input",
			name:"productName",
			message: "What product would you like to add?"
		},
		{
			type:"input",
			name:"department",
			message:"What is the product department?"
		},
		{
			type:"input",
			name:"price",
			message:"What is the listing price?"
		},
		{
			type:"input",
			name:"quantity",
			message:"What is the quantity?"
		}
	]).then(function(answer){
		connection.query("INSERT INTO products SET ?", {
			product_name: answer.productName,
			department_name: answer.department,
			price: answer.price,
			stock_quantity: answer.quantity
		}, function(error,results){
			if (error) throw error;
			console.log("Product Added!\n");
			showOptions();
		});
	});
	
}

showOptions();