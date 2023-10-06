const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[],|:;<>.?/";

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");


function randomCharacter() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function randomPassword(length) {
  return Array.from({ length }, randomCharacter).join("");
}

function clickPasswords() {
  const generatedPassword1 = randomPassword(20);
  const generatedPassword2 = randomPassword(20);
  password1.textContent = generatedPassword1;
  password2.textContent = generatedPassword2;
}

clickPasswords();
