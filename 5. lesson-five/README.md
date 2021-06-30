# lesson-five

# getting started with reactjs

what are we making
A simple emotion intepretor. I am often confused with the meanings and I keep going to [emojipedia](https://emojipedia.org/). Wanted to make something like for my use with different sets.

For following along, you can pick any set: travel, food, flags, symbols, activity and make your own version of it. Mine is emotion interpretor, yours could be flag interpretor, or food interpretor. Make it yours!

---

# ex01: getting started with reactjs

## challenge

- know your way through ReactJS website
- can you explain..
  - declarative
  - component based
  - learn once, write anywhere in your words?

## understanding

- The best place to get started with ReactJS is the website. The first exercise is thus to explore the docs, know where everything is. How to look into docs if you have any issues.

- Know that React is more about understanding the flow `than syntax`. You can always refer to syntax, but the `concept of how React works` is more important.

- Few tutorials teach you how to think in React and that's why you keep struggling, it's time to pay attention.

---

# ex02: walk through codesandbox

## challenge

- start a react sandbox
- edit app name
- understand index.html
- save
- share your codesandbox
- share your app with end user,
- to put it on your portfolio, use the [output link](https://ncb30.csb.app/)

## understanding

- codesandbox is VSCode in cloud, it's like REPL
- it's easier to share your code like this and collaborate when you're working on small pieces
- used a lot these days for remote interviews too

---

# ex03: walk through react app

## challenge

- what are the files in this sandbox? do you know how they are connected?
- explain how index.html << index.js << app.js << styles.css flow works here.
- what's ReactDOM?

---

# ex04: edit heading

## challenge

- let's make our first change and edit the heading which says codesandbox

## understanding

- this is just like editing HTML, but see that file is not `.html` but `.js`

---

# ex04: getting to know JSX

## challenge

- write your first JSX component
- make a name component and change the variable to see how it changes
- put some style on it, make the font color red
- can you make font color a variable too?

## concepts

- using JSX as template
- simple data
- attributes such as href
- basic styling.
- class vs className in JSX
- style as an object
- Always start component names with a capital letter.
- 📝 docs link: https://reactjs.org/docs/introducing-jsx.html

## code:

```jsx
//App.js

import React from 'react'
import './styles.css'

var headingText = 'welcome'
var color = 'black'
var fontColor = 'red'

export default function App() {
  return (
    <div className='App'>
      <h1 style={{ backgroundColor: color, color: fontColor }}>
        {headingText}
      </h1>
    </div>
  )
}
```

---

# ex05: live exercise

## challenge

- create a JSX with welcome message
  - use h1 for that
  - color should be blue
  - it should take a variable and show welcome `<username>`

## code:

```js
// App.js

import React from 'react'
import './styles.css'

// var userName = "username";
var userName = prompt('Give me you name: ')
var fontColor = 'blue'

export default function App() {
  return (
    <div className='App'>
      <h1>
        welcome <span style={{ color: fontColor }}>{userName}</span>
      </h1>
    </div>
  )
}
```

---

# ex06: console onClick

## challenge

- create a button, say 'Like`.
- put a `liked` message in console when this button is clicked.

## understanding

- onClick is different than DOM method onclick
- we don't need to `addEventListener()` in React

## code:

```js
import React from 'react'
import './styles.css'

export default function App() {
  function likeClickHandler() {
    console.log('clicked!')
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <button onClick={likeClickHandler}> Like Me! </button>
    </div>
  )
}
```

---

# ex07 live exercise: add and console onClick

## challenge

- create a variable, `likeCounter`
- on every time the `Like` button is clicked, increment the counter variable

## understanding

- if you're able to complete this, you have done the entire cycle:` input --> processing --> output` for this mini likeCounter app/component. Only thing is that you're showing output `outside the React app`, let's bring it in.

## code:

```js
import React from 'react'
import './styles.css'

var likeCounter = 0

export default function App() {
  function likeClickHandler() {
    likeCounter = likeCounter + 1
    console.log('clicked!')
    console.log('likeCounter: ', likeCounter)
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <button onClick={likeClickHandler}> Like Me! </button>
    </div>
  )
}
```

---

# ex08: update counter in view

## challenge

- use useState to update the state in React
- show the updated state in console
- now, consume the updated state in the view

## understanding

- array destructuring in ES6 observed
- you need to give an initial value too
- useState is

## code:

```js
import React, { useState } from 'react'
import './styles.css'

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0)

  function likeClickHandler() {
    setLikeCounter(likeCounter + 1) // processing
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <button onClick={likeClickHandler}> Like Me! </button> {likeCounter}
    </div>
  )
}
```

---

# ex09: explain render cycle

## challenge

- Explain to someone how React render cycle works. `view --> event ---> state ---> render()`

---

# ex10: handle data from input element

## challenge

- use an input element and put an `onChange` event
- console the value which user is typing
- update the value using `useState` (even this is consuming in view only)
- now consume this value in view

## understanding

- look at forms section of React doc if you don't remember the syntax.
- remember how we used `.value` property of input elements in vanillJS class? this is the same thing
- I personally like React more, and there are many more like me, because it uses plain JS concepts and has less syntax overhead keeping the overall API to bare minimum.

## code:

```js
import React, { useState } from 'react'
import './styles.css'

export default function App() {
  var [userInput, setUserInput] = useState('')

  function inputChangeHandler(event) {
    setUserInput(event.target.value)
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <input onChange={inputChangeHandler}></input>
      <div>{userInput}</div>
    </div>
  )
}
```

---

# ex11: show meaning

## challenge

- input and output is done, `processing` is pure JavaScript
- create object to put all emoji data at one place
- get data based on key, show that data in view using `useState`
  `if (inputEmoji in emojiDictionary)`

## understanding

- Data structure
- Using the right data structure for needs would help in making access and update faster
- that's the whole idea behind DSA, we'll explore more in levelOne

## code:

```js
import React, { useState } from 'react'
import './styles.css'

const emojiDictionary = {
  '🤓': 'Nerd Face',
  '😌': 'Relieved Face',
  '😪': 'Sleepy Face',
  '🤥': 'Lying Face',
  '😕': 'Confused Face',
  '🥺': 'Pleading Face',
  '😠': 'Angry Face',
}

export default function App() {
  var [meaning, setMeaning] = useState('')

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value]

    if (meaning === undefined) {
      meaning = 'errrrrrrrrr!😖'
    }

    setMeaning(meaning)
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
    </div>
  )
}
```

---

# let's revise

The flow is still same like any other program we have written till now.

- `input` User clicks on an element, or write in input
- `process` In the event handler, you update the state
- `output` In the view, you consume the state and thus show it to user

---

# things to notice

- class --> className
- style --> takes an object instead of ""
- VISER -- View -> Interact -> State in Event handler -> Render

---

# bonus

Make any app you made previously using React. The leap year app, the palindrome app etc.

Only the input/output changes, the processing remains same.

---

# PART TWO: handling list of data.

---

# ex12: put lists in React

## challenge

- show all emojis that we know

## understanding

- map() and index
- callback in map

## code:

```js
import React from 'react'
import './styles.css'

var shoppingList = [
  'milk',
  'eggs',
  'bread',
  'butter',
  'jam',
  'salt',
  'pepper',
  'salami',
  'oregano',
  'chilli',
]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function App() {
  return (
    <div className='App'>
      <h1>Print my Shopping List</h1>
      <ul>
        {shoppingList.map((item) => {
          if ((shoppingList.indexOf(item) + 1) % 2 === 1) {
            return (
              <li key={item}>
                <span style={{ backgroundColor: 'grey' }}>{item}</span>
              </li>
            )
          } else {
            return <li key={item}>{item}</li>
          }
        })}
      </ul>
      <ul></ul>
      <h1>Numbers</h1>
      <ul>
        {numbers.map((item) => {
          if (item % 2 === 1) {
            return (
              <li key={item}>
                <span style={{ backgroundColor: 'grey' }}>{item}</span>
              </li>
            )
          } else {
            return <li key={item}>{item}</li>
          }
        })}
      </ul>
    </div>
  )
}
```

OR

```js
import React from 'react'
import './styles.css'

var shoppingList = [
  'milk',
  'eggs',
  'bread',
  'butter',
  'jam',
  'salt',
  'pepper',
  'salami',
  'oregano',
  'chilli',
]

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return 'white'
    }
    return 'gray'
  }

  return (
    <div className='App'>
      <h1>Print my Shopping List</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li key={item} style={{ backgroundColor: getBg(index) }}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
```

---

# ex13: put a click handler on list item (input)

## challenge

- onClick for any item, it show which item was clicked from the list
- syntax: `onClick={() => emojiClickHandler(emoji)}`

## understanding

- you have one clickHandler for every item in list, make it unique by passing the emoji to the function

---

# ex14: convert an object to array

## challenge

- take the object created and get an array of keys

## understanding

- built in functions are there in JS
- what is being returned is an array of `keys` and not the `values`

## code:

```js
import React, { useState } from 'react'
import './styles.css'

const emojiDictionary = {
  '🤓': 'Nerd Face',
  '😌': 'Relieved Face',
  '😪': 'Sleepy Face',
  '🤥': 'Lying Face',
  '😕': 'Confused Face',
  '🥺': 'Pleading Face',
  '😠': 'Angry Face',
}

var emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
  var [meaning, setMeaning] = useState('')

  function emojiInputHandler(event) {
    // processing
    var meaning = emojiDictionary[event.target.value]

    if (meaning === undefined) {
      meaning = 'errrrrrrrrr!😖'
    }

    setMeaning(meaning) // react call to show output
  }

  function emojiClickHandler(emoji) {
    // processing
    // console.log(emoji);
    var meaning = emojiDictionary[emoji]
    setMeaning(meaning) // react call to show output
  }

  return (
    <div className='App'>
      <h1>emoji-intrepreter</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      {/* Actual output set by React using useState */}

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: '2rem', padding: '0.5rem', cursor: 'pointer' }}
          >
            {emoji}
          </span>
        )
      })}
    </div>
  )
}
```

---

# ex15: set state (processing)

## challenge

- onClick get the `inputEmoji` from the list and set the state again for `setMeaning`

## understanding

- output of `setMeaning` ie `meaning` is already shown in the view. Thus, different actions can lead to same output in an app.

---
# emoji-intrepreter
GitHub Repository - https://github.com/horsemaker/emoji-interpreter

CodeSandBox Link - https://codesandbox.io/s/github/horsemaker/emoji-interpreter

Project Link - https://3tq10.csb.app/

---

# assignment

Make an app similar to this [book recommendation app](https://khjxk.csb.app/).

- List genres of something you're interested in:

  - Music
  - Food
  - Travel
  - TedX Talks

- when user clicks on genre then show a list of items with your ratings for that genre.

# hint

This is same as the app which we did above. When user clicks instead of showing just one meaning, you need to show a list.

---
# assignment-solution

GitHub Repository -

CodeSandbox link - 

Project Link - 

---

# things to explore

- ReactDOM
- React Ink
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
