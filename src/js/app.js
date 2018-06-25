require('../scss/style.scss');
require('../assets/background.png');

const editorNav = require('./components/editorNav');
const repeatedWordsSection = require('./components/repeatedWordsSection');
const overusedWordsSection = require('./components/overusedWordsSection');
const getStringData = require('./components/getStringData');

// references to elements
const textArea = document.getElementById('text-area');
const addOverusedWordsBtn = document.getElementById('overused-words-btn');
const exampleWords = document.getElementsByClassName('example-words');
const editorNavButtons = document.getElementsByClassName('editor-nav-buttons');

//
Array.from(editorNavButtons, button => button.addEventListener('click', editorNav));

// logic responsible for repeated words
textArea.addEventListener('input', event => {
    repeatedWordsSection(textArea.value, overusedWordsSection.checkedWords);
    // display numbers of characters, words and sentences in sequence of text
    getStringData(textArea.value);
    event.preventDefault();
});


// logic responsible for changeable overused words
addOverusedWordsBtn.addEventListener('click', event => {
    overusedWordsSection.changeableWords();
    event.preventDefault();
});

// logic responsible for unchangeable overused words
for (let index = 0; index < exampleWords.length; index++) {
    exampleWords[index].addEventListener('click', event => {
        overusedWordsSection.unchangeableWords(index);
        event.preventDefault();
    });
}






