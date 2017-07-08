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

function displayProducts(){
	connection.query("SELECT*FROM products", function(error,results){
		if (error) throw error;
		for (var i=0; i<results.length; i++){
			console.log("ID: " + results[i].id + "  | " + results[i].product_name + " | " + results[i].department_name + " | $" + results[i].price + " | " + results[i].stock_quantity + " in stock");
		}
		console.log("-----------------------------------------");
	});
}

function buyProduct(){
	connection.query("SELECT*FROM products", function(error,results){
		if (error) throw error;
		inquirer.prompt([
			{
				type: "confirm",
				name: "start",
				message: "Would you like to buy something?"
			}
		])
		.then(function(answer){
			if (answer.start===false){
				return;
			}
			else{
				inquirer.prompt([

				{
					type: "input",
					name: "choice",
					message: "What is the ID of the product you would like to buy?"
				},
				{
					type: "input",
					name: "quantityItem",
					message: "How many units of the product would you like to buy?"
				}
			])
				.then(function(answer){
					// console.log("answer.choice: "+ answer.choice);
					// console.log("answer.choice + result: " + results[answer.choice].id);
					var chosenItem;
					for (var i=0; i<results.length; i++){
						if (+results[i].id === +answer.choice){
							chosenItem=results[i];
							// console.log(chosenItem);
						}
					}

					if (answer.quantityItem <= chosenItem.stock_quantity){
						console.log("SOLD!!!\n");
						connection.query("UPDATE products SET ? WHERE ?",
							[
								{
									stock_quantity: +chosenItem.stock_quantity- +answer.quantityItem
								},
								{
									id: chosenItem.id
								}
							]
						);
						displayProducts();
						buyProduct();
					}
					else{
						console.log("Sorry, there are not enough items in stock");
					}
				});
			}
		})
	});
}

displayProducts();
buyProduct();