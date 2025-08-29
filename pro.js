// 1. Square Calculator
function calculateSquare() {
  const number = document.getElementById('squareInput').value;
  const result = number * number;
  document.getElementById('squareResult').innerText = `The square of ${number} is ${result}.`;
}

// 2. Array Sum Calculator
function calculateArraySum() {
  const input = document.getElementById('arrayInput').value;
  const numbers = input.split(',').map(Number);
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  document.getElementById('arrayResult').innerText = `The sum of [${numbers}] is ${sum}.`;
}

// 3. People Explorer
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
  { name: 'Eva', age: 22 },
  { name: 'Frank', age: 28 },
  { name: 'Grace', age: 32 },
  { name: 'Hank', age: 45 },
  { name: 'Ivy', age: 29 },
  { name: 'Jack', age: 33 },
];

function displayPeople(peopleList) {
  const peopleListElement = document.getElementById('peopleList');
  peopleListElement.innerHTML = '';
  peopleList.forEach(person => {
    const li = document.createElement('li');
    li.innerText = `${person.name} - ${person.age} years old`;
    peopleListElement.appendChild(li);
  });
}

function filterPeople() {
  const filterValue = document.getElementById('filterInput').value.toLowerCase();
  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(filterValue) || person.age.toString().includes(filterValue)
  );
  displayPeople(filteredPeople);
}

// Load initial people
displayPeople(people);

// 4. String Reverser
function reverseString() {
  const inputString = document.getElementById('stringInput').value;
  const reversedString = inputString.split('').reverse().join('');
  document.getElementById('reverseResult').innerText = `Reversed: ${reversedString}`;
}

// 5. Voting System
function findWinner() {
  const input = document.getElementById('voteInput').value;

  if (!input) {
    document.getElementById('voteResult').innerText = "No votes provided!";
    return;
  }

  let redCount = 0, blueCount = 0;
  const votes = input.split(',').map(vote => vote.trim().toLowerCase());
  votes.forEach(vote => {
    if (vote === 'red') redCount++;
    else if (vote === 'blue') blueCount++;
  });

  let result;
  if (redCount > blueCount) result = "Winner is Red!";
  else if (blueCount > redCount) result = "Winner is Blue!";
  else result = "It's a draw!";

  document.getElementById('voteResult').innerText = result;
}

// 6. Quote Generator
const quotes = [
  "i need a break",
  "pepole allways say that time changes things, but you actually have to change them yourself.",
  "The best way to predict the future is to create it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteResult').innerText = quotes[randomIndex];
}
