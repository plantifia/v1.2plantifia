function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

function redirectButton() {
  alert('test')

}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector('html').addEventListener('click', function() {});

let myImage = document.querySelector('img');
  
let myButton = document.getElementById('changeName');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Bienvenue sur plantifia, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  if(myHeading)  myHeading.textContent = 'Bienvenue sur plantifia, ' + storedName;
}
if (myButton) {
  myButton.addEventListener('click', function() {
    setUserName();
  });
} else {
  //sinon
}
