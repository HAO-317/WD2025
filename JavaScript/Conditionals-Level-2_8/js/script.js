
//-----Conditionals-Level-2-8

let username = prompt("Gib Benutzernamen ein:");
let password = prompt("Gib Passwort ein:");

const correctUsername = "admin";
const correctPassword = "secure123";

if (username === correctUsername && password === correctPassword) {
    console.log("Login erfolgreich");
} else if (username !== correctUsername) {
    console.log("Unbekannter User");
} else if (password !== correctPassword) {
    console.log("Falsches Passwort");
}
