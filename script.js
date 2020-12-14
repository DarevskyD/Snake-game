let container = document.createElement('div');
document.body.appendChild(container);
container.classList.add('container');

let header = document.createElement('header');
container.appendChild(header);
header.classList.add('header');

let headerBox = document.createElement('div');
header.appendChild(headerBox);
headerBox.classList.add('header__box');

let headerTitle = document.createElement('div');
headerBox.appendChild(headerTitle);
headerTitle.classList.add('header__title');
headerTitle.innerText = 'Snake';

let image = document.createElement('img');
headerBox.appendChild(image);
image.classList.add('header__img');
image.src = 'image/snake.png';

let headerScore = document.createElement('div');
header.appendChild(headerScore);
headerScore.classList.add('header__score');

let headerScoreName = document.createElement('div');
headerScore.appendChild(headerScoreName);
headerScoreName.classList.add('header__score-name');
headerScoreName.innerText = 'Score:';

let headerScorePoints = document.createElement('div');
headerScore.appendChild(headerScorePoints);
headerScorePoints.classList.add('header__score-points');
headerScorePoints.innerHTML = '0';

let section = document.createElement('section');
container.appendChild(section);
section.classList.add('field');

for(let i = 0; i < 400; i++) {
  let cell = document.createElement('div');
  section.appendChild(cell);
  cell.classList.add('cell');
}

let cell = document.querySelectorAll('.cell');
let x = 1;
    y = 20;

for(let i = 0; i < cell.length; i++) {
  if(x > 20) {
    x = 1;
    y--;
  }
  cell[i].setAttribute('posX', x);
  cell[i].setAttribute('posY', y);
  x++; 
}

function createSnake() {
  let posX = Math.round(Math.random() * (20-1) + 1);
  let posY = Math.round(Math.random() * (20-1) + 1);
  return [posX, posY]
}

let coordinatesSnake = createSnake();
let snakeHead = [document.querySelector(`[posX='${coordinatesSnake[0]}'][posY='${coordinatesSnake[1]}']`)];
snakeHead[0].classList.add('head');

let mouse;
function createMouse() {
  function addMouse() {
    let posX = Math.round(Math.random() * (20-1) + 1);
    let posY = Math.round(Math.random() * (20-1) + 1);
    return [posX, posY]
  }  

  let coordinatesMouse = addMouse(); 
  mouse = [document.querySelector(`[posX='${coordinatesMouse[0]}'][posY='${coordinatesMouse[1]}']`)];  

  if (mouse.classList.contains('head')) {
    let coordinatesMouse = addMouse(); 
    mouse = [document.querySelector(`[posX='${coordinatesMouse[0]}'][posY='${coordinatesMouse[1]}']`)];    
  }

  mouse.classList.add('mouse');
}

createMouse();
