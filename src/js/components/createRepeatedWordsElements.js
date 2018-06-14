const createRepeatedWordsElements = (repeatingWordsList, word, count) => {
// create element and text node with content from words array
    const createdListItemElement = document.createElement('li');
    const spanElementText = document.createTextNode(`${word} : ${count}`);
    createdListItemElement.appendChild(spanElementText);
    repeatingWordsList.appendChild(createdListItemElement);
};

module.exports = createRepeatedWordsElements;
