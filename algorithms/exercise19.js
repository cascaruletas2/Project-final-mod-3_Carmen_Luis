function exercise19() {
  const input = prompt("Enter a year to find its century:");
  const year = Number(input);
  
  if (typeof year !== 'number' || year <= 0 || !Number.isInteger(year) || input === '') {
    alert("Invalid input! Please enter a positive integer.");
    return exercise19();
  }
  
  let century = Math.floor(year / 100);
  if (year % 100 !== 0) century++;
  
  let suffix = 'th';
  if (century % 100 < 11 || century % 100 > 13) {
    const lastDigit = century % 10;
    if (lastDigit === 1) suffix = 'st';
    else if (lastDigit === 2) suffix = 'nd';
    else if (lastDigit === 3) suffix = 'rd';
  }
  
  alert(`${year} belongs to the ${century}${suffix} century`);
}