
//-----Conditionals-Level-2-9

let einkaufswert = window.prompt("Gib Einkaufswert ein:");

einkaufswert = Number(einkaufswert);

let rabatt = 0;
let verkaufspreis = einkaufswert;

if (einkaufswert > 100) {
  rabatt = 0.25; 
} else if (einkaufswert >= 50 && einkaufswert <= 100) {
  rabatt = 0.15; 
}

if (rabatt > 0) {
  verkaufspreis = einkaufswert - (einkaufswert * rabatt);
}

console.log("Einkaufswert: " + einkaufswert + "€");
console.log("Rabatt: " + (rabatt * 100) + "%");
console.log("Verkaufspreis: " + verkaufspreis + "€");
