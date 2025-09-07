// script1.js - simple counter & timestamp
const btn = document.getElementById('btn1');
const out = document.getElementById('output1');
let count = 0;
btn.addEventListener('click', () => {
  count += 1;
  const ts = new Date().toLocaleString();
  out.textContent = `Clicked ${count} time(s). Last at ${ts}`;
});
