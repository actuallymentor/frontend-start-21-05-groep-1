// This is ./scripts.js
console.log( 'Script loaded' )
window.onload = function() {

	console.log( 'Starting...' )
	const input = document.querySelector( 'body input' )
	setTimeout( () => {
		input.value = 'Too slow!'
		input.disabled = true
	}, 1000 * 10 )

}