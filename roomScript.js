function nodeClicked() {
  alert("clicked!!");
}

function submitted() {
  alert(document.querySelector('input[name="startTime"]:checked').value);
  alert(document.querySelector('input[name="endTime"]:checked').value)
}