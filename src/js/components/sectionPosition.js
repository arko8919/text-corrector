const content = document.getElementsByClassName('content')[0];
const addOverusedWords = document.getElementsByClassName('add-overused-words')[0];
const instruction = document.getElementsByClassName('instruction')[0];
const movingUnderline = document.getElementsByClassName('moving-underline')[0];

const sectionPosition = (editorPosition, overusedWordsPosition, instructionPosition, movingUnderlinePosition ) => {
    content.style.left = editorPosition;
    addOverusedWords.style.left = overusedWordsPosition;
    instruction.style.left = instructionPosition;
    movingUnderline.style.left = movingUnderlinePosition;
};

module.exports = sectionPosition;

