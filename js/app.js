/* ==================================================
  기본값 설정
================================================== */
const canvas = document.getElementById("js-canvas");
canvas.width = 450;
canvas.height = 450;

const ctx = canvas.getContext("2d");
const DEFAULT_COLOR = "black";
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 450, 450);
ctx.strokeStyle = DEFAULT_COLOR;
ctx.fillStyle = DEFAULT_COLOR;
ctx.lineWidth = 2.5;
ctx.lineCap = "round";

let painting = false;
let filling = false;

function StopPainting(event){
  painting = false;
}

function StartPainting(event){
  painting = true;
}

// 캔버스 위에서 마우스가 움직일 때 이를 감지하고,
// 클릭하면 선을 그리고, 클릭이 없으면 x, y 좌표만 갱신하는 메소드
function MouseOnCanvas(event){
  const x = event.offsetX;
  const y = event.offsetY;
  
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

if(canvas){
  canvas.addEventListener("mousemove", MouseOnCanvas);
  canvas.addEventListener("mousedown", StartPainting);
  canvas.addEventListener("mouseup", StopPainting);
  canvas.addEventListener("mouseleave", StopPainting);
}


/* ==================================================
  Color 선택
================================================== */
let colorsArray = ["black", "white", "#F08364", "#F8C5A2", "#FEE1A2", "#C6DC92", "#87C2E1", "#7D84AA", "#B08CB8"];
const color = document.getElementsByClassName("color");

for(let i=0;i<9;i++){
  Array.from(color)[i].style.backgroundColor = colorsArray[i];
}

function ColorHandler(event){
  Array.from(color).forEach(color => color.classList.remove("active"));
  event.target.classList.add("active");
  ctx.strokeStyle = event.target.style.backgroundColor;
  ctx.fillStyle = event.target.style.backgroundColor;
}

Array.from(color).forEach(function(color){
  color.addEventListener("click", ColorHandler);
})


/* ==================================================
  Brush Size 설정. input[type="range"]
================================================== */
const range = document.getElementById("js-range");

function rangeHandler(event){
  ctx.lineWidth = event.target.value;
}

if(range){
  range.addEventListener("input", rangeHandler);
}


/* ==================================================
  paint or fill Mode 설정
================================================== */
const paintOrFill = document.querySelector(".fillBtn");

function paintOrFillHandler(){
  if(filling === true) {
    filling = false;
    paintOrFill.innerText = "FILL";
  } else {
    filling = true;
    paintOrFill.innerText = "PAINT";
  }
}

if(paintOrFill){
  paintOrFill.addEventListener("click", paintOrFillHandler);
}

function fillTheCanvas(){
  if(filling){
    ctx.fillRect(0, 0, 450, 450);
  }
}

if(canvas) {
  canvas.addEventListener("click", fillTheCanvas);
}
