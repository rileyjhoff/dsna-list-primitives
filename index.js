function reverseWords(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        const letters = words[i].split('');
        let newWord = '';
        for (let i = letters.length - 1; i >= 0; i--) {
            newWord = newWord.concat(letters[i]);
        }
        words[i] = newWord;
    }
    words = words.join(' ');
    return words;
}

console.log(reverseWords('alchemy rocks gold'));

module.exports = { reverseWords };
