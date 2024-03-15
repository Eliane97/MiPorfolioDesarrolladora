<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Verificar los datos recibidos
    echo "Nombre: " . $name . "<br>";
    echo "Correo electrónico: " . $email . "<br>";
    echo "Mensaje: " . $message . "<br>";

    $to = "tucorreo@example.com";
    $subject = "Mensaje de contacto desde tu sitio web";
    $body = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

    if (mail($to, $subject, $body)) {
        echo "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>

