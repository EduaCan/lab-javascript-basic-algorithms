console.log("Am I ready?")


// Iteration 1: Names and Input
let hacker1 = "Pacoui";
console.log("The driver's name is " + hacker1);

let hacker2 = "Pacou";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
let masLargo = ""
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    masLargo = hacker1;
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    masLargo = hacker2;
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
    masLargo = hacker2;
}
// Iteration 3: Loops
let spacedName = "";
for (let i = 0; i < hacker2.length; i++) {
    if (i === hacker2.length - 1) {
        spacedName = spacedName + hacker2[i].toUpperCase();
        break;
    }
    spacedName = spacedName + hacker2[i].toUpperCase() + " ";
}
console.log(spacedName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName = reversedName + hacker2[i];
}
console.log(reversedName);


for (let i = 0; i < masLargo.length; i++) {
    if (hacker1[i] < hacker2[i]){
        console.log(`The driver's name goes first.`);
        break;
    } else if (hacker1[i] > hacker2[i]){
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    } else {
        if (hacker1.length === hacker2.length) {
            console.log(`What?! You both have the same name?`);
        } else if (hacker1.length < hacker2.length){
            console.log(`The driver's name goes first.`);
            break;
        } else {
            console.log(`Yo, the navigator goes first definitely.`);
            break;
        }
    }
}

//BONUS 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non eleifend arcu, a facilisis ipsum. Maecenas sit amet risus sed velit luctus egestas aliquam sit amet est. Suspendisse condimentum bibendum ante vitae finibus. Fusce bibendum metus nec sem ornare aliquam. Maecenas iaculis, urna sit amet lacinia molestie, dolor justo viverra elit, ac facilisis lacus ante et massa. Proin cursus aliquam leo eu convallis. Pellentesque tincidunt nisl nec lorem molestie porta. Maecenas blandit nibh nec varius pulvinar. Pellentesque non fringilla erat, eget sodales libero. Ut sagittis leo purus, aliquam mattis lorem aliquet vitae. Aenean sagittis lobortis tellus, et blandit tellus dapibus at. Donec tristique odio ac libero semper rutrum tincidunt varius neque.Pellentesque cursus tortor diam, sed suscipit diam dictum vel. Fusce a ante a est auctor maximus. Ut laoreet nulla libero. Morbi eleifend ipsum lectus, vitae lacinia sem laoreet ac. Suspendisse eros tortor, viverra ac viverra nec, condimentum eu felis. Praesent at erat ipsum. Fusce iaculis fermentum nisi eget egestas.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque varius dui in ipsum accumsan, pretium tempus odio vestibulum. Nullam facilisis purus magna, quis pretium lacus hendrerit venenatis. Duis sem ipsum, rutrum ac sapien at, condimentum varius leo. Sed eu dapibus lectus. Ut ipsum eros, vestibulum nec nulla nec, varius pellentesque velit. Curabitur ut libero sagittis orci elementum auctor nec a purus.";
let wordCounter = 1;

for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === " "){
        wordCounter++;
    }
}

console.log(`Number of words: ${wordCounter}`);

let latinCounter = 0;

for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === " " && lorem[i + 1] === "e" && lorem[i + 2] === "t" && lorem[i + 3] === " " ){
        latinCounter++;
    }
}

console.log(`Number of  Latin words "et": ${latinCounter}`);

//BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!";
let rawPhrase = "";


for (let i = 0; i < phraseToCheck.length; i++) {
     if ((phraseToCheck.charCodeAt(i) > 64 && phraseToCheck.charCodeAt(i) < 91) || (phraseToCheck.charCodeAt(i) > 96 && phraseToCheck.charCodeAt(i) < 123)) {
        rawPhrase = rawPhrase + phraseToCheck[i];
     }
}

rawPhrase = rawPhrase.toLocaleLowerCase();

for (let i = 0; i < rawPhrase.length; i++) {
    if (rawPhrase[i] !== rawPhrase[rawPhrase.length - (i + 1)] ) {
        console.log(`${phraseToCheck} isn't a palindrome.`);
        break;
    }else if (i === rawPhrase.length - (i + 1) && rawPhrase[i] === rawPhrase[rawPhrase.length - (i + 1)]) {
        console.log(`${phraseToCheck} is a palindrome.`);
        break;
    }
}


console.log("rawPhrase: " + rawPhrase);

console.log(phraseToCheck.charCodeAt(0));