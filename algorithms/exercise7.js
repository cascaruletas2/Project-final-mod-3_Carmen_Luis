function exercise7() {
  const input = prompt("Enter numbers separated by commas to sort them:");
  const numbersStr = input.split(',');
  const arr = [];
  
  for (let i = 0; i < numbersStr.length; i++) {
    const num = Number(numbersStr[i]);
    if (typeof num !== 'number') {
      alert("Invalid input! Please enter numbers only, separated by commas.");
      return exercise7();
    }
    arr.push(num);
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  
  let result = '[';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) result += ', ';
  }
  result += ']';
  
  alert(`Sorted array: ${result}`);
}