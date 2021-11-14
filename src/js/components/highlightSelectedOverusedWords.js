const highlightSelectedOverusedWords = (word, textAreaValue) => {
    for (let index = 0; index < word.length; index++) {
        // create a regular expression which change with each iteration
        const regex = new RegExp(`\\b${word[index]}\\b`, 'gi');
        // replace words with markup and words
        textAreaValue = textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
    }
    return textAreaValue;

};

module.exports = highlightSelectedOverusedWords;