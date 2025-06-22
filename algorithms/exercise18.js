function exercise18() {
  const text = prompt("Enter text to convert to leet speak:");
  
  if (typeof text !== 'string' || text === '') {
    alert("Invalid input! Please enter some text.");
    return exercise18();
  }
  
  const leetMap = {
    A: '4', B: '8', E: '3', G: '6', H: '#',
    I: '1', O: '0', R: 'Я', S: '5', T: '7', Z: '2'
  };
  
  let leetText = '';
  for (let char of text.toUpperCase()) {
    let converted = false;
    for (let key in leetMap) {
      if (char === key) {
        leetText += leetMap[key];
        converted = true;
        break;
      }
    }
    if (!converted) leetText += char;
  }
  
  alert(`Leet speak: ${leetText}`);
}