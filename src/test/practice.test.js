const mockConsole = require('jest-mock-console').default;
const prachu = require('../practice');

console.log = jest.fn();
describe('Prachu ka talent 😊', () => {
  test('Numbers Array 5', () => {
    expect(prachu.numbersArray(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  test('Numbers Array 15', () => {
    expect(prachu.numbersArray(15))
      .toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  });

  test('SecondLargest', () => {
    expect(prachu.secondLargest([2, 4, 6, 8, 4, 3])).toBe(6);
    expect(prachu.secondLargest([20, 55, 55555, -300, 3000])).toBe(3000);
    expect(prachu.secondLargest([-2, -4, -6, -8, -4, -3])).toBe(-3);
  });

  test('vowelsAndConsonants', () => {
    const restoreConsole = mockConsole();
    prachu.vowelsAndConsonants('prachu');
    expect(console.log.mock.calls).toEqual([['a'], ['u'], ['p'], ['r'], ['c'], ['h']]);
    prachu.vowelsAndConsonants('javascriptloops');
    expect(console.log.mock.calls).toEqual([
      ['a'], ['a'], ['i'], ['o'], ['o'], ['j'], ['v'], ['s'], ['c'], ['r'], ['p'], ['t'], ['l'], ['p'], ['s'],
    ]);
    restoreConsole();
  });
});
