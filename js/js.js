
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

      const datosUsuario = {
        nombre: nombre,
        edad: edad,
        peso: peso.toFixed(2), // Redondear peso a dos decimales
        altura: altura.toFixed(2), // Redondear altura a dos decimales
        género: género
      };

      localStorage.setItem('userProfile', JSON.stringify(datosUsuario));

      alert('¡Perfil guardado correctamente!');
      window.location.href = 'index.html'; // Redirigir a la página principal
    });

    // recuperación y uso del perfil almacenado
    const perfilAlmacenado = localStorage.getItem('userProfile');
    if (perfilAlmacenado) {
      const perfil = JSON.parse(perfilAlmacenado);
      console.log('Perfil recuperado:');
      console.log('Edad:', perfil.edad);
      console.log('Peso:', perfil.peso);
      console.log('Altura:', perfil.altura);
      console.log('Género:', perfil.género);
    }