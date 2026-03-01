const text =
"Selamat menunaikan ibadah Ramadhan.\nSemoga hatimu selalu tenang,\ndan bahagia di setiap langkah.\n\nMaaf untuk semua masa lalu.";

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

function openLetter(){

document.querySelector(".letter").style.opacity=1;

document.getElementById("music").play();

typeWriter();
}