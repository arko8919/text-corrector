const highlightSelectedRepeatedWords = (word, textAreaValue) => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    // replace words with markup and words
    return textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
};

module.exports = highlightSelectedRepeatedWords;