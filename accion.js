// Obtén referencias a los botones
var boton1 = document.getElementById("bHome");
var boton2 = document.getElementById("bSonreMi");
var boton3 = document.getElementById("bTecnologias");
var boton4 = document.getElementById("bProyectos");
var boton5 = document.getElementById("bContacto");
var boton6 = document.getElementById("bSobreMi2");


// Agrega eventos click a cada botón
boton1.addEventListener("click", function() {
    // Redirecciona a la primera página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/index.html";
});

boton2.addEventListener("click", function() {
    // Redirecciona a la segunda página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/sobreMi.html";
});

boton3.addEventListener("click", function() {
    // Redirecciona a la tercera página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/Habilidades.html";
});
boton4.addEventListener("click", function() {
    // Redirecciona a la tercera página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/Proyectos.html";
});
boton5.addEventListener("click", function() {
    // Redirecciona a la tercera página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/Contacto.html";
});
boton6.addEventListener("click", function() {
    // Redirecciona a la tercera página en la misma ventana del navegador
    window.location.href = "http://127.0.0.1:5500/sobreMi.html";
});