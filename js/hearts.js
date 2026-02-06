// ❤️ PHOTO FIRST, QUOTES NEXT – CLEAN FLOW

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("surpriseBtn");
  const msg = document.getElementById("loveMsg");
  const music = document.getElementById("bgMusic");
  const slideshow = document.getElementById("slideshow");
  const slideImg = document.getElementById("slideImg");
  const canvas = document.getElementById("heartCanvas");

  if(!btn) return;

  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const memories = [
    "images/year1.jpg",
    "images/year2.jpg",
    "images/year3.jpg",
    "images/year4.jpg",
    "images/year5.jpg",
    "images/year6.jpg"
  ];

  let hearts = [];
  let slideIndex = 0;
  let started = false;

  btn.onclick = () => {

    if(started) return;
    started = true;

    // 🎵 music
    music?.play().catch(()=>{});

    // ❤️ HEART BLAST
    for(let i=0;i<120;i++){
      hearts.push({
        x: innerWidth/2,
        y: innerHeight/2,
        size: 18 + Math.random()*25,
        speed: 1 + Math.random()*3,
        alpha: 1
      });
    }

    // 🖼️ PHOTO SLIDESHOW – FIRST
    setTimeout(()=>{
      slideshow.classList.add("show");

      setInterval(()=>{
        slideIndex = (slideIndex + 1) % memories.length;
        slideImg.style.opacity = 0;

        setTimeout(()=>{
          slideImg.src = memories[slideIndex];
          slideImg.style.opacity = 1;
        },400);

      },3000);
    },800);

    // 💌 QUOTES – AFTER PHOTO SETTLES
    setTimeout(()=>{
      msg.classList.add("show");
    },2500);
  };

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
});