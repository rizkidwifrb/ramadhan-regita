/* LOVE GENERATOR */
function createLove(){
  const love = document.createElement("div");
  love.classList.add("love");
  love.innerHTML = "🤍";

  love.style.left = Math.random()*100+"vw";
  love.style.fontSize = (15+Math.random()*25)+"px";

  document.body.appendChild(love);

  setTimeout(()=>{
    love.remove();
  },6000);
}

setInterval(createLove,800);


/* SCROLL FADE EFFECT */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight-100){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform="translateY(60px)";
  sec.style.transition="1s";
});