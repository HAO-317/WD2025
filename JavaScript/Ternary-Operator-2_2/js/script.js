
//-----Ternary-Operator mit Nullish Coalescing 2-2
console.log("%c ===== Ternary-Operator mit Nullish Coalescing2-2 ======", "color: green");


let username = window.prompt("Bitte username ein!"); 

let ergebnis = (username ?? '') === '' ? 'Unbekannt' : username;
console.log(ergebnis); 

document.getElementById("result").innerHTML = "Hello " +  ergebnis 
   
