var inquirer = require("inquirer");
var mysql = require("mysql");
var newItem;
inquirer
  .prompt([{
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      new inquirer.Separator(),
      'buy',
      new inquirer.Separator(),
      'sell',
      new inquirer.Separator(),
    ]
  }, ])
  .then(answers => {
    if (answers.action === "buy") {
      //calls the buy function to initiate the inquirer prompts associated with buying
      buy()
    } else {
      sell()
    }
  });
function buy() {
  inquirer.prompt([{
    type: 'list',
    name: 'action',
    message: new inquirer.Separator(),
    choices: [
      new inquirer.Separator(),
      "Search by item name",
      new inquirer.Separator(),
      "Search by department",
      new inquirer.Separator(),
    ]
  }]).then(answers => {
    console.log(answers);
    ///////////////////////what do you want this do do?
    //needs to call a function that will prompt the user with the names of all the results of their query items from the sql database that fit the search query and call 
  })
}
function sell() {
  inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: 'What is the name of your item?'
    },
    {
      type: 'list',
      name: "dept",
      message: 'What department should it me categorized into?',
      choices: [
        'Home',
        'Garden',
        'Computers',
        'Electronics',
        "Toys"
      ]
    }
  ]).then(answers => {
    var item = answers;
    uploadItem(answers);
    /////////////////////////what do you want this to do?
    //calll a function that will push the answers object into the MySQL database
    //--pass in answers object as a parameter of the function
  })
}
