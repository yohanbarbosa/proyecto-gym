const form = document.getElementById('user-profile-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const gender = document.getElementById('gender').value;

  // Validar datos 
  
  if (isNaN(age) || age <= 0) {
    alert('Edad inválida.');
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    alert('Peso inválido.');
    return;
  }

  if (isNaN(height) || height <= 0) {
    alert('Altura inválida.');
    return;
  }
  

  // Almacenar la información del perfil en el almacenamiento local
  localStorage.setItem('age', age);
  localStorage.setItem('weight', weight);
  localStorage.setItem('height', height);
  localStorage.setItem('gender', gender);

  // Redirigir a la página principal o mostrar un mensaje de éxito
  alert('¡Perfil guardado correctamente!');
  //window.location.href = 'index.html'; // Redirigir a la página principal
});