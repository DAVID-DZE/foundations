const palindromes = function (word) {
    word = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedWord = word.split('').reverse().join('');

    return word === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
