// This is ./scripts.js
console.log( 'Script loaded' )
const people = [
	{ name: 'Derp', id: Math.random() },
	{ name: 'Derpina', id: Math.random() }
]
window.onload = function() {

	const body = document.querySelectorAll( 'body' )[0]
	const messages = people.map( person => {
		const message = document.createElement( 'h1' )
		message.id = person.id
		message.innerHTML = `Hello ${ person.name }!`
		return message
	} )

	console.log( 'Appending: ', messages )

	for ( let i = 0; i < messages.length; i++ ) {
		body.appendChild( messages[i] )
	}

}