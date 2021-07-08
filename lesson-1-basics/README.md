footer: Slides by @actuallymentor
slidenumbers: true
autoscale: true
slide-transition: true
theme: Plain Jane, 3


# Intro to Javascript

"Javascript is like Java like Car is like Carpet"
~ The Internet

---

[.text: alignment(center)]

# Hi 👋

My name is Mentor.

🧬 👾 💻

---

[.text: alignment(center)]

# Etiquette

🎥 🎤

---

# HTML is scaffold

```html
<h1>Hello</h1>
<p>My name is Jeff</p>
```

--- 

# CSS is paint

```css
h1 {
	color: red;
}
```

---

# Javascript is interaction


```javascript
document.querySelector( 'h1' ).addEventListener( 'click', function() {
    alert( 'You clicked a heading!' )
} )

```

---

# Example: slider

1. Every five seconds do the following:
1. Add a new image to the HTML outside of the visible area
1. Slide the old image left out of the screen
1. Slide the new image in from the right of the screen
1. When done remove the old image from the HTML

---

# Example: validation

1. Run the following every time a user types in input field `input#email`
1. Check if the string contains an @ sign
1. If not, make the input field red
1. If it does contain a @, make the input field green

---

# First things first

Planning your code ahead of time is about finding your style.

---

# Pseudo code

## Writing 'fake' code that describes that you want

```python

create variable "counter"

while the screen is on
	if one second passed
		add 1 to the counter

while the screen is off
	if one second passed
		remove 1 from the counter

every 1 minute
	if counter is larger than 60
		alert "you worked for a minute"
		set counter to 0


```

---

# Test-driven development

Write code so you can write code. Pseudo code example of a test:

```python

import the function "double"

run function "double" with parameter 5
if result is 10
	test succeeds
	show green checkmark
if result is not 10
	test fails
	show red cross

```

---

# Use-case driven planning

Plan ahead what needs to happen when, so that when you are coding you don't need to think too strategically.

- The webpage needs a red button
- When the button is pressed once, an alert showing "hello!" should show
- When the button is pressed twice, hide the button and show an alert saying "Don't be greedy"

---

# Try different styles

Programming is an art, there are many styles. What matters is whether you can pass the requirements and work together.

---

# Code quality

Code is for humans, not for machines.

---

# Comments

Assume the next person working on this code is a psycho who knows where you live:

- Explain what you are doing
- Explain why you are doing it

---

# Comment example

```javascript
// Function calculating statistical standard deviation based on an array of numbers
// Based on https://www.mathsisfun.com/data/standard-deviation-formulas.html
function standardDeviation( series ) {

	if( !series?.length ) return 0

	// Calculate variables needed for SD calculation
	const total = series.reduce( ( acc, val ) => acc + val, 0 )
	const mean = total / series.length
	const squaredDistancesFromMean = series.map( nr => Math.pow( nr - mean, 2 ) )
	const totalOfDifferences = squaredDistancesFromMean.reduce( ( acc, val ) => acc + val, 0 )
	const meanOfDifferences = totalOfDifferences / series.length

	// Always SD to 2 decimals except when the value itself has decimals
	return Math.round( Math.sqrt( meanOfDifferences ) * 100 ) / 100
}
```

---

# Clarity over "cool code"

What matters is whether others will understand your code.

---

# Clarity example

```javascript
const sendEmail = ( email, subject, message ) => ( email && subject ) ?
( message && sendTheEmail( email, subject, message ) ) : alert( 'You are missing a parameter' )
```

```javascript
// This function sends an email if all parameters are supplied, errors if not
// Relies on the sentTheEmail API to be loaded

function sendEmail( email, subject, message ) {
	if( !email || !subject || !message ) {
		return alert( 'You are missing a parameter' )
	} else {
		return sentTheEmail( email, subject, message )
	}
}
```

---

# [fit] Code is for humans

---

# Let's play a game called "what do you see"

---

```javascript
// Found a 10 year old
const name = 'Derpy McDerpface'
let age = 10
let alive = true

// Display user data
console.log( `${ name } is ${ age } years old` )
```

---

```javascript
// Found a 10 year old
const name = 'Derpy McDerpface'
let age = 10
let alive = true

// Aging happens
age = age + 1
age += 1
age ++

// Display user data
console.log( name + ' is ' + age ' years old' )
```

---

```javascript
// Found a 10 year old
const name = 'Derpy McDerpface'
let age = 10
let alive = true

// Telsel anti-aging powder worked a little too well
age = age / 2
age /= 2
age //

// Display user data
console.log( name + ' is ' + age ' years old' )
```

---

```javascript
// Found a 10 year old
const name = 'Derpy McDerpface'
let age = 10
let alive = true

// Kid wants to change name
name = 'Derpi van der Derp'

// Display user data
console.log( name + ' is ' + age ' years old' )
```

---

```javascript
// Found a 10 year old
const name = 'Derpy McDerpface'
let age = 10
let alive = true

if( true ) {
	age += 2
}

if( false ) {
	age += 2
}

if( false || true ) {
	age +=2
}

if( false && true ) {
	age +=2
}

// Display user data
console.log( name + ' is ' + age ' years old' )
```

---

```javascript
// Found a person
const name = 'Derpy McDerpface'
let age = 102
let alive = false

if( !alive ) {
	console.log( name + ' was ' + age ' years old' )
}

if( alive == true ) {
	console.log( name + ' is ' + age ' years old' )
}

```

---

```javascript
// Found a person
const name = 'Derpy McDerpface'
let age = 102
let alive = false

switch( name ) {

	case 'Derpy McDerpface':
		console.log( 'Found the derp' )
	break

	case 'Derpina McDerpface'
		console.log( 'Found the derpina' )
	break

	default:
		console.log( 'Who dat?' )

}

```

---

# Demo time

- Data primitives
- Variables
- If statements
