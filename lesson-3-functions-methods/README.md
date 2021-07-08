footer: Slides by @actuallymentor
slidenumbers: true
autoscale: true
slide-transition: true
theme: Plain Jane, 3


# Functions & Scope

---

[.text: alignment(center)]

# Etiquette

🎥 🎤

---

# Refresher

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

# Function == reusable code

Recipe, digestion

---

# Scope is what we can reach where

Rooms or floors of a building

---

# Scope: you can only reach up

---

# Let's play a game called "what do you see"

- Answer one thing
- All answers allowed
- Except: "I don't know"
- Except: answer already given

---

```javascript
// Declara visitor counter
let visitors = 0

// Create visitor incrementor
function trackVisitor() {

    visitors += 1

}

// Track a few visitors
trackVisitor()
trackVisitor()
trackVisitor()
trackVisitor()

// Log out the result
console.log( 'Visitor count :', visitors )
```

---

```javascript
// Declara visitor counter
let visitors = 0

// Create visitor incrementor
function trackVisitor( amount ) {

    visitors += amount

}

// Track a few visitors
trackVisitor( 5 )
trackVisitor( 2 )
trackVisitor( 6 )
trackVisitor( 1 )

// Log out the result
console.log( 'Visitor count :', visitors )
```

---

```javascript
// Wages for employees in Euros
const wagePerVisit = 50

// Create visitor tracker
function trackVisitor( visitor, visits ) {

    if( visitor.role == 'employee' ) {
        visitor.wages += ( visits * wagePerVisit )
    } else {
        visitor.bill += ( visits * wagePerVisit * 2 )
    }

}

// People
const derpina = { role: 'employee', wages: 0 }
const derp = { bill: 0 }

// Track a few visitors
trackVisitor( derpina, 2 )
trackVisitor( derp, 5 )
trackVisitor( derpina 4 )
trackVisitor( derp 2 )

// Log out the result
console.log( 'Derpina result: ', derpina )
console.log( 'Derp result: ', derp )
```

---

```javascript
// User generator function
const generator = function( name='John Doe' ) {

    // Make user object
    const user = {}

    // Generate user properties
    user.id = Math.random()
    user.createdAt = Date.now()
    user.name = name

    // Create speaker function
    user.speak = words => console.log( words )

    // Log user
    console.log( 'Created user: ', user )

    // Return the user for use in other places
    return user

}

// Make some actors
const user = generator( 'Jeff' )
const admin = generator( 'Jeffina' )
const robot = generator( 'Marvin' )

// Make actors speak
user.speak( 'I am alive' )
admin.speak( 'Me too' )
robot.speak( 'Me too! I think. existentialcrisis.exe' )

```

---

```javascript
// User generator function
const generator = function( name='John Doe' ) {
    // same as previous
    // properties id, createdAt, name, speak
    // returns typeof user == 'object'
}

// Make some actors
const user = generator( 'Jeff' )
const admin = generator( 'Jeffina' )
const robot = generator( 'Marvin' )

// Modify robot to be more robot-esque
robot.speak = words => console.log( words.toUpperCase() )

```

---

```javascript
// ///////////////////////////////
// Copyright: Skynet Inc
// ///////////////////////////////

// User generator function
const generateRobot = function( uid ) {

    // Make user object
    const bot = {}

    // Generate user properties
    bot.id = uid || Math.random()
    bot.createdAt = Date.now()

    // Create speaker function
    bot.speak = words => console.log( `Bot ${ bot.id } speech output `, words )

    // Return the bot for use in other places
    return bot

}

// Track bots by type
const generics = []
const custom = []

// Create bots
for (let i = 0; i < 10; i++) {
    const newBot = generateRobot()
    generics.push( newBot )
}
custom.push( generateRobot( 'bumblebee' ) )
custom.push( generateRobot( 'marvin' ) )

// Let bots speak
custom[ 0 ].speak( 'I am a custom bot, so I am very cool' )
generics[ 5 ].speak( 'Instructions unclear' )

```

---

# Prototype == blueprint

Every component in `js` has a **prototype**, which is like a blueprint.

---

# A method is an object property that is a function

---

# Method examples

```
Date.now()
Math.random()
string.toUpperCase()
```

---

# How to read MDN

---

# For next time:

Chapter 6 & 7, hand-in of `hogeschoolnovi/frontend-javascript-intermediate-functions` on *wednesday* on Teams.
