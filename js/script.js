"Use Strict";
const btn = document.querySelector("#generate-btn");
const output = document.querySelector("#generate-pass");
const character = document.querySelector("#characterAmount");
const number = document.querySelector("#numberAmount");

character.addEventListener("input", syncCharacterAmount);
number.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  character.value = value;
  number.value = value;
}

const lowerCase = lowToHigh(65, 90);
const upperCase = lowToHigh(97, 122);
const numbers = lowToHigh(48, 57);
const symbols = lowToHigh(33, 47)
  .concat(lowToHigh(58, 64))
  .concat(lowToHigh(91, 96))
  .concat(lowToHigh(123, 126));

btn.addEventListener("click", (e) => {
  e.preventDefault;
  const charAmount = character.value;
  password = passwordGene(charAmount);
  output.innerText = password;
});

function lowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function passwordGene(length) {
  let password = "";
  let charCodes = lowerCase.concat(upperCase).concat(numbers).concat(symbols);

  // for(let i =0; i < length; i++){
  //   const character = charCodes[Math.floor(Math.random() * charCodes.length)]
  //   password += String.fromCharCode(character)
  // }

  // return password

  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  for (i = 0; i < length; i++) {
    password += String.fromCharCode(charCodes[array[i] % charCodes.length]);
  }

  return password;
}
