function exercise9() {
  const input = prompt("Enter a year to check if it's a leap year:");
  const year = Number(input);
  
  if (typeof year !== 'number' || !Number.isInteger(year) || input === '') {
    alert("Invalid input! Please enter a valid year.");
    return exercise9();
  }
  
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  alert(`${year} is ${isLeap ? '' : 'not '}a leap year.`);
}