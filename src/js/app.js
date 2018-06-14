require('../scss/style.scss');
const changeContent = require('./components/changeSection');

// logic responsible for editor
require('./components/editor');

const editorNavButtons = document.getElementsByClassName('editor-nav-buttons');

// ES6
// First argument is to create new shallow-copied Array instance from HTML Collection 'contentButtons'.
// Second argument is map function to call on every element of the array
Array.from(editorNavButtons, button => button.addEventListener('click', changeContent));








