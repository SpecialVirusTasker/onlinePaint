function changeLogosText() {
  if (document.getElementById('Categories').value === 'Computer & Internet' || document.title === 'Buy') {
  var companyName = document.getElementById('companyName').value;

  var canvas = document.createElement('canvas');
  // Make the first image
  var img = new Image(200,200); // width, height values are optional params
  img.setAttribute('style', 'position: relative; left: 50px; top: 250px;');
  img.setAttribute('src', '/images/logo.png');
  img.setAttribute('id', 'logo');
  img.setAttribute('onclick', 'moveToEditor()');
  // Make the second image
  var img2 = new Image(200,200); // width, height values are optional params
  img2.setAttribute('style', 'position: relative; left: 150px; top: 250px;');
  img2.setAttribute('src', '/images/logo2.png');
  img2.setAttribute('id', 'logo2');
  img2.setAttribute('onclick', 'moveToEditor2()');
  // Make the first textarea for the company name for img1
  var text = document.createElement('P');
  var v = document.createTextNode(companyName);
  text.appendChild(v);
  text.setAttribute('id', 'text1');
  text.setAttribute('style', 'position: relative; left: 240px; top: 140px; font-size: 15px');
  // Make the second textarea for img2
  var text2 = document.createElement('P');
  var v2 = document.createTextNode(companyName);
  text2.appendChild(v2);
  text2.setAttribute('id', 'text2');
  text2.setAttribute('style', 'position: relative; left: 500px; top: 115px; font-size: 15px');

  $(document).ready(function(){
        $("#welcome").animate({height: "75%"});
  });
  document.getElementById("welcome").appendChild(img);
  document.getElementById("welcome").appendChild(img2);
  document.getElementById('welcome').appendChild(text);
  document.getElementById('welcome').appendChild(text2);

}
}
function moveToEditor() {
  try {
  let companyName = document.getElementById('companyName').value;
  var body = document.getElementById('body');
  var welcome = document.getElementById('welcome');
  var welcomeB = document.getElementById('welcomeBackground');
  var image = document.getElementById('logo');
  var imageSrc = image.src;
  var keyed = document.getElementById('Keyed');
  var text = document.getElementById('text1')
  var all = document.getElementById('all');
} catch(err) {
  console.log(err);
}
if(document.title === 'Buy') {
  buy();
}
function buy() {
  var hi = new Image();
  hi.src = imageSrc;
  document.getElementById('body').appendChild(hi);
}
if(document.title === 'Saif\'s logo maker') {
     //width: 500px; height: 500px
  var imageandtext = document.createElement('div');
  body.appendChild(imageandtext);
  imageandtext.setAttribute('class', 'preview');
  // Removes the welcome screen
  body.removeChild(welcome);
  // Removes the welcome background
  var cnt = $("#welcomeBackground").contents();
  $("#welcomeBackground").replaceWith(cnt);
  // Removes the default textarea (Keyed)
  document.getElementById('fatherOfKeyed').removeChild(keyed);
  // Inserts the image into the canvas and set its position. Also remove the clickable thing, and style
  body.appendChild(image);
  image.setAttribute('style', 'position: relative; left: 350px; top: 200px;');
  image.removeAttribute('onclick');
  image.setAttribute('id', 'img1');
  // Insert the text into the canvas and set its style
  body.appendChild(text);
  text.setAttribute('style', 'position: relative; left: 525px; top: 85px; width: 200px;');
  text.style.resize = 'both';
  text.contentEditable = 'true';
  // Change the text's ID to keyed since the text editor follows that ID and class
  text.setAttribute('class', 'texted');
  text.setAttribute('id', 'Keyed');
  text = document.getElementById('Keyed');
  imageandtext.appendChild(text);
  imageandtext.appendChild(image);
}
}
function moveToEditor2() {
  let companyName = document.getElementById('companyName').value;
  var body = document.getElementById('body');
  var welcome = document.getElementById('welcome');
  var welcomeB = document.getElementById('welcomeBackground');
  var image = document.getElementById('logo2');
  var keyed = document.getElementById('Keyed');
  var text = document.getElementById('text2');
  body.appendChild(image);
  body.appendChild(text);
  // Removes the welcome screen
  body.removeChild(welcome);
  // Removes the welcome background
  var cnt = $("#welcomeBackground").contents();
  $("#welcomeBackground").replaceWith(cnt);
  // Removes the default textarea (Keyed)
  document.getElementById('fatherOfKeyed').removeChild(keyed);
  // Inserts the image into the canvas and set its position
  body.appendChild(image);
  image.setAttribute('style', 'position: relative; left: 350px; top: 200px;');
  // Insert the text into the canvas and set its style
  body.appendChild(text);
  text.setAttribute('style', 'position: relative; left: 525px; top: 85px; width: 200px;');
  text.contentEditable = 'true';
  // Change the text's ID to keyed since the text editor follows that ID and class
  text.setAttribute('class', 'texted');
  text.setAttribute('id', 'Keyed');
  text = document.getElementById('Keyed');
}
