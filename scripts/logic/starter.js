'use strict';
console.log('--- loading logic: _');
debugger;

function setDate() {
 
  const now = new Date();
  let seconds = now.getSeconds();
  if(seconds<10){
    seconds = `0${seconds}`
  };
  let mins = now.getMinutes();
  if(mins<10){
    mins = `0${mins}`
  };
  let hour = (now.getHours()+countrySelector[key]);
  if(hour>23){
    hour = hour-24;
  };
  if(hour<10){
    hour = `0${hour}`
  };
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
