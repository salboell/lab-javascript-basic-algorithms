// Iteration 1: Names and Input
const hacker1 = 'Sofia'
console.log(`The driver's name is ` + hacker1)

const hacker2 = 'Thor'
console.log(`The navigator's name is ` + hacker2)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has` + hacker1.length + `characters`
  )
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ` +
      hacker2.length +
      `characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ` + hacker1.length + `characters`
  )
}
// Iteration 3: Loops

//3.1
const word1 = []
for (var i = 0; i < hacker1.length; i++) {
  var letter = hacker1.charAt(i).toUpperCase()
  word1.push(letter)
}

console.log(word1.toString())

//3.2
const word2 = []
for (var i = hacker2.length - 1; i >= 0; i--) {
  var letter = hacker2.charAt(i)
  word2.push(letter)
}

console.log(word2.toString())

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}
