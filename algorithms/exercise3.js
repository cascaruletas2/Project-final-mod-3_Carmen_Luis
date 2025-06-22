function exercise3() {
  const input = prompt("Enter numbers separated by commas (9,3,7,2):");
  const numbersStr = input.split(',');
  const numbers = [];
  
  for (let i = 0; i < numbersStr.length; i++) {
    const num = Number(numbersStr[i]);
    if (typeof num !== 'number') {
      alert("Invalid input! Please enter numbers only, separated by commas.");
      return exercise3();
    }
    numbers.push(num);
  }
  
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  
  alert(`The maximum number is: ${max}`);
}