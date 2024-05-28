const btnSalir = document.getElementsByClassName('icon_salir')[0];

btnSalir.addEventListener("click", function() {
    // Eliminar el JSON almacenado en el localStorage
    localStorage.removeItem('userProfiles');
    window.location.href = "../index.html";
});
