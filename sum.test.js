const sum = require('./sum').default;

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
