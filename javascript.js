// Get DOM elements
const countdownDateInput = document.getElementById('countdown-date');
const countdownDays = document.getElementById('countdown-days');
const countdownHours = document.getElementById('countdown-hours');
const countdownMinutes = document.getElementById('countdown-minutes');
const countdownSeconds = document.getElementById('countdown-seconds');
const setReminderBtn = document.getElementById('set-reminder-btn');
const reminderMessage = document.getElementById('reminder-message');
const facebookShareBtn = document.getElementById('facebook-share-btn');
const twitterShareBtn = document.getElementById('twitter-share-btn');
const linkedinShareBtn = document.getElementById('linkedin-share-btn');

// Set the date we're counting down to
let countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7);

// Update the countdown every second
let countdownInterval = setInterval(() => {
  // Get the current time
  let now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  let distance = countdownDate.getTime() - now;

  // Calculate days, hours, minutes, and seconds remaining
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;

  // If the countdown is over, display a message and stop the countdown
  if (distance < 0) {
    clearInterval(countdownInterval);
    reminderMessage.innerHTML = "It's time!";
  }
}, 1000);

// Set a new countdown date when the user clicks the "Set Reminder" button
setReminderBtn.addEventListener('click', () => {
  let newCountdownDate = new Date(countdownDateInput.value).getTime();
  
  // If the input is valid, update the countdown date and display a success message
  if (isNaN(newCountdownDate)) {
    reminderMessage.innerHTML = 'Please enter a valid date.';
  } else {
    countdownDate = new Date(newCountdownDate);
    reminderMessage.innerHTML = 'Reminder set!';
  }
});

// Share the countdown on Facebook when the user clicks the Facebook share button
facebookShareBtn.addEventListener('click', () => {
  let shareUrl = 'https://www.facebook.com/sharer/sharer.php?';
  shareUrl += `u=${encodeURIComponent(window.location.href)}`
  window.open(shareUrl, '_blank');
});

// Share the countdown on Twitter when the user clicks the Twitter share button
twitterShareBtn.addEventListener('click', () => {
  let shareUrl = 'https://twitter.com/intent/tweet?';
  shareUrl += `url=${encodeURIComponent(window.location.href)}`
  window.open(shareUrl, '_blank');
});

// Share the countdown on LinkedIn when the user clicks the LinkedIn share button
linkedinShareBtn.addEventListener('click', () => {
  let shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?';
  shareUrl += `url=${encodeURIComponent(window.location.href)}`
  window.open(shareUrl, '_blank');
});
