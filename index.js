// Write your code in this file!

// Define the current user
const currentUser = 'Grace Hopper';

// Create the welcome message using template literals
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create an excited welcome message in uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Create a short greeting using only the first initial of currentUser
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
