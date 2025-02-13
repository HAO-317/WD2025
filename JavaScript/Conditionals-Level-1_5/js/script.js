
//-----Conditionals-Level-1_5

let noten = window.prompt("Gib deine Punktzahl ein:");

punktzahl= Number(noten);


if (punktzahl >= 90 && punktzahl <= 100) {
  console.log("Sehr gut")
} else if (punktzahl >= 75 && punktzahl <= 89) {
  console.log("Gut")
} else if (punktzahl >= 50 && punktzahl <= 74) {
  console.log("Befriedigend")
} else if (punktzahl >= 0 && punktzahl <= 49) {
  console.log("Nicht bestanden")
} else {
  console.log("Ungültige Punktzahl")
}