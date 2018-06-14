const highlightText = require('./highlightText');
const createOverusedWordsElements = require('./createOverusedWordsElements');

const overusedWordsList = document.getElementsByClassName('overused-words-list')[0];
const button = overusedWordsList.getElementsByTagName('button');
const overusedWordsOutput = document.getElementById('overused-words-output');
const checkbox = document.getElementsByClassName('checkbox');

const addOverusedWords = (overusedWords, checkedWords) => {

    // remove all overused words from the list
    while (overusedWordsList.hasChildNodes()) {
        overusedWordsList.removeChild(overusedWordsList.firstChild);
    }

    // add overused word to the list
    overusedWords.forEach((word, index) => {

        // create elements
        createOverusedWordsElements(overusedWordsList, checkedWords, word);

        // remove overused word from the list
        button[index].addEventListener('click', event => {
            // remove word from checked word list
            const wordToRemove = event.target.parentElement.id;

            // if overused word is checked remove it from the list
            for (let checkedWordsIndex = 0; checkedWordsIndex < checkedWords.length; checkedWordsIndex++) {
                if (checkedWords[checkedWordsIndex] === wordToRemove) {
                    checkedWords.splice(checkedWordsIndex, 1);
                }
            }

            // remove word from the overused word list
            for (let overusedWordsIndex = 0; overusedWordsIndex < overusedWords.length; overusedWordsIndex++) {
                if (overusedWords[overusedWordsIndex] === wordToRemove) {
                    overusedWords.splice(overusedWordsIndex, 1);
                }
            }

            // remove list item
            event.target.parentElement.remove();

            overusedWordsOutput.innerHTML = highlightText(checkedWords);

            event.preventDefault();
        });

        checkbox[index].addEventListener('change', event => {
            if (event.target.checked) {
                // get label element content
                checkedWords.push(event.target.parentElement.textContent);
            } else {
                for (let i = checkedWords.length - 1; i >= 0; i--) {
                    if (checkedWords[i] === event.target.parentElement.textContent) {
                        checkedWords.splice(i, 1);
                        break;
                    }
                }
            }
            overusedWordsOutput.innerHTML = highlightText(checkedWords);
            event.preventDefault();
        });
    });
};

module.exports = addOverusedWords;