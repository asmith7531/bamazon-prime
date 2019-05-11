var inquirer = require("inquirer");
var mysql = require("mysql");
var newItem;

//connecting the js to the mysql database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zenziethewonderdog26!",
  database:"bamazon"
});
con.connect(function(err,res) {
  if (err) throw err;
start();
});
function start(){
  inquirer
    .prompt([{
      type: 'list',
      name: 'action',
      message: 'Would you like to place an order at Bamazon?',
      choices: [
      
        'yes',
        new inquirer.Separator(),
        'no',
  
      ]
    }, ])
    .then(answers => {
      if (answers.action === "yes") {
        //calls the buy function to initiate the inquirer prompts associated with buying
        buy();
      }else{
        con.end;
      }
    });
  }

function buy() {
  con.query("SELECT * FROM inventory", function(err, results) {
    if (err) throw err;
   
    // once you have the items, prompt the user for which they'd like to bid on
    var inventoryArray = [];
    inquirer
      .prompt([
        {
          name: "name",
          type: "rawlist",
          choices: function() {
            for (var i = 0; i < results.length; i++) {
              inventoryArray.push(results[i]);
            }
            return inventoryArray;
          },
          message: "What item would you like to buy?"
        },
        {
          name: "quantity",
          type: "number",
          message: "How many would you like to purchase?"
        }
      ]).then(order=>{
        
        for (var i = 0; i < inventoryArray.length; i++) {
          if (inventoryArray[i].name==order.name){
            
            
           var inStock = parseInt(inventoryArray[i].quantity)
           console.log(inStock)
           console.log(order.quantity)
            if (inventoryArray[i].quantity>order.quantity){
              inStock -= order.quantity
              con.query(
                "UPDATE inventory SET ? WHERE ?",
                [
                  {
                   quantity : inStock
                  },
                  {
                    id:inventoryArray[i].id
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log("Order placed successfully!");
                  start();
                }
              );
            }
          }
        }
        console.log(inventoryArray)
        return inventoryArray;
      })
    })
  }