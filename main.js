var inquirer = require("inquirer");
var mysql = require("mysql");
var newItem;
inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'what do you want to do?',
      choices: [
        new inquirer.Separator(),
        'buy',
        new inquirer.Separator(),
        'sell',
        new inquirer.Separator(),
      ]
    },
  ])
  .then(answers => {
    if (answers.action === "buy"){
      //calls the buy function to initiate the inquirer prompts associated with buying
      buy()
    }
    else{
      sell()
    }
  });
function buy() {
  inquirer.prompt([
    {
      type:'list',
      name:'action',
      message:new inquirer.Separator(),
      choices:[
        new inquirer.Separator(),
        "search by item name",
        new inquirer.Separator(),
        "search by department",
        new inquirer.Separator(),
      ]
    }
  ]).then(
    
    ///////////////////////what do you want this do do?
    //needs to console.log/display items from the sql database that fit the search query
  )
}
function sell() {
  const prompts = new Rx.Subject();
inquirer.prompt(prompts);
 
// At some point in the future, push new questions
prompts.next({
  type:'input',
  name:'name',
  message:'What is the name of the item?'
});
prompts.next({
  type:'list',
  name:'dept',
  message:'What department would you like it stored in?'
});
prompts.next({
  type:'number',
  name:'price',
  message:'What is the minimum price per unit of your item?'
});
prompts.next({
  type:'number',
  name:'quantity',
  message:'How many of them do you want to sell?'
});
// When you're done
prompts.complete()
}

console.log(newItem);