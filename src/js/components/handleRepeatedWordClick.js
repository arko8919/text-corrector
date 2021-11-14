const highlightActiveRepeatedWord = require('./highlightActiveRepeatedWord');
const highlightSelectedRepeatedWords = require('./highlightSelectedRepeatedWords');

const highlightedRepeatedWords = document.getElementById('highlighted-repeated-words');

const handleRepeatedWordClick = (target, repeatedWord, repeatedWordsListItems, textAreaValue) => {
    // if word is inactive
    if (target.className !== 'active-repeated-word') {
        // highlight repeated words in text area
        highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWords(repeatedWord, textAreaValue);
        // set word to active
        highlightActiveRepeatedWord(repeatedWordsListItems, repeatedWord);
        // set state of clicked word
        return {
            highlighted: true,
            currentWord: repeatedWord
        };

    } else {
        // set word to inactive
        target.className = 'inactive-repeated-word';
        highlightedRepeatedWords.innerHTML = textAreaValue;
        // set state of clicked word
        return {
            highlighted: false,
            currentWord: ''
        };
    }
};

module.exports = handleRepeatedWordClick;