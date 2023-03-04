const { stringLength, reverseString } = require('./count.js');
 
test('Return the count of the String or return an error if the length is not between 1 and 10', () => {
  expect(stringLength('Koshao')).toEqual(6);
  expect(() => stringLength('')).toThrow('String must be atleast 1 character long');
  expect(() => stringLength('KoshaoKazungu')).toThrow('String must be less than 10 characters long');
});

test('Take a string and Reverse it', () => {
  expect(reverseString('Koshao')).toBe('oahsoK');
});