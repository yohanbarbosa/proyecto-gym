

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
    
    // Asegúrate de que el último usuario agregado existe y es un objeto
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].objetivo = opcion_objetivo;
    }
    
    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = 'grupomuscular.html';

  }else if(datos_pagina == "musculos"){                // ... código para manejar la página de grupo muscular ...
    

 const opcion_musculos = [];
 const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
 checkboxes.forEach(checkbox => {
   if (checkbox.checked) {
    opcion_musculos.push(checkbox.id);
   }
 });
 
 // condicion para revisar que el último usuario agregado existe y es un objeto
 if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
   usuarios[usuarios.length - 1].musculos = opcion_musculos;
 }
 
 localStorage.setItem('userProfiles', JSON.stringify(usuarios));
 window.location.href = "experiencia.html";

  }else if(datos_pagina == "experiencia"){                // ... código para manejar la página de experiencia en el gimnasio ...
    

    const opcion_experiencia = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        opcion_experiencia.push(checkbox.id);
      }
    });
    
    // condicion para revisar que el último usuario agregado existe y es un objeto
    if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
      usuarios[usuarios.length - 1].experiencia = opcion_experiencia;
    }
    
    localStorage.setItem('userProfiles', JSON.stringify(usuarios));
    window.location.href = "dias.html";
    
     }else if(datos_pagina === "dias") {
      const opcion_dias = [];
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              opcion_dias.push(checkbox.id);
          }
      });
      
      // Guardar los días seleccionados en el último perfil de usuario
      if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
          usuarios[usuarios.length - 1].dias = opcion_dias;
      }
      
      localStorage.setItem('userProfiles', JSON.stringify(usuarios));
      window.location.href = "rutina.html";
      console.log(usuarios);
  }
     
});

