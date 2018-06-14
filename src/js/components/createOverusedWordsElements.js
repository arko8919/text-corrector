const createOverusedWordsElements = (overusedWordsList, checkedWords, word) => {
    const listItemElement = document.createElement('li');
    const labelElement = document.createElement('label');
    const inputElement = document.createElement('input');
    const spanElement = document.createElement('span');
    const buttonElement = document.createElement('button');

    const labelTextNode = document.createTextNode(word);
    const buttonTextNode = document.createTextNode('Remove');

    buttonElement.appendChild(buttonTextNode);
    labelElement.appendChild(labelTextNode);
    labelElement.appendChild(inputElement);
    labelElement.appendChild(spanElement);
    listItemElement.appendChild(labelElement);
    listItemElement.appendChild(buttonElement);
    labelElement.setAttribute('for', word);
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('class', 'checkbox');
    listItemElement.setAttribute('id', word);

    if(checkedWords.includes(word)) {
        inputElement.setAttribute('checked', '');
    }

    overusedWordsList.appendChild(listItemElement);
};

module.exports = createOverusedWordsElements;