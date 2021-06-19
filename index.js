const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const butStart = document.querySelector('button[data-action="start"]')
const butStop = document.querySelector('button[data-action="stop"]')
const body = document.querySelector('body')
let timerId

const tog = function (v) {
    if (0 === v) {
        butStart.disabled = 'true'
        butStop.removeAttribute('disabled');
    }
    if (1 === v) {        
        butStop.disabled = 'true'
        butStart.removeAttribute('disabled');
    }    
}


        
function sayColor() {
         body.style.backgroundColor = colors[
        randomIntegerFromInterval(0, colors.length - 1)]      
    }


butStart.addEventListener('click', () => {
    tog(0); 
    timerId = setInterval(sayColor, 1000);
});

butStop.addEventListener('click', () => {
    tog(1);
    clearInterval(timerId)
});




butStop.disabled = 'true'