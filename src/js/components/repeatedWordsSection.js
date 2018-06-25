const countRepeatedWords = require('./countRepeatedWords');
const addRepeatedWords = require('./addRepeatedWords');
const highlightText = require('./highlightText');
const parseInput = require('./parseInput');

const overusedWordsOutput = document.getElementById('overused-words-output');

const repeatedWordsSection = (textAreaValue, checkedWords) => {
    // parse input and split into words
    const words = parseInput(/\W+/, textAreaValue);
    // returns an array of arrays with unique filtered words, sorted from the largest to the lowest repetition number
    const repeatingWords = countRepeatedWords(words);
    // adds repeating words to the list
    addRepeatedWords(repeatingWords);
    // highlight repeated words
    overusedWordsOutput.innerHTML = highlightText(checkedWords);
};

module.exports = repeatedWordsSection;