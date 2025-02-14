
//-----Conditionals-Level-1_6 (switch)
console.log("%c ===== Conditionals-Level-1_6 (switch) ======", "color: green");


let schoolGrade = Math.floor(Math.random() * 10) + 1;


switch (schoolGrade) {
  case 1:
    console.log('Sehr gut');
    break;
  case 2:
    console.log('Gut');
    break;
  case 3:
    console.log('Befriedigend');
    break;
  case 4:
    console.log('Ausreichend');
    break;
  case 5:
    console.log('Mangelhaft');
    break;
  case 6:
    console.log('Ungenügend');
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('Das ist keine gültige Schulnote.');
    break;
  default:
    console.log('Fehler: Ungültige Zahl');
}


//-----Conditionals-Level-1_7 (switch)
console.log("%c ===== Conditionals-Level-1_7 (switch)======", "color: green");

let weekdayAsNumber

let weekdayAsString

weekdayAsNumber = Number(window.prompt("Bitte fügen eine Nummer von 1 bis 7 ein!"))

switch (weekdayAsNumber) {
    case 1:
        weekdayAsString = "Montag";
        break;
    case 2:
        weekdayAsString = "Dienstag";
        break;
    case 3:
        weekdayAsString = "Mittwoch";
        break;
    case 4:
        weekdayAsString = "Donnerstag";
        break;
    case 5:
        weekdayAsString = "Freitag";
        break;
    case 6:
        weekdayAsString = "Samstag";
        break;
    case 7:
        weekdayAsString = "Sonntag";
        break;
    default:
        console.log("Eingaben muss von 1 bis 7");
        break;
}

if (weekdayAsString) {
    console.log(weekdayAsString)
}


//-----Conditionals-Level-1_8 (switch)
console.log("%c ===== Conditionals-Level-1_8 (switch)======", "color: green");


let auswahl = prompt("Wählen Sie ein Getränk: 1 f. Wasser, 2 f. Cola, 3 f. Orangensaft, 4 f. Kaffee, 5 f. Tee");

ausgewahlt = Number(auswahl);

switch (ausgewahlt) {
    case 1:
        console.log("Wasser");
        break;
    case 2:
        console.log("Cola");
        break;
    case 3:
        console.log("Orangensaft");
        break;
    case 4:
        console.log("Kaffee");
        break;
    case 5:
        console.log("Tee");
        break;
    default:
        console.log("Ungültige Auswahl");
        break;
}
