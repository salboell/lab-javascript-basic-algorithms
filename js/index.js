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

//BONUS

const p =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nunc feugiat, iaculis nulla id, auctor neque. Duis maximus elit quis dolor aliquet, nec viverra arcu finibus. Donec ut lacinia tortor, a condimentum ligula. Nunc libero massa, porttitor at mauris sit amet, rhoncus efficitur neque. Fusce sit amet urna risus. Sed faucibus odio lectus, id accumsan justo hendrerit a. Pellentesque non neque elementum, mattis tellus a, laoreet urna. Etiam vehicula, elit in suscipit iaculis, tellus arcu tristique urna, vitae luctus ante felis ac diam. Praesent gravida pellentesque velit, non elementum nibh porta eu. Cras eget erat in dui interdum mollis vel id purus. Pellentesque imperdiet nulla et ligula tincidunt congue. Integer eget volutpat metus. Vivamus non blandit ipsum. Nulla pulvinar scelerisque neque eget egestas. Mauris ullamcorper nisi justo, eu ultricies magna porttitor eget. Sed ullamcorper aliquet ipsum, eu sodales ante faucibus eu. Vestibulum finibus sapien in purus vulputate finibus a nec lacus. In ultricies neque a nisl fringilla, id blandit sapien pulvinar. In hac habitasse platea dictumst. Aliquam eros velit, semper nec sodales ut, egestas semper leo. Aenean viverra ligula at libero viverra, id commodo lacus feugiat. Curabitur sit amet nibh tortor. Suspendisse tincidunt justo ac ultricies volutpat.  Mauris varius porttitor enim, eu blandit risus fermentum sed. In at venenatis turpis. Nulla facilisi. Quisque ultricies laoreet ullamcorper. Ut accumsan justo sapien, quis sagittis nibh iaculis at. Cras commodo dolor ex, vitae maximus felis congue sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim lorem a massa blandit, eget ultrices velit viverra. Pellentesque ultricies dui lorem. Nam egestas libero et mauris ornare pharetra. Integer ultricies finibus vestibulum.'

function wordCounter(srt) {
  const count = srt.split('et').length

  return console.log(count)
}
