const getStringData = require('../components/getStringData');
const highlightSelectedOverusedWords = require('../components/highlightSelectedOverusedWords');
const countRepeatedWords = require('../components/countRepeatedWords');
const addRepeatedWords = require('../components/addRepeatedWords');
const splitTextIntoWords = require('../components/splitTextIntoWords');

const textArea = document.getElementById('text-area');
const highlightedOverusedWords = document.getElementById('highlighted-overused-words');

const repeatedWords = checkedWords => {
    textArea.addEventListener('input', event => {
        // split text sequence into lowercase words base on passed regex
        const textAreaWords = splitTextIntoWords(/\W+/, textArea.value);
        // count and sort repeated words
        const repeatedWords = countRepeatedWords(textAreaWords);
        // adds repeating words to the list ( move it to repeated Word file )
        addRepeatedWords(repeatedWords, textAreaWords, textArea.value);
        // highlight already selected overused words
        highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textArea.value);
        // displays the number of characters, words and sentences in the text sequence
        getStringData(textArea.value);
        event.preventDefault();
    });
};

module.exports =  repeatedWords;