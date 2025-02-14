
//-----Date-Level-1_2
console.log("%c =====Date-Level-1_2 ======", "color: green");


let date1 = new Date('Thu Jun 20 2222 15:42:38 GMT+0200 (Mitteleuropäische Sommerzeit)');
let date2 = new Date('Wed Feb 24 2123 15:42:38 GMT+0100 (Mitteleuropäische Normalzeit)');
let date3 = new Date('Wed Mar 24 2123 15:42:38 GMT+0100 (Mitteleuropäische Normalzeit)');
let date4 = new Date('Wed Mar 03 2123 15:42:38 GMT+0100 (Mitteleuropäische Normalzeit)');
let date5 = new Date('Thu Jul 20 2023 15:42:38 GMT+0200 (Mitteleuropäische Sommerzeit)');

console.log("1. " + date1.toString());
console.log("2. " + date2.toString());
console.log("3. " + date3.toString());
console.log("4. " + date4.toString());
console.log("5. " + date5.toString());

date5.setDate(date5.getDate() + 30);

console.log("6. " + date5.toString());


document.getElementById('date1').textContent = "1. " + date1.toString();
document.getElementById('date2').textContent = "2. " + date2.toString();
document.getElementById('date3').textContent = "3. " + date3.toString();
document.getElementById('date4').textContent = "4. " + date4.toString();
document.getElementById('date5').textContent = "5. " + date5.toString();
document.getElementById('date6').textContent = "6. " + date5.toString();