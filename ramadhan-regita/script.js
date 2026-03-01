/* COUNTDOWN RAMADHAN */

const ramadhan =
new Date("March 1, 2026 00:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();
let gap=ramadhan-now;

let d=Math.floor(gap/(1000*60*60*24));
let h=Math.floor((gap%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((gap%(1000*60*60))/(1000*60));
let s=Math.floor((gap%(1000*60))/1000);

document.getElementById("timer").innerHTML=
`${d} Hari ${h} Jam ${m} Menit ${s} Detik`;

},1000);


/* AUTO LOAD FOTO image (1) - image (49) */

const gallery=document.getElementById("gallery");

for(let i=1;i<=49;i++){

let img=document.createElement("img");
img.src=`assets/image (${i}).jpg`;

gallery.appendChild(img);

}


/* EFEK DOA JATUH */

function light(){

const el=document.createElement("div");
el.className="light";

el.style.left=Math.random()*100+"vw";
el.style.animationDuration=
(Math.random()*3+2)+"s";

document.body.appendChild(el);

setTimeout(()=>el.remove(),5000);

}

setInterval(light,150);