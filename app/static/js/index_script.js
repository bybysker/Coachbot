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
  "The only way to do great work igit s to love what you do. - Steve Jobs",
  "We cannot solve our problems with the same thinking we used when we created them. - Albert Einstein"
];


// Function to generate random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update progress bar
function updateProgressBar() {
  const progressBar = document.querySelector('.progress');
  let progress = 0;

  const interval = setInterval(() => {
    progress++;
    progressBar.style.width = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 900);

  return interval;
}

// Function to update feedback messages
function updateFeedbackMessages() {
  const feedbackMessages = document.querySelector('.feedback-messages');

  setInterval(() => {
    const randomQuote = generateRandomQuote();
    feedbackMessages.textContent = randomQuote;
  }, 3000);
}

// Function to initiate the process
function startProcess() {
  const progressBarInterval = updateProgressBar();
  updateFeedbackMessages();
}

// Call the startProcess function when the form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  startProcess();
});