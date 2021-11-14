const createOverusedWordsElement = (checkedWords, word, overusedWordsList) => {
    // container
    const listItem = document.createElement('li');
    // input checkbox
    const inputElement = document.createElement('input');
    // custom checkbox
    const spanElement = document.createElement('span');
    // remove
    const spanRemoveElement = document.createElement('span');
    // create text nodes
    const labelTextNode = document.createTextNode(word);
    // append text nodes
    listItem.appendChild(labelTextNode);
    // append input checkbox, custom checkbox, icon into label container
    listItem.appendChild(inputElement);
    listItem.appendChild(spanElement);
    listItem.appendChild(spanRemoveElement);
    // set attr
    listItem.setAttribute('id', word);
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('class', 'checkbox');
    spanRemoveElement.setAttribute('class', 'remove');
    spanElement.setAttribute('class', 'check-mark');
    if(checkedWords.includes(word)) {
        inputElement.setAttribute('checked', '');
    }

    overusedWordsList.appendChild(listItem);


};

module.exports = createOverusedWordsElement;