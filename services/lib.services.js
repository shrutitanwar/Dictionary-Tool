var Q = require('q');
var API_KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
var Definitions = require('./definitions.services.js');
var Examples = require('./examples.services.js');
var WordOfTheDay = require('./word_of_the_day.services.js');
var Synonyms = require('./synonyms.services.js');
var Antonyms = require('./antonyms.services.js');
var WordFullDictionary = require('./word_full_dictionary.services.js');

module.exports = {
    API_KEY: API_KEY,
    Definitions: Definitions,
    Examples: Examples,
    WordOfTheDay: WordOfTheDay,
    Synonyms: Synonyms,
    Antonyms: Antonyms,
    WordFullDictionary: WordFullDictionary,
    Q: Q
}
