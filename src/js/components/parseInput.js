const parseInput = (regex, input) => {
    const lowerCaseInput = input.toLowerCase();
    const words = lowerCaseInput.split(regex);
    return words.filter((word) => word.length !== 0);
};

module.exports = parseInput;