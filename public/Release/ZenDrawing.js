var canvas = document.getElementById("draw");

var context = canvas.getContext("2d");
resize();

function resize() {
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

var pos = { x: 0, y: 0 };

function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; 

  var color = document.getElementById("hex").value;

  context.beginPath(); 

  context.lineWidth = 10; 
  context.lineCap = "round"; 
  context.strokeStyle = color; 

  context.moveTo(pos.x, pos.y); 
  setPosition(e);
  context.lineTo(pos.x, pos.y); 

  context.stroke(); 
}

