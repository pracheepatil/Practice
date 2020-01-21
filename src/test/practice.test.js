const sum = require( '../practice');
console.log = jest.fn();

describe('Prachu ka talent 😊', () => {
  test('adds 1, 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
