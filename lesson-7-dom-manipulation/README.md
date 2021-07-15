footer: Slides by @actuallymentor
slidenumbers: true
autoscale: true
slide-transition: true
theme: Plain Jane, 3


# Data manipulation

---

[.text: alignment(center)]

# Etiquette

🎥 🎤


---

[.text: alignment(center)]

# Code quality

Code is for humans, not for machines.

---

# Comments

Assume the next person working on this code is a psycho who knows where you live:

- Explain what you are doing
- Explain why you are doing it

---

[.column]

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script type="application/javascript">
		console.log( 'Hello hacker! Want a job? Contact us!' )
	</script>
</head>
<body>
	<h1 id="title">Hello sir</h1>
	<p>It is so nice to see you!</p>
	<p>How are you today?</p>
	<input placeholder='Tell me how you are' />
	<script src='./scripts.js'></script>
</body>
</html>
```

[.column]

```javascript
// This is ./scripts.js
let words = document.getElementById( 'title' )
console.log( words )

words = document.querySelector( 'p' )
console.log( words )

words = document.querySelectorAll( 'p' )
console.log( words )
```

---

[.column]

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script type="application/javascript">
		console.log( 'Hello hacker! Want a job? Contact us!' )
	</script>
	<script src='./scripts.js' async></script>
</head>
<body>
	<h1 id="title">Hello sir</h1>
	<p>It is so nice to see you!</p>
	<p>How are you today?</p>
	<input placeholder='Tell me how you are' />
</body>
</html>
```

[.column]

```javascript
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
```

---

[.column]

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<script type="application/javascript">
		console.log( 'Hello hacker! Want a job? Contact us!' )
	</script>
	<script src='./scripts.js' async></script>
</head>
<body>
	<h1 id="title">Hello sir</h1>
	<p>It is so nice to see you!</p>
	<p>How are you today?</p>
	<input placeholder='Tell me how you are' />
</body>
</html>
```

[.column]

```javascript
// This is ./scripts.js
console.log( 'Script loaded' )
window.onload = function() {

	console.log( 'Starting...' )
	const input = document.querySelector( 'body input' )
	input.addEventListener( 'click', event => {
		console.log( 'You clicked ', event.target )
	} )

}
```

---

[.column]

```html
<!DOCTYPE html>
<html>
<head>
	<script src='./scripts.js' async></script>
</head>
<body>
	<h1 id="title">Hello sir</h1>
	<p>It is so nice to see you!</p>
	<p>How are you today?</p>
	<input placeholder='Tell me how you are' />
</body>
</html>
```

[.column]

```javascript
// This is ./scripts.js
console.log( 'Script loaded' )
const people = [
	{ name: 'Derp', id: Math.random() },
	{ name: 'Derpina', id: Math.random() }
]
window.onload = function() {

	const body = document.querySelectorAll( 'body' )[0]
	body.innerHTML = people.map( person => {
		return `<h1 id='person-${ person.id }'>Hello ${ person.name }!</h1>`
	} ).join( ' ' )

}
```

---

[.column]

```html
<!DOCTYPE html>
<html>
<head>
	<script src='./scripts.js' async></script>
</head>
<body>
	<h1 id="title">Hello sir</h1>
	<p>It is so nice to see you!</p>
	<p>How are you today?</p>
	<input placeholder='Tell me how you are' />
</body>
</html>
```

[.column]

```javascript
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
```
