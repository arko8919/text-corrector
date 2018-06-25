const editorSections = document.getElementsByClassName('editor-sections')[0];
const current = document.getElementsByClassName('active');
const underline = document.getElementsByClassName('underline')[0];

const editorNav = function(event) {
    // highlight active element
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";

    const attribute = this.getAttribute('value');
    if (attribute === 'add-text') {
        editorSections.style.left = '0';
        underline.style.left = '0';
    } else if (attribute === 'add-overused-words') {
        editorSections.style.left = '-100%';
        underline.style.left = '33.33%';
    } else if (attribute === 'instruction') {
        editorSections.style.left = '-200%';
        underline.style.left = '66.66%';
    }
    event.preventDefault();
};

module.exports = editorNav;