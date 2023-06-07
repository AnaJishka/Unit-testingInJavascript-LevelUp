const { processNumbers } = require("../src/processNumbers.js");

describe('processNumbers', () => {
  test('returns the maximum number and total sum', () => {
    const input = {
      numbers: [1, 3, 2, 7, 4]
    };

    const result = processNumbers(input);

    expect(result).toEqual({
      maximum: 7,
      totalSum: 17
    });
  });

  test('throws an error if "numbers" property is not an array', () => {
    const input = {
      numbers: 'not an array'
    };

    expect(() => {
      processNumbers(input);
    }).toThrow('The "numbers" property should be an array.');
  });

  test('throws an error if "numbers" array is empty', () => {
    const input = {
      numbers: []
    };

    expect(() => {
      processNumbers(input);
    }).toThrow('The "numbers" array should not be empty.');
  });
});
