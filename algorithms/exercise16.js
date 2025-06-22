function exercise16() {
  const roman = prompt("Enter a Roman numeral:").toUpperCase();
  const validChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
  if (roman === '') {
    alert("Invalid input! Please enter a Roman numeral.");
    return exercise16();
  }
  
  for (let char of roman) {
    let valid = false;
    for (let v of validChars) {
      if (char === v) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      alert("Invalid Roman numeral! Only use I, V, X, L, C, D, M.");
      return exercise16();
    }
  }
  
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  
  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]];
    const next = values[roman[i + 1]];
    
    if (next && current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  
  alert(`${roman} = ${result}`);
}