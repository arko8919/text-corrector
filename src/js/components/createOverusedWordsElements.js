const createOverusedWordsElements = (overusedWordsList, checkedWords, word) => {
    console.log(word);
    // container
    const labelElement = document.createElement('label');
    // input checkbox
    const inputElement = document.createElement('input');
    // custom checkbox
    const spanElement = document.createElement('span');
    // remove
    const spanRemoveElement = document.createElement('span');
    // create text nodes
    const labelTextNode = document.createTextNode(word);
    // append text nodes
    labelElement.appendChild(labelTextNode);
    // append input checkbox, custom checkbox, icon into label container
    labelElement.appendChild(inputElement);
    labelElement.appendChild(spanElement);
    labelElement.appendChild(spanRemoveElement);
    // set attr
    labelElement.setAttribute('id', word);
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('class', 'checkbox');
    spanRemoveElement.setAttribute('class', 'remove');
    spanElement.setAttribute('class', 'check-mark');
    if(checkedWords.includes(word)) {
        inputElement.setAttribute('checked', '');
    }

    overusedWordsList.appendChild(labelElement);
};

module.exports = createOverusedWordsElements;