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
	var secondSlider = document.getElementById("secondSlider");
	var minSlider = document.getElementById("minSlider");
	var hourSlider = document.getElementById("hourSlider");
	var crossFader = document.getElementById("crossFader");
	var amLight = document.getElementById("amLight");
	var pmLight = document.getElementById("pmLight");
	
	//console.log("start");
	
	// DIGITAL CLOCK /////
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
	


	// ANALOG CLOCK (KNOBS) ////
	//rotation for the seconds
	handRotation = currentSeconds*6+currentTime.getMilliseconds()/999*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  secondsHand.setAttribute('transform', 'rotate('+handRotation+', 680.17,244.48)');



//rotation for the minutes
  handRotation = currentMinutes*6+currentTime.getSeconds()/59*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  minsHand.setAttribute('transform', 'rotate('+handRotation+', 462.46,248.13)');



//rotation for the hours
  handRotation = currentHours*30+currentTime.getMinutes()/59*6; //adds 6 degrees to the rotation
  if (handRotation > 359)
    {
      handRotation = 0;
    }

  hoursHand.setAttribute('transform', 'rotate('+handRotation+', 220.52,247.76)');


	// SLIDERS ///

	//SECONDS SLIDER CODE
	//var shAttr = secSliderHeight.getAttribute('height');
	var shBB = secSliderHeight.getBBox();
	
	//var sh = parseFloat(shAttr);
	var yOffset = (1-currentSeconds/60)*shBB.height;//-secondSlider.getBBox().height/2;
	var transformTxt = 'translate(0,'+yOffset+')';
	secondSlider.setAttribute('transform', transformTxt);
	
	


	//MINUTES SLIDER CODE
	//var shAttr = secSliderHeight.getAttribute('height');
	var mhBB = minSliderHeight.getBBox();
	
	//var sh = parseFloat(shAttr);
	var yOffset = (1-currentMinutes/60)*mhBB.height;
	var transformTxt = 'translate(0,'+yOffset+')';
	minSlider.setAttribute('transform', transformTxt);
	



	//HOURS SLIDER CODE
	//var shAttr = secSliderHeight.getAttribute('height');
	var hhBB = hourSliderHeight.getBBox();
	
	//var sh = parseFloat(shAttr);
	var yOffset = (1-currentHours/12)*hhBB.height;
	var transformTxt = 'translate(0,'+yOffset+')';
	hourSlider.setAttribute('transform', transformTxt);



	//AM - PM SLIDER CODE
	var cbhBB = crossBarWidth.getBBox();
	var xOffset = (currentTime.getHours()/24)*cbhBB.width;

	if (currentTime.getHours() <= 12)// && currentTime.getHours() > 0) 
	{
	   xOffset = (currentHours/12)*cbhBB.width;
	}
	else
	{
	   var rch = 24-currentTime.getHours();
	   xOffset = (rch/12)*cbhBB.width;
	}

	if (currentTime.getHours() == 0) 
		{
			var bch = currentTime.getHours();
			xOffset = (bch/12)*cbhBB.width;
		}

	var transformTxt = 'translate('+xOffset+',0)';
	crossFader.setAttribute('transform', transformTxt);


	if (currentTime.getHours() >= 12) 
		{
			pmLight.style.opacity = 1;
			amLight.style.opacity = 0.2;
		}
	else
		{
			pmLight.style.opacity = 0.2;
			amLight.style.opacity = 1;
		}


}

window.addEventListener('load', function(){
	setInterval(updateClock, 10);
});





