const countRepeatedWords = (words) => {
    // check for repeated words and count them
    const counts = {};
    words.forEach((word) => counts[word] = (counts[word] || 0) + 1);

    // push properties names and values into array
    const sortable = [];
    for (const word in counts) {
        sortable.push([word, counts[word]]);
    }

    // sort the table from the highest value to the smallest
    sortable.sort((a, b) => b[1] - a[1]);

    return sortable;
};

module.exports = countRepeatedWords;