function reverseWords(sentence) {
  let words = sentence.split(' ');
  //get an array of each word
  for (let i = 0; i < words.length; i++) {
    //look at each word
    const letters = words[i].split('');
    //get an array of each letter in the word
    let newWord = '';
    //look at each word backwards and concatenate the letters on a new string
    for (let i = letters.length - 1; i >= 0; i--) {
      //nested loops which is probably bad
      //but you only go over each letter once? is it still O(n)?
      newWord = newWord.concat(letters[i]);
    }
    words[i] = newWord;
    //put new backwards word back into the array of words
  }
  words = words.join(' ');
  //make words back into one string
  return words;
}

function titleCaseWords(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  //most letters need to be lowercase, so just globally do that
  let words = lowerCaseSentence.split(' ');
  //array of each word
  for (let i = 0; i < words.length; i++) {
    //look at each word in the sentence
    let word = words[i];
    const letters = word.split('');
    //split into each letter so we can mutate letters
    letters[0] = letters[0].toUpperCase();
    //the first letter of each word alone is capitalised
    word = letters.join('');
    //make the word again
    words[i] = word;
    //update word
  }
  const newSentence = words.join(' ');
  //make words back into one string
  return newSentence;
}

function oddishOrEvenish(number) {
  let digits = number.toString().split('');
  // get each digit of the number
  let sum = 0;
  for (let digit of digits) {
    sum = sum += Number(digit);
    // cast to number then add them in sequence
  }
  if (sum % 2 !== 0) {
    // number mod 2 being 0 means number is even
    return 'Oddish';
  } else {
    return 'Evenish';
  }
}

function at(arr, index) {
  let positiveIndex = index;
  // turn the index to a positive number, if negative
  if (index < 0) {
    positiveIndex = arr.length + index;
  }
  // return the item in the array at that positive index number
  return arr[positiveIndex];
}

function fizzBuzz(number) {
    let arr = [];
    for (let i = 1; i <= number; i++) {
        // each number in the array has 4 possible cases
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                arr[i-1] = 'FizzBuzz';
                // first case: evenly divisible by 3 and 5
                // so we print fizzbuzz
            } else {
                arr[i-1] = 'Fizz';
                // second case: divisible by 3 only
                // so we print fizz
            }
        } else if (i % 5 === 0) {
            arr[i-1] = 'Buzz';
            // third case: divisible by 5 only
            // so we print buzz
        } else {
            arr[i-1] = i;
            // fourth case: evenly divisible by neither
            // so we print the number itself
        }
    }
    return arr;
}

console.log(fizzBuzz(16));
// console.log(oddishOrEvenish(41));
// console.log(titleCaseWords('alchemy GOLD roCKs'));

module.exports = { reverseWords, titleCaseWords, oddishOrEvenish, at, fizzBuzz };
