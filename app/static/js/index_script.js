const quotes = [
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "Take care of your body. It's the only place you have to live.",
  "The only bad workout is the one that didn't happen.",
  "Don't wish for a good body, work for it.",
  "Success is what comes after you stop making excuses.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "The only way to do great work is to love what you do.",
  "The difference between who you are and who you want to be is what you do.",
  "Discipline is doing what needs to be done, even if you don't want to.",
  "Exercise is a celebration of what your body can do.",
  "The body achieves what the mind believes.",
  "Don't stop when you're tired. Stop when you're done.",
  "Your health is an investment, not an expense.",
  "Fitness is not a destination, it's a way of life.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Strive for progress, not perfection.",
  "Be stronger than your excuses.",
  "Well-being is the foundation of everything. Without it, nothing else matters.",
  "Success starts with self-discipline.",
  "Good things come to those who sweat.",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "Make time for yourself. Invest in your mind, body, and soul.",
  "Eat well, move daily, hydrate often, sleep lots, love your body, repeat for life.",
  "The only person you should try to be better than is the person you were yesterday.",
];



// Function to generate random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to update progress bar
function updateProgressBar() {
  const progressBar = document.querySelector('.progress');
  const percentageElement = document.querySelector('.percentage');
  let progress = 0;

  const interval = setInterval(() => {
    progress++;
    progressBar.style.width = progress + '%';
    percentageElement.textContent = progress + '%';

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
  }, 5000);
}

// Function to initiate the process
function startProcess() {
  const progressBarInterval = updateProgressBar();
  updateFeedbackMessages();
}

// Call the startProcess function when the form is submitted
const form = document.querySelector('form');
const loading_container = document.querySelector('.loading-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Deactivate submit button
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.disabled = true;

  const container = document.querySelector('.container');
  
  container.style.display = 'none';

  loading_container.style.display = 'flex';

  startProcess();

  // Simulate form submission delay
  setTimeout(function() {
    // Hide the loading animation
    loading_container.style.display = "none";

    // Enable the submit button
    submitButton.disabled = false;

    // Redirect to the gymplan page or display the response as needed
    window.location.href = "/generate_gymplan";
  }, 90000);
});