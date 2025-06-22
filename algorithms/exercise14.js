function exercise14() {
  const str1 = prompt("Enter first word:");
  const str2 = prompt("Enter second word:");
  
  if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1 === '' || str2 === '') {
    alert("Invalid input! Please enter two words.");
    return exercise14();
  }
  
  function normalize(s) {
    const letters = [];
    for (let char of s.toLowerCase()) {
      if (char >= 'a' && char <= 'z') {
        letters.push(char);
      }
    }
    
    for (let i = 0; i < letters.length; i++) {
      for (let j = i + 1; j < letters.length; j++) {
        if (letters[i] > letters[j]) {
          const temp = letters[i];
          letters[i] = letters[j];
          letters[j] = temp;
        }
      }
    }
    return letters.join('');
  }
  
  const isAnagram = normalize(str1) === normalize(str2);
  alert(`"${str1}" and "${str2}" are ${isAnagram ? '' : 'not '}anagrams.`);
}