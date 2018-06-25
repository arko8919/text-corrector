const highlightWord = (span, currentWord) => {
    for (let index = 0; index < span.length; index++) {
        const content = span[index].textContent;
        const matched = content.match(/^\w+/);
        const matchedWord = matched.toString();

        if (matchedWord === currentWord) {
            span[index].style.backgroundColor = '#FF3B3F';
            span[index].style.color = '#EFEFEF';
        } else {
            span[index].style.backgroundColor = '#EFEFEF';
            span[index].style.color = '#000';
        }
    }
};

module.exports = highlightWord;