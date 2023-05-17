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

const loadingIndicator = document.getElementById("loading-indicator");
const quoteText = document.getElementById("quote-text");

function startLoadingProcess() {
  // Display the loading indicator
  loadingIndicator.style.display = "block";

  // Update the quote text
  quoteText.textContent = "Please wait while we process your request...";
}

// Call the function to start the loading process
startLoadingProcess();

  