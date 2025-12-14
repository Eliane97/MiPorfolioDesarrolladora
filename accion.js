console.log("JS cargado correctamente");

// ==========================
// BOTONES DE NAVEGACIÓN
// ==========================
const bHome = document.getElementById("bHome");
const bSonreMi = document.getElementById("bSonreMi");
const bTecnologias = document.getElementById("bTecnologias");
const bProyectos = document.getElementById("bProyectos");
const bContacto = document.getElementById("bContacto");
const bSobreMi2 = document.getElementById("bSobreMi2");

// ==========================
// BOTONES DE PROYECTOS (GitHub)
// ==========================
const bCalculadora = document.getElementById("bCalculadora");
const bFacturador = document.getElementById("bFacturador");
const bAppChat = document.getElementById("bAppChat");

// ==========================
// FUNCIONES
// ==========================

// Navegación interna
function irA(pagina) {
    window.location.href = pagina;
}

// Abrir repositorio en GitHub
function irAGithub(url) {
    window.open(url, "_blank");
}

// ==========================
// EVENTOS NAVEGACIÓN
// ==========================
if (bHome) bHome.onclick = () => irA("index.html");
if (bSonreMi) bSonreMi.onclick = () => irA("sobreMi.html");
if (bTecnologias) bTecnologias.onclick = () => irA("Habilidades.html");
if (bProyectos) bProyectos.onclick = () => irA("Proyectos.html");
if (bContacto) bContacto.onclick = () => irA("Contacto.html");
if (bSobreMi2) bSobreMi2.onclick = () => irA("sobreMi.html");

// ==========================
// EVENTOS PROYECTOS (GitHub)
// ==========================
if (bCalculadora) {
    bCalculadora.onclick = () =>
        irAGithub("https://github.com/Eliane97/Android-Calculadora");
}

if (bFacturador) {
    bFacturador.onclick = () =>
        irAGithub("https://github.com/Eliane97/Facturador");
}

if (bAppChat) {
    bAppChat.onclick = () =>
        irAGithub("https://github.com/PolNun/lpet_chatting");
}
