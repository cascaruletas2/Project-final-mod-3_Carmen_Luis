function exercise17() {
  const str = prompt("Enter an expression to check for balanced parentheses:");
  
  if (typeof str !== 'string' || str === '') {
    alert("Invalid input! Please enter an expression.");
    return exercise17();
  }
  
  const stack = [];
  const pairs = { '(': ')', '[': ']', '{': '}' };
  let valid = true;
  
  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop();
      if (!last || pairs[last] !== char) {
        valid = false;
        break;
      }
    }
  }
  
  if (stack.length > 0) valid = false;
  
  alert(`Parentheses are ${valid ? '' : 'NOT '}balanced!`);
}