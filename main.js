var inquirer = require("inquirer");
var mysql = require("mysql");

console.log("dependencies are loaded")

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'what do you want to do?',
      choices: [
        'buy',
        new inquirer.Separator(),
        'sell',
      ]
    },
    {
      type: 'list',
      name: 'dept',
      message: 'What department do you need?',
      choices: ['Computers', 'Home', 'Clothes', 'Food', 'Collectibles'],
      filter: function(val) {
        return val.toLowerCase();
      }
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
  });


  