const {
  reverseWords,
  titleCaseWords,
  oddishOrEvenish,
  at,
  fizzBuzz,
  anagrams,
  uniqueString,
} = require('.');

describe('reverseWords', () => {
  it('should reverse the words of a sentence', () => {
    expect(reverseWords('alchemy rocks gold')).toBe('ymehcla skcor dlog');
  });
});

describe('titleCaseWords', () => {
  it('should title case a sentence', () => {
    expect(titleCaseWords('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  });
});

describe('oddishOrEvenish', () => {
  it('should find whether a sum is evenish', () => {
    expect(oddishOrEvenish(121)).toBe('Evenish');
    expect(oddishOrEvenish(41)).toBe('Oddish');
  });
});

describe('at', () => {
  it('should take an array and an index and return the item at the corresponding index', () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toBe('b');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
  });
});

describe('fizzBuzz', () => {
  it('the fizzbuzz. i don wanna write it', () => {
    expect(fizzBuzz(16)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
    ]);
  });
});

describe('anagrams', () => {
  it('should take two words as arguments and returns true if they are anagrams (contain the exact same letters) and false otherwise.', () => {
    expect(anagrams('superintended', 'unpredestined')).toBe(true);
    expect(anagrams('pictorialness', 'documentarily')).toBe(false);
  });
});

describe('uniqueString', () => {
  it('returns the unique string of an array', () => {
    expect(uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])).toBe('BbBb');
    expect(uniqueString([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])).toBe('foo');
  });
});
