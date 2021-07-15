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

```javascript
const numbers = [ 1, 2,3,4,5 ]

const doubles = []

for ( let i = 0; i < numbers.length; i++ ) {
	doubles.push( numbers[i] * 2 )
}


console.log( doubles )
```

---

```javascript
const numbers = [ 1, 2,3,4,5 ]

const doubles = numbers.map( function( number ) {
	return number * 2
} )

console.log( doubles )
```

---

```javascript
const numbers = [ 1, 2,3,4,5 ]

const triples = numbers.map( number => {
	return number * 3
} )

console.log( triples )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

const adults = []

for (var i = 0; i < people.length; i++) {
	if( people[i].age >= 18 ) adults.push( people[i] )
}

console.log( adults )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

const adults = people.filter( function( person ) {

	if( person.age >= 18 ) return true
	else return false

} )

console.log( adults )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

const kids = people.filter( person => person.age < 18 )

console.log( kids )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

let bob = {}

for ( let i = 0; i < people.length; i++ ) {
	if( people[i].name == 'bob' ) bob = people[i]
}

console.log( bob )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

let bob = people.find( person => person.name == 'bob' )

console.log( bob )
```

---

```javascript
const people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

people.sort( function( one, other ) {

	if( one.age > other.age ) return 1
	if( other.age > one.age ) return -1
	if( other.age == one.age ) return 0

} )

console.log( people )
```

---

```javascript
let people = [
	{ name: 'bob', age: 5 },
	{ name: 'bobina', age: 55 },
	{ name: 'bobster', age: 19 }
]

people = people.filter( person => person.age > 5 )
.map( person => {
	return { ...person, age: person.age * 2 }
} )
.sort( function( one, other ) {

	if( one.age > other.age ) return 1
	if( other.age > one.age ) return -1
	if( other.age == one.age ) return 0

} )

console.log( people )
```