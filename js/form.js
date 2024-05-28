

let usuarios = [];

// Inicializar usuarios si ya existe en localStorage
const storedData = localStorage.getItem('userProfiles');
if (storedData) {
  usuarios = JSON.parse(storedData);
}
const formulario = document.getElementById('user-profile-form');


formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const datos_pagina = document.getElementById('btn').value;

  if (datos_pagina == "perfil") {
    // ... código para manejar la página de perfil ...

    const nombre = document.getElementById('name').value.trim().toUpperCase();
    const edad = parseInt(document.getElementById('age').value);
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
    const género = document.getElementById('gender').value;
    //  Validar datos

    if (isNaN(edad) || edad <= 0) {
      alert('Edad inválida.');
      return;
    }

    if (isNaN(peso) || peso <= 0) {
      alert('Peso inválido.');
      return;
    }

    if (isNaN(altura) || altura <= 0) {
      alert('Altura inválida.');
      return;
    }
    const perfil = {
      nombre: nombre,
      edad: edad,
      peso: peso.toFixed(2), // Redondear peso a dos decimales
      altura: altura.toFixed(2), // Redondear altura a dos decimales
      género: género,

    };

    // Verificar si el perfil ya existe en la lista de perfiles
    const usuarioExistente = usuarios.find(usuario => usuario.nombre === perfil.nombre);
    if (usuarioExistente) {
      alert("El perfil ya existe");
      return;
    }

    usuarios.push(perfil);
    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = 'objetivo.html';

  } else if (datos_pagina == "objetivo") {  // ... código para manejar la página de objetivo ...
    
    const opcion_objetivo = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        opcion_objetivo.push(checkbox.id);
      }
    });

    if (opcion_objetivo.length === 0) {
      const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
      const mensaje = document.createElement('p');
      mensaje.classList.add("texto_alerta");
      mensaje.textContent = "Por favor selecione una opción";
      contenedor_alerta.appendChild(mensaje);
      contenedor_alerta.classList.add("activar_alerta");
  
      function ocultarAlerta() {
          contenedor_alerta.classList.remove("activar_alerta");
          mensaje.textContent = "";
      }
  
      const tiempoVisible = 3000; // Por ejemplo, 1000 milisegundos = 1 segundo
      setTimeout(ocultarAlerta, tiempoVisible);
      return
  }
  
    
    // Asegúrate de que el último usuario agregado existe y es un objeto
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].objetivo = opcion_objetivo;
    }

    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = 'grupomuscular.html';

  } else if (datos_pagina == "musculos") {                // ... código para manejar la página de grupo muscular ...


    const opcion_musculos = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        opcion_musculos.push(checkbox.id);
      }
    });

    if (opcion_musculos.length < 2) {
      const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
      const mensaje = document.createElement('p');
      mensaje.classList.add("texto_alerta")
      mensaje.textContent = "Es aconsejable que escoja más de un solo grupo muscular";
      contenedor_alerta.appendChild(mensaje);
      contenedor_alerta.classList.add("activar_alerta");
  
      function ocultarAlerta() {
          contenedor_alerta.classList.remove("activar_alerta");
          contenedor_alerta.removeChild(mensaje);
          body.document.remove(contenedor_alerta);
      }
  
      const tiempoVisible = 5000; // Por ejemplo, 1000 milisegundos = 1 segundo
      setTimeout(ocultarAlerta, tiempoVisible);
      return
  }
  

    // condicion para revisar que el último usuario agregado existe y es un objeto
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].musculos = opcion_musculos;
    }

    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = "experiencia.html";

  } else if (datos_pagina == "experiencia") {                // ... código para manejar la página de experiencia en el gimnasio ...


    const opcion_experiencia = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        opcion_experiencia.push(checkbox.id);
      }
    });

   /* This `if` statement is checking if the array `opcion_experiencia` has a length of 0, which means
   no checkboxes are checked on the page related to the user's gym experience. If the condition is
   met (no checkboxes are checked), it performs the following actions: */
   
   if (opcion_experiencia.length === 0) {
      const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
      const mensaje = document.createElement('p');
      mensaje.classList.add("texto_alerta");
      mensaje.textContent = "Porfavor selecione una opción";
      contenedor_alerta.appendChild(mensaje);
      contenedor_alerta.classList.add("activar_alerta");
  
      function ocultarAlerta() {
          contenedor_alerta.classList.remove("activar_alerta");
          mensaje.textContent = "";
      }
  
      const tiempoVisible = 2000; // Por ejemplo, 1000 milisegundos = 1 segundo
      setTimeout(ocultarAlerta, tiempoVisible);
      return
  }

    // condicion para revisar que el último usuario agregado existe y es un objeto
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].experiencia = opcion_experiencia;
    }

    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = "dias.html";

  } else if (datos_pagina === "dias") {
    const opcion_dias = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        opcion_dias.push(checkbox.id);
      }
    });

  
    if (opcion_dias.length < 2) {
      const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
      const mensaje = document.createElement('p');
      mensaje.classList.add("texto_alerta");
      mensaje.textContent = "Es aconsejable que entrenene minimo dos dias por semana";
      contenedor_alerta.appendChild(mensaje);
      contenedor_alerta.classList.add("activar_alerta");
  
      function ocultarAlerta() {
          contenedor_alerta.classList.remove("activar_alerta");
          mensaje.textContent = "";
      }
  
      const tiempoVisible = 4000; // Por ejemplo, 1000 milisegundos = 1 segundo
      setTimeout(ocultarAlerta, tiempoVisible);
      return
  }
    // Guardar los días seleccionados en el último perfil de usuario
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].dias = opcion_dias;
    }

    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = "rutina.html";
    console.log(usuarios);
  }

});

const cerrar_alerta = document.getElementById('cerrar_alerta');

cerrar_alerta.addEventListener("click", function() {
    const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
    contenedor_alerta.classList.remove("activar_alerta");
    
    const mensaje = contenedor_alerta.querySelector('.texto_alerta');
    mensaje.textContent = "";

    contenedor_alerta.removeChild(mensaje);
});
