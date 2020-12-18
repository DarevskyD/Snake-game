
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
  let posX = Math.round(Math.random() * (18-1) + 1);
  let posY = Math.round(Math.random() * (18-1) + 1);
  return [posX, posY];
}

let coordinatesSnake = createSnake();
let snakeHeadBody = [document.querySelector(`[posX='${coordinatesSnake[0]}'][posY='${coordinatesSnake[1]}']`),
document.querySelector(`[posX='${+(coordinatesSnake[0])-1}'][posY='${coordinatesSnake[1]}']`),
document.querySelector(`[posX='${+(coordinatesSnake[0])-2}'][posY='${coordinatesSnake[1]}']`)];

for(let i = 0; i < snakeHeadBody.length; i++) {
  snakeHeadBody[i].classList.add('body-snake');
}
snakeHeadBody[0].classList.add('head-snake');

function createMouse() {  
    let posX = Math.round(Math.random() * (20-1) + 1);
    let posY = Math.round(Math.random() * (20-1) + 1);
    return [posX, posY];  
}

let coordinatesMouse = createMouse(); 
let mouse = document.querySelector(`[posX='${coordinatesMouse[0]}'][posY='${coordinatesMouse[1]}']`);
mouse.classList.add('mouse'); 

if (coordinatesMouse.length === coordinatesSnake.length && coordinatesMouse.every((value, index) => value === coordinatesSnake[index])) {
let coordinatesMouse = createMouse();
mouse = [document.querySelector(`[posX='${coordinatesMouse[0]}'][posY='${coordinatesMouse[1]}']`)];    
}

let movement = 'right';

function moveSnake() {
  
  let snakeMove = [snakeHeadBody[0].getAttribute('posX'), snakeHeadBody[0].getAttribute('posY')];  
  snakeHeadBody[0].classList.remove('head-snake');
  snakeHeadBody[snakeHeadBody.length - 1].classList.remove('body-snake');
  snakeHeadBody.pop(); 
 
  
  if(movement == 'left') {
    if(snakeMove[0] > 1) {
      snakeHeadBody.unshift(document.querySelector(`[posX='${+(snakeMove[0])-1}'][posY='${snakeMove[1]}']`));           
    } else {
      snakeHeadBody.unshift(document.querySelector(`[posX='20'][posY='${snakeMove[1]}']`));     
    }
  } else if(movement == 'right') {
    if(snakeMove[0] < 20) {
      snakeHeadBody.unshift(document.querySelector(`[posX='${+(snakeMove[0])+1}'][posY='${snakeMove[1]}']`));     
    } else {
      snakeHeadBody.unshift(document.querySelector(`[posX='1'][posY='${snakeMove[1]}']`));
    }
  } else if(movement == 'up') {
    if(snakeMove[1] < 20) {
      snakeHeadBody.unshift(document.querySelector(`[posX='${snakeMove[0]}'][posY='${+(snakeMove[1])+1}']`));           
    } else {
      snakeHeadBody.unshift(document.querySelector(`[posX='${snakeMove[0]}'][posY='1']`));      
    }
  } else if(movement == 'down') {
    if(snakeMove[1] > 1) {
      snakeHeadBody.unshift(document.querySelector(`[posX='${snakeMove[0]}'][posY='${+(snakeMove[1])-1}']`));      
    } else {
      snakeHeadBody.unshift(document.querySelector(`[posX='${snakeMove[0]}'][posY='20']`));      
    }
  }

  snakeHeadBody[0].classList.add('head-snake');  

  for(let i = 0; i < snakeHeadBody.length; i++) {
    snakeHeadBody[i].classList.add('body-snake');
  }
}

let snakeInterval = setInterval(moveSnake, 300);

window.addEventListener('keydown', function(evt) {
  let key = evt.keyCode;
  if(key == 37 && movement != 'right') {
    movement = 'left';       
  } else if(key == 38 && movement != 'down') {
    movement = 'up';        
  } else if(key == 39 && movement != 'left') {
    movement = 'right';        
  } else if(key == 40 && movement != 'up') {
    movement = 'down';    
  }
})
