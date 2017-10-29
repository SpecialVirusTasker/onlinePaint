function sizeMe() {
  document.getElementById('fontSizer').onchange = function(e){
  var keyCode = e.keyCode || e.which;
  var currentSize = document.getElementById("fontSizer").value;
  document.getElementById("Keyed").style.fontSize = currentSize + "px"
}
}
