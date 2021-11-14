const changeableOverusedWords = require('../components/changeableOverusedWords');
const unchangeableOverusedWords = require('../components/unchangeableOverusedWords');
const addUnchangedOverusedWords = require('../components/addUnchangedOverusedWords');

const cvOverusedWordsList = document.getElementsByClassName('cv-overused-words')[0];
const commonOverusedWordsList = document.getElementsByClassName('common-overused-words')[0];

const state = {
    words: [],
    checkedWords: [],
    cvOverusedWords: ['passionate', 'creative', 'driven', 'responsible', 'strategic', 'organizational', 'expert'],
    commonOverusedWords: ['other', 'more', 'new', 'good', 'best', 'many', 'important', 'great', 'first', 'able']

};

const overusedWords = () => {
    // merge lists of unchangeable overused words
    const unchangeableWords = state.cvOverusedWords.concat(state.commonOverusedWords);
    // create unchangeable overused words html elements and add them to page
    addUnchangedOverusedWords(state.cvOverusedWords, cvOverusedWordsList);
    addUnchangedOverusedWords(state.commonOverusedWords, commonOverusedWordsList);

    changeableOverusedWords(state.words, state.checkedWords);
    unchangeableOverusedWords(state.words, state.checkedWords, unchangeableWords);

    return state.checkedWords;
};

module.exports = overusedWords;