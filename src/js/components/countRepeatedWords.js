const countRepeatedWords = (textAreaValue) => {
    // change sequence of text to lowercase text
    textAreaValue = textAreaValue.toLowerCase();
    // split sequence of text, where delimiter is any character which is not a word
    const splitWords = textAreaValue.split(/\W+/);
    // check if any white space left ( split sometimes leave white space at the end of array )
    const words = splitWords.filter((word) => word.length !== 0);

    // check for repeatedWords and count them
    const counts = {};
    words.forEach((word) => counts[word] = (counts[word] || 0) + 1);

    // push properties names and values into array
    const sortable = [];
    for (const word in counts) {
        sortable.push([word, counts[word]]);
    }

    // sort the table from the highest value to the smallest
    sortable.sort((a,b) => b[1] - a[1]);

    return sortable;
};

module.exports = countRepeatedWords;