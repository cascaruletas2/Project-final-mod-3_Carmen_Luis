function exercise15() {
  const input = prompt("Enter a number to find all primes up to it:");
  const n = Number(input);
  
  if (typeof n !== 'number' || n < 2 || !Number.isInteger(n) || input === '') {
    alert("Invalid input! Please enter an integer greater than 1.");
    return exercise15();
  }
  
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  
  let result = '';
  for (let i = 0; i < primes.length; i++) {
    result += primes[i];
    if (i < primes.length - 1) result += ', ';
  }
  
  alert(`Primes up to ${n}: ${result}`);
}