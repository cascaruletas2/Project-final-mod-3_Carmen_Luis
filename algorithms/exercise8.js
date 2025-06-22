function exercise8() {
  const str = prompt("Enter a string:");
  const char = prompt("Enter a character to count:");
  
  if (typeof str !== 'string' || str === null || typeof char !== 'string' || char.length !== 1) {
    alert("Invalid input! Please enter a valid string and a single character.");
    return exercise8();
  }
  
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  
  alert(`The character '${char}' appears ${count} times.`);
}