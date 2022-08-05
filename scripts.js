// document.getElementById('count').innerText = 5
// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch
// let myAge = 34

// console.log(myAge)

/* ************************************************* */

// let myAge = 34
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

/* ************************************************* */

// let count = 5
// count = count + 1
// console.log(count)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

/* ************************************************* */

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById('count-el')
let welcomeEl = document.getElementById('welcome-el')
let saveEl = document.getElementById('save-el')

let count = 0
let name = 'Mike'
let greeting = 'Welcome to the show, '

function increment() {
  count += 1
  countEl.innerText = count
}

// Create a function, save() which logs out the count when its called

function save() {
  let recordProgress = (count + ' - ')
  saveEl.innerText += recordProgress
  console.log(count)
}

function renderMessage() {
  let message = (greeting + name)
  welcomeEl.innerText = message
}

increment()
save()
renderMessage()