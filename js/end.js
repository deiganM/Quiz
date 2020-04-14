const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const message = document.getElementById('message');

// End messages
const gold = `You are a supreme being of light!`;
const silver = `You are an indigo child!`;
const bronze = `You make mother Gaia cry with your ignorance!`;

// If statemnets to determine end message
if (mostRecentScore >= 40) {
  message.innerText = gold;
} else if (mostRecentScore < 40 && mostRecentScore >= 20) {
  message.innerText = silver;
} else {
  message.innerText = bronze;
}

// Final score message
finalScore.innerText = mostRecentScore;
console.log(finalScore.innerText)