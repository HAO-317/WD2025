
//-----Ternary-Operator-2_1
console.log("%c ===== Ternary-Operator-2_1 ======", "color: green");

let zahl
zahl = Number(window.prompt("Bitte geben ein Zahl (kein auch minus) ein!"))

let ergebnis =  zahl > 0 ? "Positive Zahl" : (zahl < 0 ? "Negative Zahl" : "Diese Zahl ist Null")

document.getElementById("result").innerHTML = ergebnis
   
