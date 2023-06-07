function processNumbers(obj) {
    const numbers = obj.numbers; // Assuming the JSON object has a property called 'numbers' containing an array of integers
  
    if (!Array.isArray(numbers)) {
      throw new Error('The "numbers" property should be an array.');
    }
  
    if (numbers.length === 0) {
      throw new Error('The "numbers" array should not be empty.');
    }
  
    const maxNumber = Math.max(...numbers);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
    return {
      maximum: maxNumber,
      totalSum: sum
    };
  }
  
  // Example usage:
  const input = {
    numbers: [1, 3, 2, 7, 4] // Replace with your array of numbers
  };
  
  const result = processNumbers(input);
  console.log(result); // { maximum: 7, totalSum: 17 }
  