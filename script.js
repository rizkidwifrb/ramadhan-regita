
/* ==========================================
   RAMADHAN CINEMATIC GOD ENGINE
========================================== */

const body = document.body;


/* ==========================================
   SCROLL REVEAL SYSTEM
========================================== */

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}
});
},{threshold:.2});

document.querySelectorAll(".scene").forEach(sec=>{
sec.style.opacity=0;
sec.style.transform="translateY(80px)";
sec.style.transition="1.5s ease";
observer.observe(sec);
});


/* ==========================================
   PARALLAX ENGINE
========================================== */

window.addEventListener("scroll",()=>{

let scrollY = window.scrollY;

const moon=document.getElementById("moon-3d");

moon.style.transform=
`translateY(${scrollY*0.15}px)
 rotate(${scrollY*0.02}deg)`;

document.getElementById("stars-layer")
.style.transform=
`translateY(${scrollY*0.05}px)`;

});


/* ==========================================
   FLOATING LOVE GENERATOR
========================================== */

const loveContainer =
document.getElementById("love-container");

function createLove(){

let love=document.createElement("div");

love.className="love";
love.innerHTML="🤍";

love.style.left=Math.random()*100+"vw";
love.style.fontSize=
(Math.random()*20+10)+"px";

love.style.animationDuration=
(Math.random()*10+8)+"s";

loveContainer.appendChild(love);

setTimeout(()=>{
love.remove();
},15000);

}

setInterval(createLove,600);


/* ==========================================
   ORNAMENT GENERATOR
========================================== */

const ornContainer =
document.getElementById("ornament-container");

for(let i=0;i<25;i++){

let orn=document.createElement("div");

orn.className="ornament";

orn.style.left=
Math.random()*100+"vw";

orn.style.top=
Math.random()*100+"vh";

orn.style.animationDelay=
Math.random()*5+"s";

ornContainer.appendChild(orn);

}


/* ==========================================
   CINEMATIC SCROLL SMOOTH
========================================== */

let currentScroll=0;
let targetScroll=0;

window.addEventListener("scroll",()=>{
targetScroll=window.scrollY;
});

function smoothScroll(){

currentScroll+=
(targetScroll-currentScroll)*0.08;

window.scrollTo(0,currentScroll);

requestAnimationFrame(smoothScroll);
}

smoothScroll();


/* ==========================================
   IMAGE CINEMA HOVER
========================================== */

document.querySelectorAll(
".gallery-grid img"
).forEach(img=>{

img.addEventListener("mousemove",e=>{

let rect=img.getBoundingClientRect();

let x=e.clientX-rect.left;
let y=e.clientY-rect.top;

img.style.transform=
`rotateY(${(x-rect.width/2)/20}deg)
 rotateX(${-(y-rect.height/2)/20}deg)
 scale(1.1)`;

});

img.addEventListener("mouseleave",()=>{
img.style.transform="rotateY(0) rotateX(0)";
});

});


/* ==========================================
   CINEMA LIGHT PARTICLE
========================================== */

const space=document.getElementById("space");

function createParticle(){

let p=document.createElement("div");

p.style.position="absolute";
p.style.width="2px";
p.style.height="2px";
p.style.background="white";
p.style.left=Math.random()*100+"vw";
p.style.top="100vh";
p.style.opacity=Math.random();

p.style.animation=
"particleRise 10s linear";

space.appendChild(p);

setTimeout(()=>{
p.remove();
},10000);

}

setInterval(createParticle,200);


/* ==========================================
   AUTO FADE MUSIC (optional)
========================================== */

let audio=document.querySelector("audio");

if(audio){

audio.volume=0;

window.addEventListener("scroll",()=>{

if(window.scrollY>200){
fadeAudio(audio,0.5);
}

});

}

function fadeAudio(audio,target){

let fade=setInterval(()=>{

if(audio.volume<target)
audio.volume+=0.01;
else clearInterval(fade);

},200);

}


/* ==========================================
   FINAL CINEMA END GLOW
========================================== */

window.addEventListener("scroll",()=>{

let end=document.querySelector(".ending");

let rect=end.getBoundingClientRect();

if(rect.top<window.innerHeight){

end.style.background=
"radial-gradient(circle,#111,#000)";
}

});


/* ==========================================
   MOBILE TOUCH PARALLAX
========================================== */

window.addEventListener("deviceorientation",e=>{

let moon=document.getElementById("moon-3d");

let tiltX=e.gamma/10;
let tiltY=e.beta/20;

moon.style.transform=
`translate(${tiltX}px,${tiltY}px)`;

});


/* ==========================================
   CINEMA READY LOG 😎
========================================== */

console.log(`
==============================
RAMADHAN CINEMA LOADED
FOR REGITA SEPTIANA ANDINI
==============================
`);
