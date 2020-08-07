'use strict';
console.log('--- loading logic: _');
debugger;

function setDate() {
 
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  let hour = (now.getHours()+countrySelector[key]);
  if(hour>23){
    hour = hour-24;
  }
  timeEl.innerHTML= `${hour}:${mins}:${seconds}`
  setInterval(setDate,1000);
}
setDate();
/* logic functions are pure functions

  NEVER read from the DOM
  NEVER write to the DOM
  NEVER use events
  NEVER use prompt/alert/confirm
  NEVER use variables that are not parameters
  NEVER use variables that are not declared locally

*/
