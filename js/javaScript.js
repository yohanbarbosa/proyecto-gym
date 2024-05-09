

//################################################ LOGIN ##################################################################################

const wrapper  = document.querySelector('.wrapper');
const btn_activado  = document.getElementById('btn_activar');
const iconclose = document.querySelector('.icon_close');


    btn_activado.addEventListener('click',()=> {
    
        wrapper.classList.add('active_btn');
      
    });

    iconclose.addEventListener('click',()=> {
        wrapper.classList.remove('active_btn');
        wrapper.classList.remove('active');
    });

    //############################################### VAlIDACIONES ##########################################################


    const form = document.querySelector('.form_login');
    const mensaje = document.querySelector('.mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let email = document.getElementById('email');
        let password = document.getElementById('password');

        if(email.value == '' || password == ''){
            mensaje.innerHTML = "debe ingresar los datos";
        }else{
            mensaje.innerHTML = `bienvenido ${email.value}` ;
            email.value = '';
            password.value = '';
            wrapper.classList.remove('active_btn');
            mensaje.classList.add('mensaje_activo');
        }

        setTimeout(function() {
            mensaje.classList.remove('mensaje_activo');
        }, 2000);
    });

    

    const formLogin = document.querySelector('.form_registro');
    
    formLogin.addEventListener('submit',function(event){
        event.preventDefault();
        let name = document.getElementById('name');
        let email = document.getElementById('email_login');
        let password = document.getElementById('password_login');
        email.value = '';
        password.value = '';
        
    });


    
    
    const storedData = localStorage.getItem('userProfiles');
    let usuarios = [];
    
    if (storedData) {
      usuarios = JSON.parse(storedData);
    }
    
    const formulario = document.getElementById('user-profile-form');
    formulario.addEventListener('submit', (evento) => {
      evento.preventDefault();
    
      const datos_pagina = document.getElementById('btn').value;
    
      if (datos_pagina === "perfil") {
        const nombre = document.getElementById('name').value.trim();
        const edad = parseInt(document.getElementById('age').value);
        const peso = parseFloat(document.getElementById('weight').value);
        const altura = parseFloat(document.getElementById('height').value);
        const género = document.getElementById('gender').value;
    
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
          peso: peso.toFixed(2),
          altura: altura.toFixed(2),
          género: género,
        
        };
    
        const usuarioExistente = usuarios.find(usuario => usuario.nombre === perfil.nombre);
        if (usuarioExistente) {
          alert("El perfil ya existe");
          return;
        }
    
        usuarios.push(perfil);
        localStorage.setItem('userProfiles', JSON.stringify(usuarios));
        window.location.href = 'objetivo.html';
      } else if (datos_pagina === "objetivo") {
        const opcion_objetivo = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            opcion_objetivo.push(checkbox.id);
          }
        });
    
        if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
          usuarios[usuarios.length - 1].objetivo = opcion_objetivo;
        }
    
        localStorage.setItem('userProfiles', JSON.stringify(usuarios));
        window.location.href = 'lugarentrenamiento.html';
      } else if (datos_pagina === "lugar") {
        const opcion_lugar = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
        checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
            opcion_lugar.push(checkbox.id);
          }
        });
    
        if (usuarios[usuarios.length - 1] && typeof usuarios[usuarios.length - 1] === 'object') {
          usuarios[usuarios.length - 1].lugar = opcion_lugar;
        }
    
        localStorage.setItem('userProfiles', JSON.stringify(usuarios));
        console.log(usuarios);
      }
    });
    