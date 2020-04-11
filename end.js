const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const message = document.getElementById('message');

const gold = `You are a supreme being of light!`;
const silver = `You are an indigo child!`;
const bronze = `You make mother Gaia cry with your ignorance!`;

if (mostRecentScore == 30) {
  message.innerText = gold;
} else if (mostRecentScore == 20) {
  message.innerText = silver;
} else {
  message.innerText = bronze;
}

finalScore.innerText = mostRecentScore;
console.log(finalScore.innerText)