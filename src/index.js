import convert from 'time-to-color-converter'; // If you want to use import statement.
// const convert = require('time-to-color-converter'); // If you want to use requre function.

const body = document.getElementsByTagName('body')[0];
const dateDisplay = document.getElementsByClassName('date')[0];
const colorDisplay = document.getElementsByClassName('color')[0];

const startupDate = new Date();

animate();

function animate() {
  requestAnimationFrame(animate);


  // Some static points in time for example
  // const date = new Date(2020, 12 - 1, 22, 6, 0, 0, 0); // winter solstice in 2020
  // const date = new Date(2020, 6 - 1, 22, 6, 0, 0, 0); // summer solstice in 2020
  

  // Start animation from any point of time
  // const startPointInTime = new Date(2020, 1 - 1, 1, 0, 0, 0, 0);
  // Or just from now
  const startPointInTime = new Date();

  // Fast Forward
  const timesFaster = 60 * 60 * 24 / 2; // A day in 2 seconds

  // Fast Forwarded animation from startup
  const date = new Date(startPointInTime.getTime() + (new Date() - startupDate) * timesFaster);


  const { h, s, l } = convert(date, false);
  const colorStrInHls = `hsl(${h}, ${s}%, ${l}%)`;
  body.style.backgroundColor = colorStrInHls;
  dateDisplay.innerHTML = `Date is ${date}`;
  colorDisplay.innerHTML = `Color is #${colorStrInHls}`;
  const darkInHls = 'hsl(0, 0%, 25%)';
  const lightInHls = 'hsl(0, 0%, 75%)';
  if ( l > 50 ) {
    dateDisplay.style.color = darkInHls;
    colorDisplay.style.color = darkInHls;
  } else {
    dateDisplay.style.color = lightInHls;
    colorDisplay.style.color = lightInHls;
  }
}
