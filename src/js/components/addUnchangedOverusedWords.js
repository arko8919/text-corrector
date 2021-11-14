const addUnchangedOverusedWords = (unchangedOverusedWords, orderedList) => {
    unchangedOverusedWords.forEach(word => {
        const listItem = document.createElement('li');
        const button = document.createElement('button');

        const listItemText = document.createTextNode(word);
        const buttonText = document.createTextNode('add');

        listItem.appendChild(listItemText);
        button.appendChild(buttonText);
        button.setAttribute('class', 'material-icons predefined-words');
        listItem.appendChild(button);
        orderedList.appendChild(listItem);
    });

};

module.exports = addUnchangedOverusedWords;