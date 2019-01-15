function nodeClicked() {
  alert("clicked!!");
}

function submitted() {
  alert(document.querySelector('select[name="startTime"]:checked').value);
  alert(document.querySelector('select[name="endTime"]:checked').value)
}