function updateClock()
{

var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();
var handRotation = 0; //the degrees the hand is rotated
var secondsHand = document.getElementById("secondsHand");
var minutesHand = document.getElementById("minsHand");
var hoursHand = document.getElementById("hoursHand");

// Convert the hours component to 12-hour format if needed
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

//Convert an hours component of "0" to "12"
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

//Pad the minutes and seconds with leading zeros, if required
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

//Creates a string for the display
var hourTimeString = currentHours;
var minsTimeString = currentMinutes;
var secsTimeString = currentSeconds;

//Update the time display
document.getElementById("hourUnit").firstChild.nodeValue = hourTimeString;
document.getElementById("minuteUnit").firstChild.nodeValue = minsTimeString;
document.getElementById("secondUnit").firstChild.nodeValue = secsTimeString;

//rotation for the seconds
  handRotation = currentSeconds*6+currentTime.getMilliseconds()/1000*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  secondsHand.setAttribute('transform', 'rotate('+handRotation+', 680.17,249.41)');



//rotation for the minutes
  handRotation = currentMinutes*6+currentTime.getSeconds()/59*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  minsHand.setAttribute('transform', 'rotate('+handRotation+', 462.46,253.07)');



//rotation for the hours
  handRotation = currentHours*30+currentTime.getMinutes()/59*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  hoursHand.setAttribute('transform', 'rotate('+handRotation+', 220.52,252.69)');

}

setInterval(updateClock, 20);




