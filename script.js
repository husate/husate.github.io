const button = document.querySelector('button');
const askNameButton = document.querySelector('#ask button');
const header = document.querySelector('#header1');
let clicked = false;
button.onclick = function () {
  if (!clicked){
  button.style.backgroundColor = 'red';
  button.textContent = 'You clicked me!';
  clicked = true;
  }
  else if (clicked){
  button.style.backgroundColor = 'green';
  button.textContent = 'this is a button';
  clicked = false;
  }
}

askNameButton.onclick = function () {
  let name = prompt("What is your name?");
  header.textContent = `Hello, ${name}!`;
}
