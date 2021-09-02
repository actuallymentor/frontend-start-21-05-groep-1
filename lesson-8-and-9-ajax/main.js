// ///////////////////////////////
// Demo AQI app based on WAQI API
// ///////////////////////////////

// Check if file was loaded
console.log( 'I AM ALIVE' )

// ///////////////////////////////
// API helpers
// API docs available at: https://aqicn.org/
// ///////////////////////////////

// API config: throttled at 1000/second request so don't worry about the key being in a repo
const API_KEY = `3469bc81b08d109e016b4817338356f41c1b6f3a`
const API_URL = `https://api.waqi.info/feed`

// Async get the AQI or specific error
async function getDataOfCity( cityName='' ) {

	try {

		// Call the api to get the data
		const api_call = `${ API_URL }/${ cityName }/?token=${ API_KEY }`
		console.log( 'Calling ', api_call )
		const result = await axios( api_call )
		console.log( 'Response: ', result )

		// Destructure the data so we can use it
		const { status, data } = result.data

		// Check if everything went ok
		if( status != 'ok' ) throw `Status was ${ status }, reason: ${ data }`

		// Return the AQI data
		const { aqi } = data
		return aqi

	} catch( e ) {

		// Log error details for debugging, but return user-friendly error for use in interface
		console.error( 'API ERROR: ', e )
		throw `The getDataOfCity function broke with: ${ e }`
	}

}

// ///////////////////////////////
// Document handlers
// ///////////////////////////////
window.onload = function() {

	// Confirm JS was loaded
	console.log( 'Document loaded' )


	// Listen to click events on the submit button
	document.getElementById( 'search' ).addEventListener( 'click', async event => {

		// Relevant elements
		const errorField = document.getElementById( 'error' )
		const resultBox = document.getElementById( 'result' )

		// Get the input data
		console.log( 'Search was clicked' )
		const { value: query } = document.getElementById( 'query' )
		console.log( 'Search query: ', query )

		// Get the data from the api
		try {

			// Hid eelements of old query
			resultBox.classList.add( 'hide' )
			errorField.classList.add( 'hide' )

			// Set loading status and get API data
			event.target.value = 'Loading...'
			const aqi = await getDataOfCity( query )

			// Show the AQI visibly
			resultBox.classList.remove( 'hide' )
			document.getElementById( 'result_aqi' ).innerHTML = aqi
			document.getElementById( 'result_city' ).innerHTML = `AQI in ${ query }:`


		} catch( e ) {

			// Show error in interface
			errorField.classList.remove( 'hide' )
			errorField.innerHTML = `Error: ${ e }`

		} finally {

			// Reset search button value
			event.target.value = 'search'
			
		}

	} )

}