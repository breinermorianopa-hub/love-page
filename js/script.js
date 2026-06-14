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

    const corazones = [
        "❤️",
        "💖",
        "💘",
        "💕",
        "💞",
        "💗",
        "💓",
        "💝"
    ];

    for(let i = 0; i < 60; i++){

        const rosa = document.createElement("div");

        rosa.innerHTML =
            corazones[Math.floor(Math.random() * corazones.length)];

        rosa.classList.add("rosa");

        rosa.style.left = "50%";
        rosa.style.top = "50%";

        rosa.style.fontSize = (35 + Math.random() * 25) + "px";

        rosa.style.filter =
            "drop-shadow(0 0 10px #ff004c) " +
            "drop-shadow(0 0 20px #ff3366) " +
            "drop-shadow(0 0 30px #ff6699)";

        rosa.style.setProperty("--x", Math.random());
        rosa.style.setProperty("--y", Math.random());

        document.body.appendChild(rosa);

        setTimeout(() => {
            rosa.remove();
        }, 3000);
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

    setTimeout(() => {

        document.getElementById("carta").classList.add("oculta");

        document.getElementById("panelPoemas")
        .classList.remove("oculta");

        mostrarFinal();

    }, 1000);

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

    cont.innerHTML = "";

    escribirTexto(
        cont,
        "Eres una mujer preciosa y increíble ❤️",
        20,
        () => {

            // Mostrar botón cuando termine el mensaje
            document.getElementById("btnRazon")
                .classList.remove("oculta");

            // Mostrar mensaje especial
            document.getElementById("mensajeEspecial")
                .classList.remove("oculta");

        }
    );
}
/* 💥 INICIO */
function mostrarSorpresa(){

    if(abierto) return;
    abierto = true;

    const musica = document.getElementById("musica");
    if(musica) musica.play().catch(()=>{});

    document.getElementById("sobre").classList.add("abierto");

document.querySelector("img").classList.add("encoger");

document.querySelector("h1").classList.add("subir");

    activarModoCine();

    setTimeout(crearExplosionRosas, 1000);
    setTimeout(mostrarCarta, 3000);
}

/* ❤️ CORAZONES */
function crearCorazon(){

    const mensajes = [
        "❤️",
        "🌹",
        "🐻",
        "🐶",
        "🐱",
        "🧸",

        "Hermosa ❤️",
        "Preciosa ❤️",
        "Divina ✨",
        "Maravillosa ✨",
        "Perfecta ❤️",
        "Mi inspiración ❤️",
        "Mi favorita 🌹",
        "Mi felicidad 🌹",
        "Mi princesa 🌹",

        "Eres única ❤️",
        "Eres especial ✨",
        "Te quiero ❤️",
        "Me encantas 🌹",
        "Eres increíble ✨",
        "Mi lugar favorito eres tú ❤️",
        "Tu sonrisa ilumina mis días ☀️",
        "Eres mi inspiración 🌙",
        "Te quiero mucho ❤️",
        "Mi persona favorita 🌹",
        "Siempre tú ❤️",
        "Mi estrella favorita ⭐"
    ];

    const el = document.createElement("div");

    const contenido =
        mensajes[Math.floor(Math.random() * mensajes.length)];

    el.innerHTML = contenido;

    el.classList.add("corazon");

    el.style.position = "fixed";
    el.style.left = Math.random() * 80 + "vw";
    el.style.bottom = "-50px";
    el.style.zIndex = "9999";
    el.style.whiteSpace = "nowrap";

    /* Animales clickeables */
    if(
        contenido === "🐻" ||
        contenido === "🐶" ||
        contenido === "🐱" ||
        contenido === "🧸"
    ){

        el.style.fontSize = "42px";
        el.style.cursor = "pointer";
        el.style.pointerEvents = "auto";

        el.addEventListener("click", () => {

            const mensajesSecretos = [
                "🐻 Dice: Cuídala mucho ❤️",
                "🐶 Dice: Eres maravillosa 🌹",
                "🐱 Dice: Tu sonrisa es hermosa ✨",
                "🧸 Dice: Nunca olvides lo especial que eres ❤️",
                "🐻 Dice: Siempre logra sacarte una sonrisa ❤️",
                "🐶 Dice: Tu felicidad es contagiosa 🌹",
                "🐱 Dice: Eres más bonita de lo que imaginas ✨",
                "🧸 Dice: Mereces todo lo bonito del mundo ❤️"
            ];

            mostrarMensajeMagico(
                mensajesSecretos[
                    Math.floor(Math.random() * mensajesSecretos.length)
                ]
            );

            el.remove();
        });

    }else{

        el.style.fontSize = (18 + Math.random() * 10) + "px";
        el.style.pointerEvents = "none";
    }

    el.style.fontWeight = "bold";
    el.style.color = "white";
    el.style.textShadow = "0 0 10px rgba(255,255,255,0.8)";

    document.body.appendChild(el);

    let pos = -50;
    const vel = 2 + Math.random() * 3;

    const intervalo = setInterval(() => {

        pos += vel;
        el.style.bottom = pos + "px";

       if(pos > window.innerHeight + 500){
    clearInterval(intervalo);
    el.remove();
}
    }, 20);
}

/* Crear cada 2.5 segundos */
setInterval(crearCorazon, 2500);


/* 💌 MENSAJE MÁGICO */
function mostrarMensajeMagico(texto){

    const mensaje = document.createElement("div");

    mensaje.innerHTML = texto;

    mensaje.style.position = "fixed";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";

    mensaje.style.background = "rgba(255,255,255,0.15)";
    mensaje.style.backdropFilter = "blur(15px)";
    mensaje.style.padding = "25px 35px";
    mensaje.style.borderRadius = "20px";

    mensaje.style.color = "white";
    mensaje.style.fontSize = "22px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.textAlign = "center";

    mensaje.style.border = "1px solid rgba(255,255,255,0.3)";
    mensaje.style.boxShadow = "0 0 30px rgba(255,255,255,0.4)";

    mensaje.style.zIndex = "999999";
    mensaje.style.opacity = "0";
    mensaje.style.transition = "all 0.6s ease";

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.style.opacity = "1";
        mensaje.style.transform =
            "translate(-50%, -50%) scale(1.05)";
    }, 50);

    setTimeout(() => {

        mensaje.style.opacity = "0";
        mensaje.style.transform =
            "translate(-50%, -50%) scale(0.9)";

        setTimeout(() => {
            mensaje.remove();
        }, 1000);

    }, 3500);
}

/* Crear cada 2.5 segundos */
setInterval(crearCorazon, 2500);
/* 🎬 MODO CINE */
function activarModoCine(){

    document.body.classList.add("cine");

    setTimeout(() => document.body.classList.add("zoom"), 1000);
    setTimeout(() => document.body.classList.add("latido"), 2500);

    if(!particulasActivas){
        particulasActivas = true;

        setInterval(() => {
    crearParticula();
}, 600);
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

/* 🌠 ESTRELLA FUGAZ */
function crearEstrellaFugaz(){

    const star = document.createElement("div");

    star.classList.add("estrella-fugaz");

    star.style.top =
        Math.random() * 250 + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 1800);
}
/* 🌠 CONTROL ESTRELLAS */
setInterval(() => {

    crearEstrellaFugaz();

    limpiarExceso("estrella-fugaz", 10);

}, 6000);

const poemas = {

    ojos:
`Tus ojos tienen algo especial,
como estrellas que nunca dejan de brillar.
Podría perderme en ellos mil veces,
y aun así volvería a mirarlos una vez más.`,

    encanto:
`Me encanta de ti tu forma de ser sin esfuerzo,
la manera en que haces simple lo complicado.
Tu risa aparece y cambia el ambiente,
y todo a tu alrededor se vuelve iluminado.`,

    carita:
`Tu carita es de esas que se quedan
guardadas en la memoria.
Cada detalle tuyo parece
sacado de una hermosa historia.`,

    voz:
`Tu voz tiene una calma única,
como una canción que nunca cansa.
Escucharte siempre logra
que todo parezca mejor.`,

    personalidad:
`Lo más bonito de ti
no es solo lo que se ve.
Es tu forma de ser,
tu esencia,
y la manera tan especial
en que haces feliz a quienes te rodean.`
};

function mostrarPoema(tipo){

    const poema = document.getElementById("poema");
    const cont = document.getElementById("textoPoema");

    poema.classList.remove("oculta");
    poema.classList.add("mostrar");

    cont.innerHTML = "";

    const p = document.createElement("p");
    cont.appendChild(p);

    escribirTexto(p, poemas[tipo], 20);
}
document.getElementById("oso")
.addEventListener("click",()=>{

    alert("🧸 Te mando un abrazo gigante ❤️");

});
setTimeout(() => {

    const luna = document.querySelector(".luna");

    if(luna){
        luna.addEventListener("click", () => {
            crearExplosionRosas();
        });
    }

},1000);

const cartasSecretas = [

`Si volviera a empezar,
volvería a elegir conocerte.`,

`Hay personas que pasan por la vida,
y hay personas que la hacen más bonita.
Tú eres una de ellas.`,

`Gracias por cada conversación,
cada sonrisa
y cada momento compartido.`,

`A veces no hacen falta grandes cosas,
solo saber que existes.`,

`Dos años después,
sigues siendo alguien muy especial para mí ❤️`

];

function cartaSecreta(){

    document.getElementById("poema")
        .classList.remove("oculta");

    document.getElementById("poema")
        .classList.add("mostrar");

    document.getElementById("textoPoema")
        .innerHTML =
            cartasSecretas[
                Math.floor(Math.random() * cartasSecretas.length)
            ];

    window.scrollTo({
        top: document.getElementById("poema").offsetTop - 50,
        behavior: "smooth"
    });
}
function mostrarRazon(){

    const razones = [
        "Porque tu humor alegra mis días ❤️",
        "Porque siempre logras sorprenderme ✨",
        "Porque contigo todo se siente mejor 🌹",
        "Porque eres una persona increíble ❤️",
        "Porque haces especial lo cotidiano 🌙",
        "Porque me encanta escucharte 💕",
        "Porque eres auténtica ✨",
        "Porque tu felicidad me importa ❤️"
    ];

    const texto = document.getElementById("textoRazon");

    document.getElementById("razon")
        .classList.remove("oculta");

    document.getElementById("razon")
        .classList.add("mostrar");

    escribirTexto(
        texto,
        razones[Math.floor(Math.random() * razones.length)],
        20
    );
}