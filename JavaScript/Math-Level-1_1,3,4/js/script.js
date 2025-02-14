
//-----Math-Level-1_1
console.log("%c ===== Math-Level-1_1 ======", "color: green");

console.log(Math.PI);
const PI = Math.PI;
const roundedPI = PI.toFixed(2);

console.log(roundedPI);

document.getElementById("math-pi").innerText = "Math.PI: " + PI;

document.getElementById("rounded-pi").innerText = "rounded PI: " + roundedPI;


//-----Math-Level-1_3
console.log("%c ===== Math-Level-1_3 ======", "color: green");


let randomNum = Math.random();

let randomNum1To10 = Math.floor(Math.random() * 10) + 1; 
let randomNum1To100 = Math.floor(Math.random() * 100) + 1; 

document.getElementById("randomNum").innerText = "Zufallszahl zwischen 0 und 1: " + randomNum;
document.getElementById("randomNum1To10").innerText = "Zufallszahl zwischen 1 und 10: " + randomNum1To10;
document.getElementById("randomNum1To100").innerText = "Zufallszahl zwischen 1 und 100: " + randomNum1To100;



//-----Math-Level-1_4
console.log("%c ===== Math-Level-1_4 ======", "color: green");

const zahlen = [399, 10, 186, 45, 9, 171, 491, 128, 24, 288, 56, 444, 217, 111, 187, 89, 270, 485, 481, 179, 290, 14, 292, 250, 463, 189, 434, 184, 124, 443, 119, 23, 453, 305, 68, 477, 58, 90, 347, 147, 64, 259, 131, 153, 29, 116];

const minWert = Math.min(...zahlen);

const maxWert = Math.max(...zahlen);

document.getElementById("minWert").textContent = "Minimun: " + minWert;
document.getElementById("maxWert").textContent = "Maximum: " + maxWert;
