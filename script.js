const button = document.querySelector('button');
const askDiv = document.querySelector('#ask');
const askNameButton = askDiv.querySelector('button');
const header = document.querySelector('#header1');
let clicked = false;
function button.onclick() {
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

askNameButton.addEventListener("mouseout", () => {
  askNameButton.style.backgroundColor = "#F7D9C4";
});

askNameButton.addEventListener("mouseover", () => {
  askNameButton.style.backgroundColor = "#E2C4AF";
});

askNameButton.onclick = function () {
  let name = prompt("What is your name?");
  header.textContent = `Hello, ${name}!`;
}

