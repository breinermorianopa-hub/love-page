let abierto = false;
let particulasActivas = false;

/* 🧹 LIMPIAR EXCESO */
function limpiarExceso(clase, max){
    const elementos = document.querySelectorAll("." + clase);

    if(elementos.length > max){
        elementos[0].remove();
    }
}

/* 🌹 EXPLOSIÓN DE ROSAS */
function crearExplosionRosas(){

    for(let i = 0; i < 60; i++){

        const rosa = document.createElement("div");
        rosa.innerHTML = "🌹";
        rosa.classList.add("rosa");

        rosa.style.left = "50%";
        rosa.style.top = "50%";

        rosa.style.setProperty("--x", Math.random());
        rosa.style.setProperty("--y", Math.random());

        document.body.appendChild(rosa);

        setTimeout(() => rosa.remove(), 3000);
    }
}

/* ✍️ ESCRITURA */
function escribirTexto(elemento, texto, velocidad = 18, callback){

    elemento.innerHTML = "";

    let i = 0;

    const intervalo = setInterval(() => {

        elemento.innerHTML += texto.charAt(i);
        i++;

        if(i >= texto.length){
            clearInterval(intervalo);
            if(callback) callback();
        }

    }, velocidad);
}

/* 💌 CARTA */
const cartaTexto = [
" No recuerdo la fecha exacta en la que comenzaste a inspirarme", 
"pero sí sé que desde hace dos años ocupas un lugar especial en mi corazón.",
"  Desde entonces, cada conversación, cada sonrisa y cada momento compartido",
" han dejado recuerdos que siempre voy a valorar y guardar con cariño.",
" Hoy seguimos escribiendo nuestra historia, y me emociona pensar que vamos",
 " camino a nuestro tercer año, acumulando experiencias, aprendizajes y",
 "momentos que hacen que cada día sea un poco más especial.",
"Gracias por estar en mi vida...",
"❤️ Te quiero ❤️"
];

function mostrarCarta(){

    const carta = document.getElementById("carta");
    const cont = document.getElementById("textoCarta");

    carta.classList.remove("oculta");
    carta.classList.add("mostrar");

    let i = 0;

    function siguiente(){

        if(i >= cartaTexto.length){
            setTimeout(() => mostrarFinal(), 800);
            return;
        }

        const p = document.createElement("p");
        cont.appendChild(p);

        escribirTexto(p, cartaTexto[i], 18, () => {
            setTimeout(siguiente, 500);
        });

        i++;
    }

    siguiente();
}

/* 🌹 FINAL */
function mostrarFinal(){

    const final = document.getElementById("final");
    const cont = document.getElementById("textoFinal");

    final.classList.remove("oculta");
    final.classList.add("mostrar");

    escribirTexto(cont, "Eres una mujer preciosa y increible ❤️", 20);
}

/* 💥 INICIO */
function mostrarSorpresa(){

    if(abierto) return;
    abierto = true;

    const musica = document.getElementById("musica");
    if(musica) musica.play().catch(()=>{});

    document.getElementById("sobre").classList.add("abierto");

    activarModoCine();

    setTimeout(crearExplosionRosas, 1000);
    setTimeout(mostrarCarta, 3000);
}

/* ❤️ CORAZONES */
function crearCorazon(){

    const el = document.createElement("div");
    el.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";

    el.classList.add("corazon");

    el.style.position = "fixed";
    el.style.left = Math.random() * 100 + "vw";
    el.style.bottom = "-20px";
    el.style.fontSize = "24px";
    el.style.pointerEvents = "none";

    document.body.appendChild(el);

    let pos = 0;
    const vel = 2 + Math.random() * 3;

    const intervalo = setInterval(() => {

        pos += vel;
        el.style.bottom = pos + "px";

        if(pos > window.innerHeight){
            clearInterval(intervalo);
            el.remove();
        }

    }, 20);
}

/* 🌠 ESTRELLAS FUGACES */
function crearEstrellaFugaz(){

    const star = document.createElement("div");
    star.classList.add("estrella-fugaz");

    star.style.position = "fixed";
    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);

    let pos = 0;

    const anim = setInterval(() => {

        pos += 12;
        star.style.transform = `translateX(${pos}px) rotate(-20deg)`;

        if(pos > window.innerWidth){
            clearInterval(anim);
            star.remove();
        }

    }, 16);
}

/* 🎬 MODO CINE */
function activarModoCine(){

    document.body.classList.add("cine");

    setTimeout(() => document.body.classList.add("zoom"), 1000);
    setTimeout(() => document.body.classList.add("latido"), 2500);

    if(!particulasActivas){
        particulasActivas = true;

        setInterval(() => {
            crearParticula();
            limpiarExceso("particula", 60);
        }, 250);
    }
}

/* ✨ PARTÍCULAS */
function crearParticula(){

    const p = document.createElement("div");
    p.classList.add("particula");

    p.style.left = Math.random() * 100 + "vw";
    p.style.bottom = "0px";

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 4000);
}

/* 🌫 NIEBLA */
function crearNiebla(){

    if(document.querySelector(".niebla")) return;

    const n = document.createElement("div");
    n.classList.add("niebla");
    document.body.appendChild(n);
}

/* 🌕 LUNA */
function crearLuna(){

    if(document.querySelector(".luna")) return;

    const luna = document.createElement("div");
    luna.classList.add("luna");

    document.body.appendChild(luna);
}

/* INICIO AUTOMÁTICO */
window.addEventListener("load", () => {
    crearNiebla();
    crearLuna();
});

/* 🧹 LIMPIEZA GENERAL */
setInterval(() => {

    document.querySelectorAll(".corazon, .particula, .estrella-fugaz, .rosa")
    .forEach(el => {

        const rect = el.getBoundingClientRect();

        if(rect.top > window.innerHeight + 200){
            el.remove();
        }

    });

}, 5000);

/* 🌠 CONTROL ESTRELLAS */
setInterval(() => {
    if(Math.random() > 0.8){
        crearEstrellaFugaz();
        limpiarExceso("estrella-fugaz", 10);
    }
}, 2000);