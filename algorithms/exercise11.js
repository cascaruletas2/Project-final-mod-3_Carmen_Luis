function exercise11() {
  const input = prompt("Enter at least 2 numbers separated by commas:");
  
  if (input === null) {
    alert("Operation canceled.");
    return;
  }
  
  const numbersStr = input.split(',');
  const arr = [];
  
  if (numbersStr.length < 2) {
    alert("Please enter at least 2 numbers separated by commas.");
    return exercise11();
  }
  
  for (let i = 0; i < numbersStr.length; i++) {
    const num = Number(numbersStr[i]);
    if (typeof num !== 'number') {
      alert("Invalid input! Please enter numbers only, separated by commas.");
      return exercise11();
    }
    arr.push(num);
  }
  
  let first = arr[0] > arr[1] ? arr[0] : arr[1];
  let second = arr[0] > arr[1] ? arr[1] : arr[0];
  
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  
  alert(`Second largest number: ${second}`);
}