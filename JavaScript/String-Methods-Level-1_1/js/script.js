
//-------String-Methods-Level-1_1

let firstName = "Mario";
let lastName = "Muller";

console.log( + firstName.length);
console.log( + lastName.length);

let fullName = firstName + " " + lastName;

console.log( + fullName.length);


//-------String-Methods-Level-1_2

const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h")); 


console.log(txt.indexOf("Earth"));  

console.log(txt.indexOf("Moon")); 


//-------String-Methods-Level-1_4

const A = 'Susi is going to codingschool';

console.log(A.slice(0,4)); 

console.log(A.slice(5, 7));  

console.log(A.slice(5)); 

console.log(A.slice(-6)); 

console.log(A.slice(0, 8) + A.slice(-6));  

//-------String-Methods-Level-1_5 (substring()

const text2 = 'Susi is back from codingschool';


const susi = text2.substring(0, 4);
console.log(susi);  


const is = text2.substring(5, 7);
console.log(is); 


const school = text2.substring(24, 33);
console.log(school);  


const susiIsSchool = text2.substring(0, 7) + ' ' + text2.substring(24, 33);
console.log(susiIsSchool); 

//-----String-Methods-Level-1_7 (replace())

const text3 = "Sam is good at codingschool"

let V1 = text3.replace("good", "BAD").replace("codingschool", "School");
console.log(V1);

let V2 = text3.replace("Sam", "Sussi").replace("codingschool", "School");
console.log(V2);

let V3 = text3.replace("codingschool", "Tennis");
console.log(V3);


//-----String-Methods-Level-1_8 (toUpperCase(), toLowerCase())

const text4 = "Sam is good at codingschool"

console.log(text4.replace("codingschool", "SCHOOL").replace("good at", "going to").toUpperCase());
console.log(text4.replace("codingschool", "SCHOOL").replace("good at", "going to").toLowerCase());
console.log(text4.toLowerCase().replace("codingschool", "SCHOOL").replace("good at", "going to").replace("sam", "SAM"));
console.log(text4.replace("good at", "going to").toUpperCase().replace("AM", "am").replace("CODINGSCHOOL", "school"));
console.log(text4.replace("codingschool", "SCHOOL").replace("good at", "going to").toLowerCase())
//-* split - map + slice.join
const result = text4.split(' ') .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
console.log(result)
