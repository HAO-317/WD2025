
//-----Ternary-Operator-1_2
console.log("%c ===== Ternary-Operator-1_2 ======", "color: green");

let punktzahl
punktzahl = Number(window.prompt("Bitte geben deine Führerscheinprüfungsnote (von 0-100) ein!"))

let ergebnis = punktzahl >= 50 ? "Deine Führerscheinprüfung ist Bestanden!" : "Deine Führerscheinprüfung ist leider nicht bestanden.";

document.body.innerText = ergebnis;