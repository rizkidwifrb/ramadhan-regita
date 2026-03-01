let scenes=document.querySelectorAll(".scene");
let index=0;

function show(){
scenes.forEach(s=>s.classList.remove("active"));
scenes[index].classList.add("active");
}

function openLetter(){
index=1;
show();
document.getElementById("music").play();
}

function next(){
if(index<scenes.length-1){
index++;
show();
}
}

function prev(){
if(index>0){
index--;
show();
}

/* TYPING */
const text=`Selamat menunaikan ibadah Ramadhan.

Semoga setiap langkahmu
dipenuhi ketenangan.

Jika pernah ada salah,
maafkan aku atas semua masa lalu.

Terima kasih pernah hadir
di cerita hidupku.`;

let i=0;
const el=document.getElementById("typing");

function typing(){
if(i<text.length){
el.innerHTML+=text.charAt(i);
i++;
setTimeout(typing,30);
}
}
typing();

/* FOTO */
let foto=1;
const slider=document.getElementById("slider");

setInterval(()=>{
foto++;
if(foto>49)foto=1;
slider.src=`assets/foto (${foto}).jpg`;
},2500);

/* STAR FIELD */
const canvas=document.getElementById("space");
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
star.y+=0.4;
if(star.y>canvas.height)star.y=0;
});

requestAnimationFrame(animate);
}
animate();