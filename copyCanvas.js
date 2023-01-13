function canv() {
  var canvas = document.getElementById("canvas");
  var dataURL = canvas.toDataURL("image/png");
  
  let width = canvas.width ;
  let height = canvas.height;
 

  
  localStorage.setItem("imgdata", dataURL);
  localStorage.setItem("width",width);
  localStorage.setItem("height",height);
  //console.log(dataURL);
  //console.log(width,height);
}
function viewdata() {
  var data = localStorage.getItem("imgdata");
  var height = localStorage.getItem("height");
  var width = localStorage.getItem("width");
  //console.log(data);
  //console.log(height,width);
  var img = new Image;
  img.src = data;

  let canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.canvas.height= height;
  ctx.canvas.width = width;

  
  
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0); // Or at whatever offset you like
  };
  img.src = data;
  localStorage.setItem("cerimg", img); 
}


