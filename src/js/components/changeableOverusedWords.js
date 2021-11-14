const addOverusedWords = require('./addOverusedWords');
const splitTextIntoWords = require('./splitTextIntoWords');

const addOverusedWordsBtn = document.getElementById('add-words-btn');
const overusedWordsInput = document.getElementById('input');

const changeableOverusedWords = (overusedWords, checkedWords) => {
    addOverusedWordsBtn.addEventListener('click', event => {
        // split text sequence into lowercase words base on passed regex
        const words = splitTextIntoWords(/,\s*|\s+/g, overusedWordsInput.value);
        // filters words to make sure that words are unique
        let uniqueOverusedWords = [...new Set(words)];
        // filters words to make sure that words are not repeating
        const filteredOverusedWords = uniqueOverusedWords.filter(word => !overusedWords.includes(word));
        // add words to overused words array
        filteredOverusedWords.forEach(word => overusedWords.push(word));
        // add overused words to the list on page
        addOverusedWords(overusedWords, checkedWords);
        // reset value
        overusedWordsInput.value = '';
        event.preventDefault();
    });
};

module.exports = changeableOverusedWords;