const btn = document.getElementById("surpriseBtn");
const msg = document.getElementById("loveMsg");
const music = document.getElementById("bgMusic");
const slideshow = document.getElementById("slideshow");
const slideImg = document.getElementById("slideImg");
const canvas = document.getElementById("heartCanvas");
if(!btn) return;   // 🔥 IMPORTANT

const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const memories=[
 "images/year1.jpg","images/year2.jpg","images/year3.jpg",
 "images/year4.jpg","images/year5.jpg","images/year6.jpg"
];

let hearts=[],i=0;

btn.onclick=()=>{
 msg.classList.add("show");
 slideshow.classList.add("show");
 music.play().catch(()=>{});

 for(let j=0;j<60;j++){
  hearts.push({x:innerWidth/2,y:innerHeight/2,
   s:20+Math.random()*20,a:1,v:1+Math.random()*2});
 }

 setInterval(()=>{
  i=(i+1)%memories.length;
  slideImg.src=memories[i];
 },3000);
};

function anim(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 hearts.forEach((h,k)=>{
  ctx.font=h.s+"px serif";
  ctx.fillStyle=`rgba(255,0,100,${h.a})`;
  ctx.fillText("❤️",h.x,h.y);
  h.y-=h.v; h.a-=0.01;
  if(h.a<=0) hearts.splice(k,1);
 });
 requestAnimationFrame(anim);
}
anim();