let button = document.querySelector('button');
let clicked = false;
button.onclick = function () {
  if (clicked == false){
  button.style.backgroundColor = 'red';
  button.textContent = 'You clicked me!';
  }
  else if (clicked == true){
  button.style.backgroundColor = 'green';
  button.textContent = 'this is a button';
  }
}
