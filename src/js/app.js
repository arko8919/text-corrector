require('../scss/style.scss');
const changeContent = require('./components/changeSection');
const duplicates = require('./components/duplicates');
const addLeftContent = require('./components/addLeftContent');

const contentButtons = document.getElementsByClassName('content-buttons');

// ES6
// First argument is to create new shallow-copied Array instance from HTML Collection 'contentButtons'.
// Second argument is map function to call on every element of the array
Array.from(contentButtons, button => button.addEventListener('click', changeContent));


const textarea = document.getElementById('textarea');
let input = '';
textarea.addEventListener('input', (event) => {
    input = textarea.innerText || textarea.textContent;
    addLeftContent(duplicates(input), input, textarea);
    event.preventDefault();
}, false);



