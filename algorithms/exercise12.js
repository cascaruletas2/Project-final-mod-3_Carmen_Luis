function exercise12() {
  const input = prompt("Enter items separated by commas:");
  const items = input.split(',');
  const unique = [];
  
  if (items.length === 0) {
    alert("Invalid input! Please enter items separated by commas.");
    return exercise12();
  }
  
  for (let item of items) {
    let found = false;
    for (let u of unique) {
      if (u === item) {
        found = true;
        break;
      }
    }
    if (!found) unique.push(item);
  }
  
  let result = '';
  for (let i = 0; i < unique.length; i++) {
    result += unique[i];
    if (i < unique.length - 1) result += ', ';
  }
  
  alert(`Unique items: ${result}`);
}