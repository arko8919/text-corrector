const editAreaSections = document.getElementsByClassName('edit-area-sections')[0];
const underline = document.getElementsByClassName('underline')[0];
const active = document.getElementsByClassName('active');

const editorNav = function (event) {
    // remove class 'active'
    active[0].className = active[0].className.replace(" active", "");
    // add class 'active' to clicked editor nav button
    this.className += " active";

    const attribute = this.getAttribute('value');
    // change sections
    if (attribute === 'textarea') {
        underline.className = 'underline underline-textarea';
        editAreaSections.className = 'edit-area-sections textarea';
    } else if (attribute === 'words') {
        underline.className = 'underline underline-words';
        editAreaSections.className = 'edit-area-sections words';
    } else if (attribute === 'faq') {
        underline.className = 'underline underline-faq';
        editAreaSections.className = 'edit-area-sections faq';
    }
    event.preventDefault();
};

module.exports = editorNav;