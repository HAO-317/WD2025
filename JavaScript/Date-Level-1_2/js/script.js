
//-----Date-Level-1_2
console.log("%c =====Date-Level-1_2 ======", "color: green");


let now = new Date()

let day = now.getDate()
let month = now.getMonth() + 1
let year = now.getFullYear()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

let endDate = `${day}.${month}.${year}`;

let endTime = `${hours}:${minutes}:${seconds}`;

console.log("Datum:", endDate);
console.log("Uhrzeit:", endTime);


document.getElementById("result").innerHTML =  endTime
document.getElementById("result2").innerHTML = endDate
   
   
