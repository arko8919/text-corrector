const textAreaReference = document.getElementById('text-area');

const highlightText = (checkedWords) => {
    let textAreaValue = textAreaReference.value;

    if (Array.isArray(checkedWords)) {
        for (let index = 0; index < checkedWords.length; index++) {
            // create a regular expression which change with each iteration
            const regex = new RegExp(`\\b${checkedWords[index]}\\b`, 'gi');
            // replace words with markup and words
            textAreaValue = textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
        }
        return textAreaValue;
    } else {
        const regex = new RegExp(`\\b${checkedWords}\\b`, 'gi');
        // replace words with markup and words
        return textAreaValue.replace(regex, match => `<mark class="match">${match}</mark>`);
    }
};

module.exports = highlightText;