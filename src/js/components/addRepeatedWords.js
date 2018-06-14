const createRepeatedWordsElements = require('./createRepeatedWordsElements');
const highlightText = require('./highlightText');
const highlightWord = require('./highlightWord');

// div which display highlight repeated words
const repeatedWordsOutput = document.getElementById('repeated-words-output');
// reference to repeated words container
const repeatedWordsList = document.getElementsByClassName('repeated-words-list')[0];
// // reference to created repeated words
const li = repeatedWordsList.getElementsByTagName('li');


// store information about last clicked word and whether is highlighted
const state = {
    highlighted: false,
    currentWord: ''
};

const addRepeatedWords = repeatingWords => {
    // remove all repeated words, if they exist
    while (repeatedWordsList.hasChildNodes()) {
        repeatedWordsList.removeChild(repeatedWordsList.firstChild);
    }

    // repeatingWords array store arrays = [ word, count ]
    repeatingWords.forEach((repeatingWord, index) => {

        // create elements
        createRepeatedWordsElements(repeatedWordsList, repeatingWord[0], repeatingWord[1]);

        // event handler - highlight selected words
        const highlight = event => {
            // if no words are highlighted or highlighted, but another word is clicked
            if (!state.highlighted ||
                (state.highlighted && state.currentWord !== repeatingWord[0])) {
                // highlight repeated words on text
                repeatedWordsOutput.innerHTML = highlightText(repeatingWord[0]);
                // set state of clicked word
                state.highlighted = true;
                state.currentWord = repeatingWord[0];
                // highlight clicked word on the list
                highlightWord(li, state.currentWord);

            } else {
                // set state of span element
                state.highlighted = false;
                state.currentWord = repeatingWord[0];
                event.target.style.backgroundColor = 'white';
            }

            event.preventDefault();
        };

        li[index].addEventListener('click', highlight);
    });
    // keep selected word and words in text highlighted when changing input
    if (state.highlighted) {
        repeatedWordsOutput.innerHTML = highlightText(state.currentWord);
        highlightWord(li, state.currentWord);
    }
};

module.exports = addRepeatedWords;