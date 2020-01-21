/**
 * Return an array of numbers from 1 to N.
 * But replace the numbers with
 * "Fizz", if it's divisible by 3,
 * "Buzz", if it's divisible by 5 and not 3,
 * "FizzBuzz", if divisible by both 5 and 3
 */

exports.numbersArray = (n) => {
  // Your code goes here
  const res = [];
  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      res.push('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      res.push('Buzz');
    } else if (i % 5 === 0 && i % 3 === 0) {
      res.push('FizzBuzz');
    } else {
      res.push(i);
    }
  }
  return res;
};

/**
 * Find Second largest number in the array
 */
exports.secondLargest = (nums) => {
  let ans;
  // Your code goes here
  return ans;
};


exports.vowelsAndConsonants = (s) => {
  const vowels = 'aeiou';
  const consonantPart = [];
  const vowelPart = [];
  for (let i = 0; i < s.length; i += 1) {
    if (vowels.includes(s.charAt(i))) {
      vowelPart.push(s.charAt(i));
    } else {
      consonantPart.push(s.charAt(i));
    }
  }
  console.log(vowelPart.join('\n'));
  console.log(consonantPart.join('\n'));
};
