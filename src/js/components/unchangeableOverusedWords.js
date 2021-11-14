const addOverusedWords = require('./addOverusedWords');

const predefinedWords = document.getElementsByClassName('predefined-words');

// create this words lists
const unchangeableOverusedWords = (overusedWords, checkedWords, unchangeableWords) => {
    for (let index = 0; index < predefinedWords.length; index++) {
        predefinedWords[index].addEventListener('click', event => {
            // if the word is not in the arrays of overused words, add them
            if (!overusedWords.includes(unchangeableWords[index])) {
                overusedWords.push(unchangeableWords[index]);
                // add overused words to the list on page
                addOverusedWords(overusedWords, checkedWords);
            }
            event.preventDefault();
        });
    }
};


module.exports = unchangeableOverusedWords;