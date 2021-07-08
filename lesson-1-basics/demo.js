// Show that this file works
console.log( 'Demo of lesson one' )

// Make some variables
const name = 'Mentor Palokaj'
let age = 9001
let alive = true

// Log out the above vars
console.log( `${ name } is ${ age } years old (maybe).` )

// Demo the static printing of template literal style 
console.log( '${ name } is ${ age } years old (maybe).' )

// Demo the concatenation of strings
console.log( name + ' ' + 'is having a great day' )

// ///////////////////////////////
// Logic
// ///////////////////////////////

// If else statement
if( age > 9000 ) {
	console.log( 'OMG he is over 9000!' )
} else if ( age == 9001 ) {
	console.log( 'Does this ever run?' )
}


// Multiple statements do trigger
if( age > 9000 ) {
	console.log( 'OMG he is over 9000!' )
}

if ( age == 9001 ) {
	console.log( 'Does this ever run?' )
}

// ///////////////////////////////
// Error examles
// ///////////////////////////////
// name = 'Bill Gates'
// const function = 'Really?'
// const typeof = 10

// if( age > 9000 {
// 	console.log( 'OMG he is over 9000!' )
// } else if ( age == 9001 ) {
// 	console.log( 'Does this ever run?' )
// }

// ///////////////////////////////
// Math operations
// ///////////////////////////////

// Incrementing age
console.log( "\n------\nAddition:" )
console.log( age )
age++
console.log( age )
console.log( '------\n' )

console.log( "\n------\nSubstraction:" )
console.log( age )
age -= 1
console.log( age )
console.log( '------\n' )

console.log( "\n------\nExpression:" )
console.log( age + 1000 )
console.log( age )
console.log( '------\n' )

console.log( "\n------\nExpression of division:" )
console.log( age / 2 )
console.log( age )
console.log( '------\n' )

console.log( "\n------\nExpression of multiplication:" )
console.log( age * 10 )
console.log( age )
console.log( '------\n' )

// ///////////////////////////////
// Boolean logic
// ///////////////////////////////

console.log( true )
console.log( true || false )
console.log( false && true )
console.log( true && true )
console.log( false == false )
console.log( !true )
console.log( false != true )
