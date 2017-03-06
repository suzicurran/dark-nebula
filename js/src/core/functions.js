isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

arraySum = (array) => {
  let sum = array.reduce((a, b) => {
    return a + b;
  });
  return sum;
};

fizzBuzz = (num) => {
    if (num === null) {
      return null;
    } else if ((num % 3 === 0) && (num % 5 === 0)) {
      return "fizzbuzz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  };
