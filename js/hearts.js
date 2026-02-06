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