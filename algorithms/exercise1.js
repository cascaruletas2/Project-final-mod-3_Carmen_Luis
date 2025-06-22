function exercise1() {
  const input = prompt("Enter a number to check if it's even or odd:");
  const number = Number(input);
  
  if (typeof number !== 'number' || input === '' || input === null) {
    alert("Invalid input! Please enter a valid number.");
    return exercise1();
  }
  
  alert(`${number} is ${number % 2 === 0 ? 'Even' : 'Odd'}`);
}