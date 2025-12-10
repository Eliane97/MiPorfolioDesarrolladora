// Botones
var boton1 = document.getElementById("bHome");
var boton2 = document.getElementById("bSonreMi");
var boton3 = document.getElementById("bTecnologias");
var boton4 = document.getElementById("bProyectos");
var boton5 = document.getElementById("bContacto");
var boton6 = document.getElementById("bSobreMi2");

// ⚠️ IMPORTANTE: cambia ESTA parte por el nombre EXACTO de tu repositorio de GitHub Pages
var baseURL = "https://eliane97.github.io/TU_REPOSITORIO/";

// Redirecciones internas (páginas del portfolio)
boton1.addEventListener("click", () => window.location.href = baseURL + "index.html");
boton2.addEventListener("click", () => window.location.href = baseURL + "sobreMi.html");
boton3.addEventListener("click", () => window.location.href = baseURL + "Habilidades.html");
boton4.addEventListener("click", () => window.location.href = baseURL + "Proyectos.html");
boton5.addEventListener("click", () => window.location.href = baseURL + "Contacto.html");
boton6.addEventListener("click", () => window.location.href = baseURL + "sobreMi.html");

// Si más adelante querés agregar proyectos externos, podés poner links normales:
var boton7 = document.getElementById("bCalculadora");
var boton8 = document.getElementById("bFacturador");
var boton9 = document.getElementById("bAppChat");

if (boton7) boton7.addEventListener("click", () => window.location.href = "https://github.com/Eliane97/Android-Calculadora.git");
if (boton8) boton8.addEventListener("click", () => window.location.href = "https://github.com/Eliane97/Facturador.git");
if (boton9) boton9.addEventListener("click", () => window.location.href = "https://github.com/PolNun/lpet_android.git");
