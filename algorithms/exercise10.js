function exercise10() {
  const value = prompt("Enter the temperature value:");
  const numValue = Number(value);
  const unit = prompt("Enter 'C' to convert to Fahrenheit or 'F' to Celsius:").toUpperCase();
  
  if (typeof numValue !== 'number' || value === '') {
    alert("Invalid temperature value! Please enter a number.");
    return exercise10();
  }
  
  if (unit === 'C') {
    alert(`${numValue}°C = ${(numValue * 9/5) + 32}°F`);
  } else if (unit === 'F') {
    alert(`${numValue}°F = ${(numValue - 32) * 5/9}°C`);
  } else {
    alert("Invalid unit! Please enter 'C' or 'F'.");
    exercise10();
  }
}