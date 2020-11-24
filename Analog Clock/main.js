setInterval (setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
 {
     //To get the date
     const currentDate = new Date()
     //To get the seconds
     const secondsRatio = currentDate.getSeconds() / 60
     //to get each minute
     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
     //to get each hour
     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
     //to set the hand of the clock with the seconds, minutes and hours got.
     setRotation(secondHand, secondsRatio)
     setRotation(minuteHand, minutesRatio)
     setRotation(hourHand, hoursRatio)
 }

 function setRotation (element, rotationRatio)
 {
     element.style.setProperty('--rotation', rotationRatio * 360)
 }
 function display_c()
 {
     var refresh = 1000;
     myTime = setTimeout('display_ct()', refresh)
 }
 function display_ct()
 {
     var x = new Date()
     document.getElementById('ct').innerHTML = x;
     display_c();
 }
setClock();
