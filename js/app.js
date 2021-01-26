const canvas = document.getElementById("js-canvas");
canvas.width = 450;
canvas.height = 450;

const ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.lineCap = "round";

let painting = false;

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


// color 선택
let colorsArray = ["black", "white", "#F08364", "#F8C5A2", "#FEE1A2", "#C6DC92", "#87C2E1", "#7D84AA", "#B08CB8"];
const color = document.getElementsByClassName("color");

for(let i=0;i<9;i++){
  Array.from(color)[i].style.backgroundColor = colorsArray[i];
}

function ColorHandler(event){
  Array.from(color).forEach(color => color.classList.remove("active"));
  event.target.classList.add("active");
  ctx.strokeStyle = event.target.style.backgroundColor;
}

Array.from(color).forEach(function(color){
  color.addEventListener("click", ColorHandler);
})
