const addOverusedWords = require('./addOverusedWords');
const parseInput = require('./parseInput');

const overusedWordsInput = document.getElementById('input');

const overusedWordsSection = {
    overusedWords: [],
    checkedWords: [],
    constantWords: ['passionate', 'creative', 'driven', 'responsible', 'strategic', 'organizational', 'expert',
        'other', 'more', 'new', 'good', 'best', 'many', 'important', 'great', 'first', 'able'],

    changeableWords() {
        // parse input and split into words
        const words = parseInput(/,\s*|\s+/g, overusedWordsInput.value);
        // filters words to make sure that words are unique
        let uniqueOverusedWords = [...new Set(words)];
        // filters words to make sure that words are not in array
        const filteredOverusedWords = uniqueOverusedWords.filter(word => !this.overusedWords.includes(word));
        // add words to overused words array
        filteredOverusedWords.forEach(word => this.overusedWords.push(word));
        // add overused words to the list on page
        addOverusedWords(this.overusedWords, this.checkedWords);
        // reset value
        overusedWordsInput.value = '';
    },

    unchangeableWords(index) {
        // if the word is not in the arrays of overused words, add them
        if (!this.overusedWords.includes(this.constantWords[index])) {
            this.overusedWords.push(this.constantWords[index]);
            // add overused words to the list on page
            addOverusedWords(this.overusedWords, this.checkedWords);
        }
    }
};

module.exports = overusedWordsSection;