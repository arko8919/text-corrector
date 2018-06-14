const highlightWord = (span, currentWord) => {
    for (let index = 0; index < span.length; index++) {
        const content = span[index].textContent;
        const matched = content.match(/^\w+/);
        const matchedWord = matched.toString();

        if (matchedWord === currentWord) {
            span[index].style.backgroundColor = 'red';
        } else {
            span[index].style.backgroundColor = 'white';
        }
    }
};

module.exports = highlightWord;