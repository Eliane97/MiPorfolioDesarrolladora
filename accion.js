console.log("JS cargado correctamente");

// Obtener botones
const bHome = document.getElementById("bHome");
const bSonreMi = document.getElementById("bSonreMi");
const bTecnologias = document.getElementById("bTecnologias");
const bProyectos = document.getElementById("bProyectos");
const bContacto = document.getElementById("bContacto");
const bSobreMi2 = document.getElementById("bSobreMi2");

// Función universal para navegar
function irA(pagina) {
    window.location.href = pagina;
}

// Asignar eventos a los botones
if (bHome) bHome.onclick = () => irA("index.html");
if (bSonreMi) bSonreMi.onclick = () => irA("sobreMi.html");
if (bTecnologias) bTecnologias.onclick = () => irA("Habilidades.html");
if (bProyectos) bProyectos.onclick = () => irA("Proyectos.html");
if (bContacto) bContacto.onclick = () => irA("Contacto.html");
if (bSobreMi2) bSobreMi2.onclick = () => irA("sobreMi.html");
