
//-----Conditionals-Level-3-1

let budget = Number(window.prompt("how many is Budget?"));

let klima = window.prompt("Welches Klima mögst du? (warm/kalt/mild)").toLowerCase();

let abenteuerEntspannung = window.prompt("Abenteuer oder Entspannung?").toLowerCase();

if (budget < 1200) {
  console.log("Bleib lieber in Deutschland und besuche die Berge oder die Ostsee.");
} else {
  if (klima === "warm" && urlaubsart === "abenteuer") {
      console.log("Reise nach Thailand für ein Dschungelabenteuer!");
  } else if (klima === "warm" && urlaubsart === "entspannung") {
      console.log("Reise nach Bali für einen Strandurlaub!");
  } else if (klima === "kalt" && urlaubsart === "abenteuer") {
      console.log("Norwegen: Perfekt für eine Nordlicht-Wanderung!");
  } else if (klima === "kalt" && urlaubsart === "entspannung") {
      console.log("Island: Heiße Quellen und wunderschöne Landschaften!");
  } else if (klima === "mild") {
      console.log("Spanien oder Portugal sind großartige Reiseziele für dich!");
  } else {
      console.log("eingabe nicht korrekt! Gib ein gültiges Klima &gültige Urlaubsart an!");
  }
}