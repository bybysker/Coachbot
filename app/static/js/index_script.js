const loadingContainer = document.getElementById('loading-container');
const loadingIndicator = document.getElementById("loading-indicator");
const quoteText = document.getElementById("quote-text");

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  // Add more quotes here
];


function displayRandomQuote() {
  const quoteContainer = document.getElementById("quote-container");
  const quoteText = document.getElementById("quote-text");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote;
  quoteContainer.style.display = "block";
}

// Call the function to display a random quote
displayRandomQuote();



function startLoadingProcess() {
  // Display the loading indicator
  //loadingIndicator.style.display = "block";
  loadingContainer.style.display = 'flex';

  loadingContainer.classList.add('loading-animation');

  displayRandomQuote();
  // Set interval to change the quote every 10 seconds
  setInterval(displayRandomQuote, 10000);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  startLoadingProcess();
}

const form = document.getElementById('user_infos');
form.addEventListener('submit', handleSubmit);
