function exercise4() {
  const input = prompt("Enter a positive integer to calculate its factorial:");
  const n = Number(input);
  
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n) || input === '') {
    alert("Invalid input! Please enter a positive integer.");
    return exercise4();
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  alert(`${n}! = ${result}`);
}