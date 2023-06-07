function processNumbers(obj) {
    const numbers = obj.numbers;
  
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
  const input1 = {
    numbers: [1, 3, 2, 7, 4]
  };
  
  const input2 = {
    numbers: [5, 2, 9, 1]
  };
  
  try {
    const result1 = processNumbers(input1);
    console.log(result1); // { maximum: 7, totalSum: 17 }
  
    const result2 = processNumbers(input2);
    console.log(result2); // { maximum: 9, totalSum: 17 }
  } catch (error) {
    console.error(error.message);
  }
  