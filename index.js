
var chalk  = require('chalk'),
	clear  = require('clear'),
	CLI    = require('clui'),
	figlet = require('figlet'),
	express = require('express'),
	http = require('http'),
	prompt = require('prompt'),
	co =  require('co'),
	program = require('commander'),
	request = require('superagent');
var app = express();
module.exports = app;
var dictionary = require('./routes/dictionary.routes.js') //routes are defined here

clear();
console.log(
  chalk.cyan(
    figlet.textSync('Hello!', { horizontalLayout: 'full' })
  )
);
console.log('Welcome to Dictionary Tool!'+ '\n'+ 'What would you like to do?'+'\n');
console.log("1. Word Definition"+'\n'+ "2. Word Example"+'\n');

prompt.start();

prompt.get(['Choice'], function (err, result) {
  if (err) { 
  	return onErr(err); 
  }
  else{
  	app.get(result.Choice, function(req, res){
  	console.log(req.body);
  	})
  }
});

function onErr(err) {
    console.log(err);
    return 1;
}

var chalk = require('chalk'),
    clear = require('clear'),
    CLI = require('clui'),
    figlet = require('figlet'),
    express = require('express'),
    prompt = require('prompt'),
    co = require('co'),
    program = require('commander'),
    request = require('superagent');

var app = express();
var dictionaryController = require('./controllers/dictionary.controllers.js');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Hello!', { horizontalLayout: 'full' })
    )
);
console.log('Welcome to Dictionary Tool!' + '\n');
dictionaryController.create();
