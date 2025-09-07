// script2.js - fetch a random quote from an array (no network)
const quotes = [
  "Simplicity is the soul of efficiency.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Programs must be written for people to read, and only incidentally for machines to execute."
];
document.getElementById('loadQuote').addEventListener('click', () => {
  const q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = q;
});
// load one initially
document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
