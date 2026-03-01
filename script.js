let scenes=document.querySelectorAll(".scene");
let index=0;

function show(){
scenes.forEach(s=>s.classList.remove("active"));
scenes[index].classList.add("active");
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
}

/* ======================
   TYPING LETTER
====================== */

const text=`Selamat menunaikan ibadah Ramadhan.

Semoga semua lelahmu diganti tenang,
semua sedihmu diganti bahagia,
dan setiap doa diam-diammu
Allah kabulkan satu per satu.

Terima kasih sudah hadir
di banyak cerita hidupku.`;

let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,35);
}
}
typing();

/* ======================
   AUTO SLIDE FOTO
====================== */

let fotoIndex=1;
const slider=document.getElementById("slider");

setInterval(()=>{
fotoIndex++;
if(fotoIndex>49)fotoIndex=1;
slider.src=`assets/foto (${fotoIndex}).jpg`;
},2500);

/* ======================
   AUTO PLAY MUSIC FIX
====================== */

document.body.addEventListener("click",()=>{
document.getElementById("music").play();
},{once:true});