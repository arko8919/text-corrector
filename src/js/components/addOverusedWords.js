const createOverusedWordsElement = require('./createOverusedWordsElement');
const removeOverusedWord = require('./removeOverusedWord');
const selectOverusedWord = require('./selectOverusedWord');

const overusedWordsList = document.getElementsByClassName('overused-words-list')[0];
const highlightedOverusedWords = document.getElementById('highlighted-overused-words');
const remove = overusedWordsList.getElementsByClassName('remove');
const checkbox = document.getElementsByClassName('checkbox');
const textArea = document.getElementById('text-area');

const addOverusedWords = (overusedWords, checkedWords) => {
    // remove all overused words from the list
    while (overusedWordsList.hasChildNodes()) {
        overusedWordsList.removeChild(overusedWordsList.firstChild);
    }
    // add overused word to the list
    overusedWords.forEach((word, index) => {
        // create and add overused word to the list
        createOverusedWordsElement(checkedWords, word, overusedWordsList,);
        // remove overused word from the list
        remove[index].addEventListener('click', event => {
            removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWords, event.target, textArea.value);
            event.preventDefault();
        });
        // highlight overused word in textarea
        checkbox[index].addEventListener('change', event => {
            selectOverusedWord(checkedWords, highlightedOverusedWords, event.target, textArea.value);
            event.preventDefault();
        });
    });
};

module.exports = addOverusedWords;