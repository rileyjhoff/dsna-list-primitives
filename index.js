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

function titleCaseWords(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  let words = lowerCaseSentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    word = letters.join('');
    words[i] = word;
  }
  const newSentence = words.join(' ');
  return newSentence;
}

console.log(titleCaseWords('alchemy GOLD roCKs'));

module.exports = { reverseWords, titleCaseWords };
