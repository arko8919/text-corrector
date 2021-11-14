require('../scss/style.scss');
require('../assets/background.png');

const editorNav = require('./components/editorNav');
const repeatedWords = require('./containers/repeatedWords');
const overusedWords = require('./containers/overusedWords');

const editAreaBtn = document.getElementsByClassName('edit-area-btn');

// change editor sections on click
Array.from(editAreaBtn, button => button.addEventListener('click', editorNav));
// containing all functions responsible for overused words and return checked overused words
const checkedWords = overusedWords();
// containing all functions responsible for repeated words
repeatedWords(checkedWords);






