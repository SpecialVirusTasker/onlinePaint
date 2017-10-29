function moveMe(event) {
  this.onmousemove = function(){
  var x = event.clientX;
  var y = event.clientY;
  document.getElementById("Keyed").style.right = x + "px";
  document.getElementById("Keyed").style.top = y + "px";
}
}
