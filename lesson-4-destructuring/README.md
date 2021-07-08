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

[.text: alignment(center)]

# Code quality

Code is for humans, not for machines.

---

# Comments

Assume the next person working on this code is a psycho who knows where you live:

- Explain what you are doing
- Explain why you are doing it

---

# Destructuring

Syntaxtic sugar for arrays and objects.

---

# Let's play a game called "what do you see"

- Answer one thing
- All answers allowed
- Except: "I don't know"
- Except: answer already given

---

```javascript
// Create a queue of waiting customers
let customers = [ 'Derp', 'Derpina', 'Jeff', 'Jeffina', 'Robin', 'Robin' ]

// Help the first customer and keep track of the unhelped customer
const firstCustomer = customers[0]
let remainingCustomers = customers.slice( 1, customers.length )
console.log( `Hello ${ firstCustomer }, have you tried turning your device on and off?` )

// Help the second customer and keep track of the unhelped customer
const secondCustomer = remainingCustomers[0]
remainingCustomers = remainingCustomers.slice( 1, customers.length )
console.log( `Hello ${ secondCustomer }, have you tried turning your device on and off?` )

// Log out the remaining customers
console.log( 'The store is closing, list of unhappy customers: ', remainingCustomers )
```

---

```javascript
// Create a queue of waiting customers
const customers = [ 'Derp', 'Derpina', 'Jeff', 'Jeffina', 'Robin', 'Robin' ]

// Grab the first and second customers
const [ firstCustomer, secondCustomer, ...remainingCustomers ] = customers

// Help the customers
console.log( `Hello ${ firstCustomer }, have you tried turning your device on and off?` )
console.log( `Hello ${ secondCustomer }, have you tried turning your device on and off?` )

// Log out the remaining customers
console.log( 'The store is closing, list of unhappy customers: ', remainingCustomers )
```

---

```javascript
// Create a queue of waiting customers
const kassaEen = [ 'Jeffina', 'Robin', 'Robin' ]
const kassaTwee = [ 'Derp', 'Derpina', 'Jeff' ]

// Merge the two arrays
// old code from old developer: kassaEen.concat( kassaTwee )
const customers = [ ...kassaTwee, ...KassaEen ]

// Grab the first and second customers
const [ firstCustomer, secondCustomer, ...remainingCustomers ] = customers

// Help the customers
console.log( `Hello ${ firstCustomer }, have you tried turning your device on and off?` )
console.log( `Hello ${ secondCustomer }, have you tried turning your device on and off?` )

// Log out the remaining customers
console.log( 'The store is closing, list of unhappy customers: ', remainingCustomers )
```

---

```javascript
// Generate some people objects
const people = [
    { name: 'Derp', age: 10 },
    { name: 'Derpina', age: 15 },
    { name: 'Jeff', age: 20 },
    { name: 'Jeffina', age: 11 },
    { name: 'Robin', age: 65 },
    { name: 'Robin', age: 3 },
]

// Make a list of adults
const adults = []
for ( let i = 0; i < people.length; i++ ) {
    if( people[i].age >= 18 ) adults.push( people[i].name )
}

// Log names of adults
console.log( 'The adults are: ', adults )

```

---

```javascript
// Generate some people objects
const people = [
    { name: 'Derp', age: 10 },
    { name: 'Derpina', age: 15 },
    { name: 'Jeff', age: 20 },
    { name: 'Jeffina', age: 11 },
    { name: 'Robin', age: 65 },
    { name: 'Robin', age: 3 },
]

// Make a list of adults
const adults = []
for ( let i = 0; i < people.length; i++ ) {
    const { name, age } = people[i]
    if( age >= 18 ) adults.push( name )
}

// Log names of adults
console.log( 'The adults are: ', adults )

```

---

```javascript
// Generate car data and metadata
const car = { name: 'Tesla', model: '1' }
const carMeta = { serial: Math.random(), milage: 8001 }

// Prepare data for showing to customer
const salesData = {}
salesData.name = car.name
salesData.model = car.model
salesData.serial = carMeta.serial
salesData.milage = carMeta.milage

// Display data to customer
console.log( 'Hello customer! Would you like to buy tis car?', salesData )

```

---

```javascript
// Generate car data and metadata
const car = { name: 'Tesla', model: '1' }
const carMeta = { serial: Math.random(), milage: 8001 }

// Prepare data for showing to customer
const salesData = { ...car, ...carMeta }

// Display data to customer
console.log( 'Hello customer! Would you like to buy tis car?', salesData )

```

---

```javascript
// Grab sales data
const salesData = { serial: Math.random(), milage: 8001, name: 'Tesla', model: '1' }

// Generate meta from sales data
const carName = salesData.name
const carMeta = { serial: salesData.serial, milage: salesData.milage }

// Log out the car meta
console.log( `Car ${ carName } has meta:`, carMeta )

```

---

```javascript
// Grab sales data
const salesData = { serial: Math.random(), milage: 8001, name: 'Tesla', model: '1' }

// Generate meta from sales data
const { name, model, ...carMeta } = salesData

// Log out the car meta
console.log( `Car ${ carName } has meta:`, carMeta )

```
