function nodeClicked() {
  alert("clicked!!");
}

function submitted() {
  var startTime = document.getElementById("startTimes");
  var startTimeValue = startTime.options[startTime.selectedIndex].value;
  alert(startTimeValue);
  
  
  var endTime = document.getElementById("endTimes");
  var endTime = endTime.options[endTime.selectedIndex].value;
  alert(endTime);
}