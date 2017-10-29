function loadPreview() {
  var img = new Image(500,500); // width, height values are optional params
  img2.setAttribute('style', 'position: relative; left: 150px; top: 250px; z-index: 5');
  img2.setAttribute('src', 'file:///C:/Users/Speci/Desktop/Online%20paint/images/logo2.png');
  img2.setAttribute('id', 'logo2');
  img2.setAttribute('onclick', 'moveToEditor2()');
}
