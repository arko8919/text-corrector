const countRepeatedWords = require('./countRepeatedWords');
const addRepeatedWords = require('./addRepeatedWords');
const addOverusedWords = require('./addOverusedWords');
const highlightText = require('./highlightText');

const state = {
    overusedWords: [],
    checkedWords: []
};

const textArea = document.getElementById('text-area');
const input = document.getElementById('input');
const addOverusedWordsBtn = document.getElementById('overused-words-btn');
const overusedWordsOutput = document.getElementById('overused-words-output');

textArea.addEventListener('input', event => {
    // returns an array of arrays with unique filtered words, sorted from the largest to the lowest repetition number
    const repeatingWords = countRepeatedWords(textArea.value);
    // adds repeating words to the list
    addRepeatedWords(repeatingWords);

    overusedWordsOutput.innerHTML = highlightText(state.checkedWords);

    event.preventDefault();
});

addOverusedWordsBtn.addEventListener('click', event => {
    // split sequence of text on spaces and commas // update this to make sure first space wont trigger
    const overusedWords = input.value.split(/,\s*|\s+/gi);
    // clean empty values if user will type words wrong way
    const cleanOverusedWords = overusedWords.filter(word => word !== '');
    // filters words to make sure that words do not repeat
    const filteredOverusedWords = cleanOverusedWords.filter(word => !state.overusedWords.includes(word));
    // add words to overused words store
    filteredOverusedWords.forEach(word => state.overusedWords.push(word));
    // add overused words to the list
    addOverusedWords(state.overusedWords, state.checkedWords);

    event.preventDefault();
});
