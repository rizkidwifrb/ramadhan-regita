/* MUSIC AUTOPLAY SAFE */
document.body.addEventListener("click",()=>{
document.getElementById("music").play();
},{once:true});

/* SCROLL REVEAL */
const reveals=document.querySelectorAll(".reveal");

function reveal(){
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
reveal();

/* STARS */
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

let stars=[];
for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
s:Math.random()*2
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{
ctx.fillStyle="white";
ctx.fillRect(star.x,star.y,star.s,star.s);
star.y+=0.2;
if(star.y>canvas.height)star.y=0;
});

requestAnimationFrame(animate);
}
animate();

/* LOVE FALL */
setInterval(()=>{
let love=document.createElement("div");
love.innerHTML="🤍";
love.style.position="fixed";
love.style.left=Math.random()*100+"%";
love.style.top="-20px";
love.style.animation="fall 6s linear";
document.body.appendChild(love);

setTimeout(()=>love.remove(),6000);
},800);

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
to{transform:translateY(110vh);opacity:0;}
}`;
document.head.appendChild(style);