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
        arr[i - 1] = 'FizzBuzz';
        // first case: evenly divisible by 3 and 5
        // so we print fizzbuzz
      } else {
        arr[i - 1] = 'Fizz';
        // second case: divisible by 3 only
        // so we print fizz
      }
    } else if (i % 5 === 0) {
      arr[i - 1] = 'Buzz';
      // third case: divisible by 5 only
      // so we print buzz
    } else {
      arr[i - 1] = i;
      // fourth case: evenly divisible by neither
      // so we print the number itself
    }
  }
  return arr;
}

function anagrams(wordOne, wordTwo) {
  // split strings into letters and sort in alphabetical order, then rejoin letters
  const wordOneSorted = wordOne.split('').sort().join('');
  const wordTwoSorted = wordTwo.split('').sort().join('');
  // check to see if the sorted words are equal
  return wordOneSorted === wordTwoSorted;
}

function uniqueString(strings) {
    // this is awful and probably not how you're supposed to do it
    // but it DOES work. for the given test cases, anyway
    let seenStrings = {};
    // empty object to keep track of which letters are present
    for (let i = 0; i < strings.length; i++) {
        // look at each string
        let letters = strings[i].split('');
        // look at each letter in the string
        const unique = [...new Set(letters)];
        // make it into a set and back to get the unique letters
        for (let letter of unique) {
            if (!seenStrings[letter]) {
                // basically just keeps track of the count of each letter
                seenStrings[letter] = 1;
            } else {
                seenStrings[letter]++;
            }
        }
    }
    // here we have gone over the entire array of strings and counted
    // how often each letter has appeared. O(n) thus far
    for (let i = 0; i < strings.length; i++) {
        // go back over the strings
        let letters = strings[i].split('');
        // back into the letters
        for (let letter of letters) {
            if (seenStrings[letter] === 1) {
                // if we find a letter that only shows up once
                // as i understand it, only the unique string has letters
                // that only show up once
                return strings[i];
                // so we return the first string with a letter
                // that only shows up once
            }
        }
    }
}

function uniqueChar(string) {
    const chars = string.split('').sort();
    console.log(chars);
    // we now have a list of all the characters in the string in order
    // we can tell if a character is unique because it won't have
    // itself adjacent to it in either direction in a sorted list
    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        const prev = chars[i - 1];
        // check prev so we don't see the end of a list as unique
        // took me a while honestly. didn't realize the logic
        // works slightly differently for later duplicates in a list
        const next = chars[i + 1];
        //check next so we don't see the start of a list as unique
        if (current !== prev && current !== next) {
            return chars[i];
        }
      }
    return '_';
}

// console.log(uniqueChar('abdacabad'));
// uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]);
// console.log(anagrams('superintendes', 'unpredestined'));
// console.log(fizzBuzz(16));
// console.log(oddishOrEvenish(41));
// console.log(titleCaseWords('alchemy GOLD roCKs'));

module.exports = {
  reverseWords,
  titleCaseWords,
  oddishOrEvenish,
  at,
  fizzBuzz,
  anagrams,
  uniqueString,
  uniqueChar
};
