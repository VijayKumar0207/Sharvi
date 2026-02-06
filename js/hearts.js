window.onload=()=>{
  const c=document.createElement("div");
  c.className="hearts";
  document.body.appendChild(c);

  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    c.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },400);
};

// ❤️ SURPRISE PAGE HEART BLAST (ADD AT BOTTOM ONLY)
const btn = document.getElementById("surpriseBtn");
const msg = document.getElementById("loveMsg");
const music = document.getElementById("bgMusic");

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let hearts = [];

function createHeart(x, y){
  return {
    x, y,
    size: Math.random()*20+10,
    speedY: Math.random()*2+1,
    alpha:1
  }
}

btn?.addEventListener("click", () => {
  msg.classList.add("show");
  music.play();

  for(let i=0;i<50;i++){
    hearts.push(createHeart(innerWidth/2, innerHeight/2));
  }
});

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach((h,i)=>{
    ctx.fillStyle = `rgba(255,0,100,${h.alpha})`;
    ctx.font = `${h.size}px serif`;
    ctx.fillText("❤️",h.x,h.y);
    h.y -= h.speedY;
    h.alpha -= 0.01;
    if(h.alpha<=0) hearts.splice(i,1);
  });
  requestAnimationFrame(draw);
}
draw();

// ❤️ MEMORY SLIDESHOW
const slideshow = document.getElementById("slideshow");
const slideImg = document.getElementById("slideImg");

const memories = [
  "images/year1.jpg",
  "images/year2.jpg",
  "images/year3.jpg",
  "images/year4.jpg",
  "images/year5.jpg",
  "images/year6.jpg"
];

let index = 0;

btn?.addEventListener("click", () => {
  slideshow.classList.add("show");

  setInterval(() => {
    index = (index + 1) % memories.length;
    slideImg.style.opacity = 0;

    setTimeout(() => {
      slideImg.src = memories[index];
      slideImg.style.opacity = 1;
    }, 400);
  }, 3000);
});