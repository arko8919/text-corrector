const editor = document.getElementsByClassName('editor')[0];
const overusedWords = document.getElementsByClassName('overused-words')[0];
const instruction = document.getElementsByClassName('instruction')[0];
const movingUnderline = document.getElementsByClassName('moving-underline')[0];

const sectionPosition = (editorPosition, overusedWordsPosition, instructionPosition, movingUnderlinePosition ) => {
    editor.style.left = editorPosition;
    overusedWords.style.left = overusedWordsPosition;
    instruction.style.left = instructionPosition;
    movingUnderline.style.left = movingUnderlinePosition;
};

module.exports = sectionPosition;

