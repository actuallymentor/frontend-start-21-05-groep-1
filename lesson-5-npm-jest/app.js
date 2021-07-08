// Import the QR package
const { printQr } = require( './modules' )

// Run the toString as specified in the documentation
printQr( 'I am a unicorn!' )


// Load the readline package
const readlineSync = require( 'readline-sync' )

// Ask the user for their name
const name = readlineSync.question( 'What is your name?' )

// Log out the name
console.log( `Hello ${ name }!` )
