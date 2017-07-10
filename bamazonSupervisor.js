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
			choices:["View Products by Department","Create New Department"]
		}
	]).then(function(answer){
		switch (answer.options){
			case "View Products by Department":
				displayDepartment();
				break;
			case "Create New Department":
				createDepartment();
				break;
		}
	});
}

function displayDepartment(){
	var newTable=
		"SELECT departments.id, departments.department_name, departments.over_head_costs, " +
			"SUM(products.product_sales) AS product_sales, " +
			"(SUM(products.product_sales)- departments.over_head_costs) AS total_profit "+
		"FROM departments "+
		"LEFT JOIN products "+
		"ON departments.department_name=products.department_name "+
		"GROUP BY departments.department_name "+
		"ORDER BY departments.id";
	connection.query(newTable,function(error,results){
		if (error) throw error;
		for (var i=0; i<results.length; i++){
			console.log("ID: " + results[i].id + "  | " + results[i].department_name + " | Overhead Costs: $" + results[i].over_head_costs + " | Product Sales: $" + results[i].product_sales + " | Total Profit: $" + results[i].total_profit);
		}
		console.log("------------------------------------------------------------------------------------\n");
		showOptions();
	});
	
}

function createDepartment(){
	inquirer.prompt([
		{
			type:"input",
			name:"departmentName",
			message: "What is the department you would like to add?"
		},
		{
			type:"input",
			name:"overhead",
			message:"What is the overhead costs for that department?"
		}
	]).then(function(answer){
		connection.query("INSERT INTO departments SET ?", {
			department_name: answer.departmentName,
			over_head_costs: answer.overhead,
		}, function(error,results){
			if (error) throw error;
			console.log("Department Added!\n");
			showOptions();
		});
	});
	
}
showOptions();