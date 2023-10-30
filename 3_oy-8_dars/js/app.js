let password = "1234";
let input = prompt("Parolni kiriting");

let found = false;
let chances = 6;

// while (password !== input) {
//   input = prompt("Topolmadingiz qaytadan Parol kiring");
// }

while (chances) {
  chances--;
  if (password === input) {
    found = true;
  } else {
    input = prompt("Topolmadingiz qaytadan Parolni kiriting");
  }
}
