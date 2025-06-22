function exercise6() {
  const input = prompt("Enter a position (n) to get the Fibonacci number:");
  const position = Number(input);
  
  if (typeof position !== 'number' || position < 0 || !Number.isInteger(position) || input === '') {
    alert("Invalid input! Please enter a positive integer.");
    return exercise6();
  }
  
  let a = 0, b = 1;
  for (let i = 2; i <= position; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  alert(`Fibonacci(${position}) = ${position === 0 ? 0 : b}`);
}