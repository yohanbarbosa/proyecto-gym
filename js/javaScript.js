//########################################### CONTADOR ####################################################################################

let valuedisplay = document.querySelectorAll(".numero");
let interval = 1500;


valuedisplay.forEach((valuedisplay) => {
let starvalue = 0;
let endvalue = parseInt(valuedisplay.getAttribute
("data-val"));
let duration = Math.floor(interval / endvalue);
let counter = setInterval(function(){
    starvalue += 1;
    valuedisplay.textContent = starvalue;
    if(starvalue == endvalue){
        clearInterval(counter);
    }
} , duration);


});


//################################################ menu hamburguesa ######################################################
let enlaces_header = document.querySelectorAll(".navegation")[0];
let icon_hamburguer = true;


document.querySelectorAll(".menu")[0].addEventListener("click", function(){
    
    if(icon_hamburguer){
        document.querySelectorAll(".menu")[0].style.color="#f05d07";
        icon_hamburguer = false;

    }else{
        document.querySelectorAll(".menu")[0].style.color="#fff";
        icon_hamburguer = true;
    } 

    enlaces_header.classList.toggle("MenuOpen");

});



//################################################ LOGIN ##################################################################################

const wrapper  = document.querySelector('.wrapper');
const loginlink  = document.querySelector('.login_link');
const resgitrolink  = document.querySelector('.registre_link');
const btnpopup  = document.getElementById('buttonbtn');
const iconclose  = document.querySelector('.icon_close');


resgitrolink.addEventListener('click',()=> {
wrapper.classList.add('active');
wrapper.style.height = "75vh";
});

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
    wrapper.style.height = "70vh";
    });

    btnpopup.addEventListener('click',()=> {
        wrapper.classList.add('active_btn');
        enlaces_header.classList.remove('MenuOpen');
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


    
    
