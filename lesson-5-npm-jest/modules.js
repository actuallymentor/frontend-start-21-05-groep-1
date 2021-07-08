// ///////////////////////////////
// QR funcions
// ///////////////////////////////

// Import the QR package
const QRCode = require( 'qrcode' )

// QR printer
function printQr( string, type='terminal' ) {

	// Run the toString as specified in the documentation
	QRCode.toString( string, { type: type }, function ( err, uri ) {
	  console.log( uri )
	} )


}


function multiply( one, two ) {

	return one * two

}


// Export functions
module.exports = {
	printQr: printQr,
	multiply: multiply
}