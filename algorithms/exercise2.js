function exercise2() {
  const input = prompt("Enter a string to reverse:");
  
  if (!input || typeof input !== 'string') {
    alert("Invalid input! Please enter a valid string.");
    return exercise2();
  }
  
  alert(`Reversed: ${input.split('').reverse().join('')}`);
}