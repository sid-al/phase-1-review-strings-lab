// Write your code in this file!
const currentUser = 'Sid Ali';
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`
const upperCaseCurrentUser = currentUser.toUpperCase();
let excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`

const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
let shortGreeting = `Welcome, ${firstInitial}!`;