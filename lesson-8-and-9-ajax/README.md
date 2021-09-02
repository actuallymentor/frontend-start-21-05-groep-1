footer: Slides by @actuallymentor
slidenumbers: true
autoscale: true
slide-transition: true
theme: Plain Jane, 3

[.text: alignment(center)]

# APIs & AJAX

Application Programming Interface & Asynchronous Javascript And XML.

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

# API: Application Programming Interface

How code talks to code. In internet world: using we requests to talk to external servers.

Other worlds: hardware, SDKs, blockchains.

---

# Request verbs

| Verb | Function |
| ----- | ----- |
| GET | Retreive data |
| POST | Create data entry |
| PUT | Update or replace data |
| PATCH | Update or modify data |
| DELETE | Delete data |

---

# Verbs are non-binding

---

[.text: alignment(center)]

# GET puts data in query string

`https://www.youtube.com/watch?v=dQw4w9WgXcQ`

---

# Other verbs do not

---

# API web demo: WAQI

---

# Async and promises

---

```javascript
// Define speaking function
function foxSpeaks( words ) {

    console.log( `I say ${ words }` )

}

// Define a Promise
function slothSpeaks( delay, words ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( (  ) => console.log( words ), delay )

    } )

}

// Make fox and sloth speak
// What is log order?
slothSpeaks( 2000, 'What? I say.' )
foxSpeaks( 'what I say' )

```

---

[.column]

```javascript
// This is in speakers.js
// Define speaking function
function foxSpeaks( words ) {

    console.log( `I say ${ words }` )

}

// Define a Promise
function slothSpeaks( delay, words ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( (  ) => {
            console.log( words )
            resolve()
        }, delay )

    } )

}

module.exports {
    fox: foxSpeaks,
    sloth: slothSpeaks
}
```

[.column]

```javascript
const { fox, sloth } = require( './speakers' )

sloth( 2000, 'I am tired' ).then( function() {
    fox( 'I HAD CAFFEINE' )
} ).then( (  ) => {
    fox( 'A LOT OF CAFFEINE' )
} )

```

---

[.column]

```javascript
// This is in speakers.js
// Define speaking function
function foxSpeaks( words ) {

    console.log( `I say ${ words }` )

}

// Define a Promise
function slothSpeaks( delay, words ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( (  ) => {
            console.log( words )
            resolve()
        }, delay )

    } )

}

module.exports {
    fox: foxSpeaks,
    sloth: slothSpeaks
}
```

[.column]

```javascript
const { fox, sloth } = require( './speakers' )

function conversation( ) {
    Promise.all( [
        sloth( 2000, 'hello' ),
        sloth( 3000, 'hel-lo' ),
        sloth( 500, 'hi' )
    ] ).then( () => {
        fox( 'FINALLY 🙄' )
    } )
}

conversation()

```

---

[.column]

```javascript
// This is in speakers.js
// Define speaking function
function foxSpeaks( words ) {

    console.log( `I say ${ words }` )

}

// Define a Promise
function slothSpeaks( delay, words ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( (  ) => {
            console.log( words )
            resolve()
        }, delay )

    } )

}

module.exports {
    fox: foxSpeaks,
    sloth: slothSpeaks
}
```

[.column]

```javascript
const { fox, sloth } = require( './speakers' )

async function conversation( ) {
    await Promise.all( [
        sloth( 2000, 'hello' ),
        sloth( 3000, 'hel-lo' ),
        sloth( 500, 'hi' )
    ] )

    await fox( 'FINALLY 🙄' )
}

conversation()

```

---

[.column]

```javascript
// This is in speakers.js
// Define speaking function
function foxSpeaks( words ) {

    console.log( `I say ${ words }` )

}

// Define a Promise
function slothSpeaks( delay, words ) {

    return new Promise( ( resolve, reject ) => {

        setTimeout( (  ) => {
            console.log( words )
            resolve()
        }, delay )

    } )

}

function wasp() {
    const randomness = Math.random()

    return new Promise( ( resolve, reject ) => {
        if( randomness < 0.5 ) reject( 'I STING YOU INSTEAD' )
        resolve ( 'I leave now' )
    } )
    
}

module.exports {
    fox: foxSpeaks,
    sloth: slothSpeaks
}
```

[.column]

```javascript
const { fox, sloth, wasp } = require( './speakers' )

async function conversation( ) {
    sloth( 3000, 'Hi' ).then( () => {
        return wasp()
    } ).then( reaction => {
        console.log( 'Wasp says', reaction )
    } ).catch( reaction => {
        console.error( 'Wasp was unpredictable: ', reaction )
    } ).finally( function () {
        fox( 'You guys are mega slow' )
    } )
}

conversation()

```

---

[.column]

```javascript
const { fox, sloth, wasp } = require( './speakers' )

async function conversation( ) {
    sloth( 3000, 'Hi' ).then( () => {
        return wasp()
    } ).then( reaction => {
        console.log( 'Wasp says', reaction )
    } ).catch( reaction => {
        console.error( 'Wasp was unpredictable: ', reaction )
    } ).finally( function () {
        fox( 'You guys are mega slow' )
    } )
}

conversation()

```

[.column]

```javascript
const { fox, sloth, wasp } = require( './speakers' )

async function conversation( ) {

    try {
        await sloth( 3000, 'Hi' )
        const reaction = await wasp()
        console.log( 'Wasp says', reaction )
    } catch( reaction ) {
        console.error( 'Wasp was unpredictable: ', reaction )
    } finally {
        fox( 'You guys are mega slow' )
    }

}

conversation()

```


---

[.column]

```javascript
const { fox, sloth, wasp } = require( './speakers' )

async function conversation( ) {

    try {
        await sloth( 3000, 'Hi' )
        const reaction = await wasp()
        console.log( 'Wasp says', reaction )
    } catch( reaction ) {
        console.error( 'Wasp was unpredictable: ', reaction )
    } finally {
        fox( 'You guys are mega slow' )
    }

}

conversation()

```

[.column]

```javascript
const { fox, sloth, wasp } = require( './speakers' )

async function conversation( ) {

    try {
        await sloth( 3000, 'Hi' ).then( f => {

            // This will error
            await Promise.all( [
                fox( 'HURRY UP' ) ,
                fox( 'HURRY UP PLEASE' ) 
            ] )
        })
        const reaction = await wasp()
        console.log( 'Wasp says', reaction )
    } catch( reaction ) {
        console.error( 'Wasp was unpredictable: ', reaction )
    } finally {
        fox( 'You guys are mega slow' )
    }

}

conversation()

```

---

# Axios

---

Axios docs:

```javascript
// GET request
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// POST request
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

---

Fetch docs

```javascript

// GET request
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
```

---

# Huiswerk:

https://github.com/hogeschoolnovi/frontend-country-information

---

# Section 2: live code