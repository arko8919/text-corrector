const highlightActiveRepeatedWord = (repeatedWordsListItems, currentWord) => {
    for (let index = 0; index < repeatedWordsListItems.length; index++) {
        const content = repeatedWordsListItems[index].textContent;
        const matched = content.match(/^\w+/);
        const matchedWord = matched.toString();

        if (matchedWord === currentWord) {
            repeatedWordsListItems[index].className = 'active';
        } else {
            repeatedWordsListItems[index].removeAttribute("class");
        }
    }
};

module.exports = highlightActiveRepeatedWord;