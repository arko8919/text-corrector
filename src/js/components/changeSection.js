const sectionPosition = require('./sectionPosition');

const changeSection = function () {

    const attribute = this.getAttribute('value');

    if(attribute === 'editor') {
        sectionPosition('0', '-150%', '150%', '0');
    } else if(attribute === 'overused-words') {
        sectionPosition('-150%', '0', '150%', '33.33%');
    } else if(attribute === 'instruction') {
        sectionPosition('-150%', '150%', '0', '66.66%');
    }
};

module.exports = changeSection;