// Obtén referencias a los botones
var boton1 = document.getElementById("bHome");
var boton2 = document.getElementById("bSonreMi");
var boton3 = document.getElementById("bTecnologias");
var boton4 = document.getElementById("bProyectos");
var boton5 = document.getElementById("bContacto");
var boton6 = document.getElementById("bSobreMi2");
var boton7 = document.getElementById("bCalculadora");
var boton8 = document.getElementById("bFacturador");
var boton9 = document.getElementById("bAppChat");


// Redirecciones internas (GitHub Pages)
boton1.addEventListener("click", function () {
    window.location.href = "index.html";
});

boton2.addEventListener("click", function () {
    window.location.href = "sobreMi.html";
});

boton3.addEventListener("click", function () {
    window.location.href = "Habilidades.html";
});

boton4.addEventListener("click", function () {
    window.location.href = "Proyectos.html";
});

boton5.addEventListener("click", function () {
    window.location.href = "Contacto.html";
});

boton6.addEventListener("click", function () {
    window.location.href = "sobreMi.html";
});

// Redirecciones externas (están bien así)
boton7.addEventListener("click", function () {
    window.location.href = "https://github.com/Eliane97/Android-Calculadora.git";
});

boton8.addEventListener("click", function () {
    window.location.href = "https://github.com/Eliane97/Facturador.git";
});

boton9.addEventListener("click", function () {
    window.location.href = "https://github.com/PolNun/lpet_android.git";
});
