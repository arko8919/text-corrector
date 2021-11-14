const countRepeatedWords = words => {

    const countedWords = {};
    // count words and save into object
    words.forEach(word => countedWords[word] = (countedWords[word] || 0) + 1);

    const sortedWords = [];
    // push counted words from object to the array
    for (const word in countedWords) {
        sortedWords.push([word, countedWords[word]]);
    }

    // sort words from most to least repeated
    sortedWords.sort((a, b) => b[1] - a[1]);

    return sortedWords;
};

module.exports = countRepeatedWords;