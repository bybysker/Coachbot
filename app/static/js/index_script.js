/*
const loadingContainer = document.getElementById('loading-container');
const loadingIndicator = document.getElementById("loading-indicator");
const quoteText = document.getElementById("quote-text");
*/
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Eureka!",
  "Innovation distinguishes between a leader and a follower.",
  "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
  "Genius is one percent inspiration and ninety-nine percent perspiration.",
  "The only way to do great work is to love what you do.",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "I think, therefore I am. - René Descartes",
  "It is the mark of an educated mind to be able to entertain a thought without accepting it. - Aristotle",
  "Doubt is the origin of wisdom. - René Descartes",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Isaac Newton",
  "The more I learn, the more I realize how much I don't know. - Albert Einstein",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education. - Martin Luther King Jr.",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein"
];

// Function to display random quote
function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Function to simulate form submission and show loading bar and feedback messages
function submitForm() {
  // Display loading bar
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = "0";
  progressBar.style.animationPlayState = "running";

  // Display random feedback messages
  const feedbackMessage = document.querySelector(".feedback-message");
  feedbackMessage.style.display = "block";
  displayRandomQuote();
  setInterval(displayRandomQuote, 3000); // Change quote every 3 seconds

  // Simulate form submission delay
  setTimeout(() => {
    // Hide loading bar
    progressBar.style.animationPlayState = "paused";

    // Show completion message
    feedbackMessage.textContent = "Your gym plan is ready!";
    // Additional actions or redirection after form submission
  }, 60000); // Simulating a 1-minute processing time
}

// Call the submitForm function when the form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  submitForm();
});