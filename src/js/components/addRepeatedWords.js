const createRepeatedWordsElements = require('./createRepeatedWordsElements');
const handleRepeatedWordClick = require('./handleRepeatedWordClick');
const highlightActiveRepeatedWord = require('./highlightActiveRepeatedWord');
const highlightSelectedRepeatedWords = require('./highlightSelectedRepeatedWords');

const highlightedRepeatedWords = document.getElementById('highlighted-repeated-words');
const repeatedWordsList = document.getElementsByClassName('repeated-words-list')[0];
const repeatedWordsListItems = repeatedWordsList.getElementsByTagName('li');

// store information about last clicked word and whether is highlighted or not
const state = {
    highlighted: false,
    currentWord: ''
};

const addRepeatedWords = (repeatedWords, words, textAreaValue) => {
    // remove all repeated words from the list
    while (repeatedWordsList.hasChildNodes()) {
        repeatedWordsList.removeChild(repeatedWordsList.firstChild);
    }

    // remove current word state, if the same word is removed from text area
    if (!words.includes(state.currentWord)) {
        state.currentWord = '';
    }

    // repeatedWords array store arrays = [ word, count ]
    repeatedWords.forEach((repeatedWord, index) => {
        // create and add repeated word to the list
        createRepeatedWordsElements(repeatedWordsList, repeatedWord[0], repeatedWord[1]);
        // highlight repeated word in textarea and in repeated words list
        repeatedWordsListItems[index].addEventListener('click', event => {
            const newState = handleRepeatedWordClick(event.target, repeatedWord[0], repeatedWordsListItems, textAreaValue);
            // update state
            state.highlighted = newState.highlighted;
            state.currentWord = newState.currentWord;
            event.preventDefault();
        });

    });

    // keeps clicked word and words in textarea highlighted, when  input change
    if (state.highlighted) {
        highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWords(state.currentWord, textAreaValue);
        highlightActiveRepeatedWord(repeatedWordsListItems, state.currentWord);
    }
};

module.exports = addRepeatedWords;