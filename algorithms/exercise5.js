function exercise5() {
  const word = prompt("Enter a word to check if it's a palindrome:");
  
  if (typeof word !== 'string' || word === null) {
    alert("Invalid input! Please enter a valid word.");
    return exercise5();
  }
  
  let cleanWord = '';
  for (let char of word.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      cleanWord += char;
    }
  }
  
  let isPal = true;
  for (let i = 0; i < cleanWord.length / 2; i++) {
    if (cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]) {
      isPal = false;
      break;
    }
  }
  
  alert(`"${word}" is ${isPal ? '' : 'not '}a palindrome.`);
}