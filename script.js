function fibonacci(num) {
// your code here
	 if (num <= 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fibArr = [0, 1]; // Initialize the Fibonacci sequence with the first two terms
    for (let i = 2; i <= num; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2]; // Calculate the next Fibonacci number
    }
    return fibArr[num];
  }
}

module.exports = fibonacci;
