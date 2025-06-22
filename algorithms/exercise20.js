function exercise20() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  
  const ms = (h * 3600 + m * 60 + s) * 1000;
  
  function pad(num) {
    return num < 10 ? '0' + num : num;
  }
  
  alert(`Current time: ${pad(h)}:${pad(m)}:${pad(s)} = ${ms} milliseconds since midnight`);
}