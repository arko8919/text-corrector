const highlightSelectedOverusedWords = require('./highlightSelectedOverusedWords');

const selectOverusedWord = (checkedWords, highlightedOverusedWords, target, textAreaValue) => {

    if (target.checked) {
        // get label element content
        checkedWords.push(target.parentElement.id);
    } else {
        for (let i = checkedWords.length - 1; i >= 0; i--) {
            if (checkedWords[i] === target.parentElement.id) {
                checkedWords.splice(i, 1);
                break;
            }
        }
    }
    highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textAreaValue);
};

module.exports = selectOverusedWord;