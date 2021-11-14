const highlightSelectedOverusedWords = require('./highlightSelectedOverusedWords');

const removeOverusedWord = (overusedWords, checkedWords, highlightedOverusedWords, target, textAreaValue) => {
    const wordToRemove = target.parentElement.id;
    // if overused word was checked, remove it from the checked words list
    checkedWords.forEach((word, index) => {
        if (checkedWords[index] === wordToRemove) {
            checkedWords.splice(index, 1);
        }
    });
    // remove word from the overused words list
    overusedWords.forEach((word, index) => {
        if (overusedWords[index] === wordToRemove) {
            overusedWords.splice(index, 1);
        }
    });
    // remove list item from the overused words list
    target.parentElement.remove();
    // update textarea with highlighted overused words
    highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textAreaValue);
};

module.exports = removeOverusedWord;