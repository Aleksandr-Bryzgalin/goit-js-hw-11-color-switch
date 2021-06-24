import colors from './colors.js';

const INTERVALTIME = 1000;
let intervalId = null;
let isActive = false;

const refs = {
  startBtnRef: document.querySelector('[data-action="start"]'),
  stopBtnRef: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
}

refs.startBtnRef.addEventListener('click', onStartChangeBodyColor)
refs.stopBtnRef.addEventListener('click', onStopChangeBodyColor)

function onStartChangeBodyColor() {
  if (!isActive) {
    isActive = true;
    intervalId = setInterval(() => {      
      refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
      console.log('HLEB Start')
    }, INTERVALTIME)
  }  
};

function onStopChangeBodyColor() {
  clearInterval(intervalId)
  isActive = false;
  console.log('CLICK STOP');
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};