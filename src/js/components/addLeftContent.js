// left side content
const leftContent = document.getElementsByClassName('left-content')[0];
// span elements state - if specific word is clicked this will change accordingly
const state = {
    clicked: false,
    index: undefined
};

const addLeftContent = (words, input, textArea) => {
    // remove all span elements of a left content if they exist
    while (leftContent.hasChildNodes()) {
        leftContent.removeChild(leftContent.firstChild);
    }

    // create span elements
    words.forEach((word, index) => {
        // create element and text node with content from words array
        const createdSpanElement = document.createElement('span');
        const spanElementText = document.createTextNode(`${word[0]} : ${word[1]}`);
        createdSpanElement.appendChild(spanElementText);
        leftContent.appendChild(createdSpanElement);

        // reference to created span element
        const span = leftContent.getElementsByTagName('span');

        // event handler - highlight selected words
        const highlightText = () => {
            // new input with selected words
            let selected = '';

            if (state.clicked === false ||
                (state.clicked === true && state.index !== index)) {
                // get content of span element
                const content = span[index].textContent;
                // select first word in content - just this word is necessary
                const matched = content.match(/^\w+/);
                // create a regular expression which change with each iteration
                const regex = new RegExp(`\\b${matched}\\b`, 'gi');
                // replace words with markup and words
                selected = input.replace(regex, match => {
                    return `<mark class="match">${match}</mark>`;
                });
                // set state of span element
                state.clicked = true;
                state.index = index;
            } else {
                // use clean input without markup
                selected = input;
                // set state of span element
                state.clicked = false;
                state.index = index;
            }

            // update text area with new text
            textArea.innerHTML = selected;

            event.preventDefault();
        };
        // event listener on span
        span[index].addEventListener('click', highlightText, false);
    });
};

module.exports = addLeftContent;