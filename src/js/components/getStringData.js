const parseInput = require('./parseInput');

const stringData = document.querySelectorAll('.string-data p span');

const getStringData = input => {
    const words = parseInput(/\W+/, input);
    stringData[0].innerHTML = words.length;
    const sentences = input.split(/\w[.?!][\s|$]/);
    stringData[1].innerHTML = sentences.length;
    stringData[2].innerHTML = input.length;
};

module.exports = getStringData;