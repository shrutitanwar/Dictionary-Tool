module.exports.Antonyms = function (result){
	var prompt = require('prompt');
 	var lib = require('./lib.services.js');
 	console.log("Please enter the word:");
 	prompt.start();
 	prompt.get(['Word'], function (err, result) {
	  	if (err) { 
	  	console.log(err); 
	  	}
	  	else{  
	  		antonymsApi(result);
	  	}
	});  	 	
}

module.exports.antonymsApi = antonymsApi;

function antonymsApi(result){
	var dictionaryController = require('.././controllers/dictionary.controllers.js');
	var lib = require('./lib.services.js');
	var prompt = require('prompt'), request = require("request"), chalk = require("chalk");
	var options = {
		uri: 'http://api.wordnik.com/v4/word.json/'+ result.Word + '/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=10&api_key=' + lib.API_KEY,
		port : 80,
		method : 'GET',
		headers: {
      		"Content-Type":"application/json; charset=utf-8"
  		}
	}
	var req = request(options, function(err, res, body) {
		if(err) {
			console.log("error:");
			console.log(err);
		}
		else{
			var respJson = JSON.parse(body);
			var respData = respJson[0].words;
			console.log(chalk.red("Antonyms:-"));
			for (var i=0; i< respData.length; i++){
				var synonym = respData[i];
				console.log(
				chalk.cyan((i+1)+":"+synonym +"\n")
			);
			}
			dictionaryController.create();
		}
	});
}