// ❤️ SURPRISE PAGE – HEART + MUSIC + SLIDESHOW

const btn = document.getElementById("surpriseBtn");
const msg = document.getElementById("loveMsg");
const music = document.getElementById("bgMusic");

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

const slideshow = document.getElementById("slideshow");
const slideImg = document.getElementById("slideImg");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
let slideIndex = 0;

const memories = [
  "images/year1.jpg",
  "images/year2.jpg",
  "images/year3.jpg",
  "images/year4.jpg",
  "images/year5.jpg",
  "images/year6.jpg"
];

function createHeart(x, y){
  return {
    x,
    y,
    size: Math.random()*20 + 10,
    speed: Math.random()*2 + 1,
    alpha: 1
  };
}

btn.addEventListener("click", () => {
  // 💌 show message
  msg.classList.add("show");

  // 🎵 play music (user click – allowed)
  music.currentTime = 0;
  music.play().catch(()=>{});

  // ❤️ hearts
  for(let i=0;i<60;i++){
    hearts.push(createHeart(canvas.width/2, canvas.height/2));
  }

  // 🖼️ slideshow
  slideshow.classList.add("show");

  setInterval(() => {
    slideIndex = (slideIndex + 1) % memories.length;
    slideImg.style.opacity = 0;

    setTimeout(() => {
      slideImg.src = memories[slideIndex];
      slideImg.style.opacity = 1;
    }, 400);
  }, 3000);
});

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  hearts.forEach((h,i)=>{
    ctx.font = `${h.size}px serif`;
    ctx.fillStyle = `rgba(255,0,100,${h.alpha})`;
    ctx.fillText("❤️", h.x, h.y);
    h.y -= h.speed;
    h.alpha -= 0.01;
    if(h.alpha <= 0) hearts.splice(i,1);
  });
  requestAnimationFrame(animate);
}
animate();