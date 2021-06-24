footer: Slides by @actuallymentor
slidenumbers: true
autoscale: true
slide-transition: true
theme: Plain Jane, 3


# Js: [], {}, for

"Arrays, objects and loops"

---

[.text: alignment(center)]

# Etiquette

🎥 🎤

---

# Refresher

---

# Code quality

Code is for humans, not for machines.

---

# Comments

Assume the next person working on this code is a psycho who knows where you live:

- Explain what you are doing
- Explain why you are doing it

---

# Did you do your homework?

Optionally: walk through it

---

# Arrays are lists

"Shopping list" -> "Array with the things I want to buy"

---

# Lists can contain anything

My array has:

- 0
- "Hello"
- function ding( dong ) { alert( dong ) }
- etc

---

# Let's play a game called "what do you see"

- Answer one thing
- All answers allowed
- Except: "I don't know"
- Except: answer already given

---

```javascript
// Create a shopping list
const shoppingList = [ 'butter', 'cheese', 'eggs' ]

// Add something we forgot
shoppingList.push( 'tabasco' )

// Check what is in th elist
console.log( `Shopping list contains ${ shoppingList.length } items: `, shoppingList )


```

---

```javascript
// Create a shopping list
const shoppingList = [ 'butter', 'cheese', 'eggs' ]

// Or maybe not something so spicey
shoppingList.pop()

// Check what is in th elist
console.log( `Shopping list contains ${ shoppingList.length } items: `, shoppingList )

```

---

```javascript
// Create a shopping list
const shoppingList = [ 'butter', 'cheese', 'eggs' ]

// Look at the content in different ways
console.log( shoppingList )
console.log( shoppingList[0] )
console.log( shoppingList[99] )
console.log( shoppingList[ shoppingList.length ] )

```

---

# Arrays have many methods

From `find` to `filter`, have a look at MDN.

---

# Objects are like bags with pockets

"What is in the left pocket?"

Only the word for "pocket" is "key".

---

# Objects can contain anything too

My object has the following pockets:

- In pocket A is 8
- In pocket B is "Hello"
- In pocket C is `function ding(dong){ alert( dong ) }` 

---

```javascript
// Create an object called bag
const bag = {
    a: 8,
    b: "hello",
    c: true
}

// Look at the keys in the object
console.log( `In a is ${ bag.a }` )

```
---

```javascript
// Create an object called person
const person = {
    age: 25,
    name: "Jeff",
    famous: true,
    "secret nickname": 'Jeffster'
}

// Look at the keys in the object
console.log( `${ person.name } is ${ person.age } years old and ${ person.famous ? 'is' : 'is not' } famous` )

// Carreer change
person.famous = false

// Look at the keys in the object
console.log( `${ person.name } is ${ person.age } years old and ${ person.famous ? 'is' : 'is not' } famous` )

// Family time
person.kids = [ 'Jeffina', 'Jefferson' ]

// Look at the keys in the object
console.log( person )

```
---

# Loops are a way to repeat actions

"Pay a €5 fine for every time you bikes through red"

---

# Pseudo loop

```
make a for loop
    make a counter that starts at 0
    keep looping so long as counter is under 5
    after every loop add 1 to the counter

        Inside very loop say "This is round number" and then the number of the counter
```

---

```javascript
for (let i = 0; i < 5; i++) {
    console.log( 'This is round number ', i )
}
```

---

```javascript
for (let i = 10; i < 5; i++) {
    console.log( 'This is round number ', i )
}
```

---

```javascript
for (let i = 10; i < 20; i++) {
    console.log( 'This is round number ', i )
}
```

---

```javascript
// Create a shopping list
const shoppingList = [ 'butter', 'cheese', 'eggs' ]

// Log some entries
console.log( shoppingList[ 0 ], shoppingList[ 5 ] )

// Loop ofer the list
for (let i = 0; i < shoppingList.length; i++) {
    console.log( `Item number ${ i + 1 } is: ${ shoppingList[i] }` )
}

```

---

```javascript
// Create a shopping list
const magicNumbers = [ 2, 0, 9001 ]

// Loop ofer the list
for (let i = 0; i < magicNumbers.length; i++) {
    console.log( `Item number ${ i + 1 } is: ${ magicNumbers[i] }` )
}

// Perform an algorithm
for (let i = 0; i < magicNumbers.length; i++) {
    magicNumbers[ i ] = magicNumbers[ i ] + 1
}

console.log( magicNumbers )

```

---

```javascript
// Create a shopping list
const shoppingList = [ 'butter', 'cheese', 'eggs' ]

// Log some entries
console.log( shoppingList[ 0 ], shoppingList[ 5 ] )

// Loop ofer the list
for (var i = shoppingList.length - 1; i >= 0; i--) {
    console.log( `Item number ${ i + 1 } is: ${ shoppingList[i] }` )
}

```

---

# Exercise time!

https://github.com/hogeschoolnovi/frontend-javascript-loops

---

# For next time:

Chapter 4 & 5, hand-in on *wednesday* on Teams.