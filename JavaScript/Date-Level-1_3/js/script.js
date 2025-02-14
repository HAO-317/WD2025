
//-----Date-Level-1_3
console.log("%c =====Date-Level-1_3 ======", "color: green");


let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0); // 1. Januar 1970, 00:00:00 UTC
let date3 = new Date(31556908800); // Ein sehr großes Datum
let date4 = new Date(86400000); // 1 Tag (24 Stunden) in Millisekunden


document.getElementById("date1").innerHTML = date1.toString() + " = Datum 1 (September 2, 2019 09:00:00)";
document.getElementById("date2").innerHTML = date2.toString() + " = Datum 2 (new Date(0))";
document.getElementById("date3").innerHTML = date3.toString() + " = Datum 3 (new Date(31556908800))";
document.getElementById("date4").innerHTML = date4.toString() + " = Datum 4 (new Date(86400000))";


