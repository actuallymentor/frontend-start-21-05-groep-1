const { multiply } = require( './modules' )

describe( 'Test the multiply function', (  ) => {

	test( 'Check if 9 * 9 is correct', () => {

		const result = multiply( 9, 9 ) // 81
		expect( result ).toBe( 81 ) 

	} )

	test( 'Check if 5 * 5 is correct', () => {

		const result = multiply( 5, 5 ) // 81
		expect( result ).toBe( 25 ) 

	} )

	test( 'Check if 10 * 10 is correct', () => {

		const result = multiply( 10, 10 ) // 81
		expect( result ).toBe( 100 ) 

	} )

} )