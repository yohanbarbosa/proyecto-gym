const formulario = document.getElementById('user-profile-form');

    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const nombre = document.getElementById('name').value.trim();
      const edad = parseInt(document.getElementById('age').value);
      const peso = parseFloat(document.getElementById('weight').value);
      const altura = parseFloat(document.getElementById('height').value);
      const género = document.getElementById('gender').value;

      // Validar datos
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
       // Solicitar confirmación de correo electrónico
  const email = document.getElementById('email').value; // Asumir que tienes un campo de correo electrónico en tu formulario
  const confirmarCorreo = prompt('Confirme su correo electrónico:');
  if (confirmarCorreo !== email) {
    alert('Los correos electrónicos no coinciden. Intente nuevamente.');
    return;
  }

  const datosPerfil = {
    nombre: nombre,
    edad: edad,
    peso: peso.toFixed(2),
    altura: altura.toFixed(2),
    género: género,
    correoElectronico: email
  };

  // Almacenar datos del perfil de usuario en localStorage
localStorage.setItem('userProfile', JSON.stringify(datosPerfil));
// Redirigir a la página de planeación 
window.location.href = 'planeacion.html';
    // recuperación y uso del perfil almacenado
    const perfilAlmacenado = localStorage.getItem('userProfile');
    if (perfilAlmacenado) {
      const perfil = JSON.parse(perfilAlmacenado);
      console.log('Perfil recuperado:');
      console.log('Nombre:', perfil.nombre);
      console.log('Edad:', perfil.edad);
      console.log('Peso:', perfil.peso);
      console.log('Altura:', perfil.altura);
      console.log('Género:', perfil.género);
      console.log('Correo electrónico:', perfil.correoElectronico);
    }})