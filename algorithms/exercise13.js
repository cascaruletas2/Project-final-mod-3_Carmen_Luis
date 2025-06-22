function exercise13() {
  const input = prompt("Enter numbers separated by commas to sum them:");
  const numbersStr = input.split(',');
  let sum = 0;
  
  for (let i = 0; i < numbersStr.length; i++) {
    const num = Number(numbersStr[i]);
    if (typeof num !== 'number') {
      alert("Invalid input! Please enter numbers only, separated by commas.");
      return exercise13();
    }
    sum += num;
  }
  
  alert(`Sum: ${sum}`);
}