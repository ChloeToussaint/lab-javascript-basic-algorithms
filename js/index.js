// Iteration 1: Names and Input
const hacker1 = "Paul"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Christophe"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has 4 characters')
}
else if (hacker2.length > hacker1.length) {
    console.log('It seems that the navigator has the longest name, it has 9 characters')
}
else { console.log('Wow, you both have equally long names, XX characters!') }
// Iteration 3: Loops

const driver = 'John';
console.log(driver.toUpperCase());


let result = "";
for (let i = 0; i < driver.length; i++) {
    result += driver[i].toUpperCase() + " ";
    console.log(result)
}

let reverse = "";
for (let i = driver.length - 1; i >= 0; i--) {
    reverse += driver[i];
    console.log(reverse)
}
if (hacker1 > hacker2) { console.log(`The driver's name goes first`) }

else if (hacker2 < hacker1) {
    console.log('Yo, the navigator goes first definitely')
}

else { console.log('What?! You both have the same name?') }
