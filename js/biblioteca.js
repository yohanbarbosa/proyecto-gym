const contenedores = document.getElementsByClassName('card');

// Convertir la colección en un array y usar forEach
Array.from(contenedores).forEach(contenedor => {
    contenedor.addEventListener("click", function () {
        const valor = contenedor.getAttribute('value');
        imprimir(valor);
    });
});


function imprimir(valor) {
    const containerProducts = document.getElementsByClassName('container_products')[0];
    const wrapper = document.getElementsByClassName('wrapper')[0];

    containerProducts.innerHTML = "";
    arrayEjercicios = {}
    if (valor == 'pecho') {
        arrayEjercicios = {
            "Ejercicios de pecho": [

                { nombre: "pecho plano con barra libre", img: "../img/biblioteca de ejercicios/pecho plano con barra.webp" },
                { nombre: "pecho inclinado con barra libre", img: "../img/biblioteca de ejercicios/pecho inclinado con barra.webp" },
                { nombre: "pecho declinado con barra", img: "../img/biblioteca de ejercicios/pecho declinado con barra.gif" },
                { nombre: "pecho inclinado con mancuernas", img: "../img/biblioteca de ejercicios/pecho inclinado con mancuernas.gif" },
                { nombre: "pecho inclinado con smith", img: "../img/biblioteca de ejercicios/pecho inclinado con smith.webp" },
                { nombre: "cierres con mancuernas en banco plano", img: "../img/biblioteca de ejercicios/cierre con mancuernas.gif" },
                { nombre: "pecho plano con smith", img: "../img/biblioteca de ejercicios/pecho plano con smith.webp" },
                { nombre: "cierres en polea alta", img: "../img/biblioteca de ejercicios/cruces en polea alta1.jpg" },
                { nombre: "cierres en polea baja", img: "../img/biblioteca de ejercicios/cierre en polea baja.webp" },
                { nombre: "Cierres en polea en banco", img: "../img/biblioteca de ejercicios/cierres en banco.webp" },
                { nombre: "Pecho plano en maquina", img: "../img/biblioteca de ejercicios/pecho.gif" },
                { nombre: "Hammer", img: "../img/biblioteca de ejercicios/hammer.webp" },
            ]
        }
    } else if (valor == 'piernas') {
        arrayEjercicios = {
            "Cuadriceps": [

                { nombre: "sentadilla libre", img: "../img/biblioteca de pierna/sentadilla libre.webp" },
                { nombre: "extensiones", img: "../img/biblioteca de pierna/extensiones.gif" },
                { nombre: "Avanzadas en smith", img: "../img/biblioteca de pierna/avanzadas.gif" },
                { nombre: "Prensa", img: "../img/biblioteca de pierna/prensa.webp" },
                { nombre: "Hacka", img: "../img/biblioteca de pierna/hacka.gif" },
                { nombre: "Sentadilla en smith", img: "../img/biblioteca de pierna/sentadillas-en-máquina-Smith.gif" },
                { nombre: "Bulgara para cuadriceps", img: "../img/biblioteca de pierna/bulgara.gif" },
                { nombre: "Sentadilla en smith", img: "../img/biblioteca de pierna/sentadillas-en-máquina-Smith.gif" },
                { nombre: "Avanzadas libres", img: "../img/biblioteca de pierna/avanzadas libre.webp" }
            ],
            "Femoral": [
                { nombre: "peso muerto con mancuernas", img: "../img/biblioteca de pierna/peso muerto con mancuernas.gif" },
                { nombre: "Peso muerto con barra", img: "../img/biblioteca de pierna/peso muerto.webp" },
                { nombre: "Femoral unilateral", img: "../img/biblioteca de pierna/femoral unilateral.webp" },
                { nombre: "Femoral acostado", img: "../img/biblioteca de pierna/femoral acostado.gif" },
                { nombre: "Femoral sentado", img: "../img/biblioteca de pierna/femoral sentado.gif" },
                { nombre: "Peso muerto unilateral", img: "../img/biblioteca de pierna/peso muerto unitalteral.gif" }
            ],

            "Gluteos": [
                { nombre: "Peso muerto para gluteos", img: "../img/biblioteca de pierna/peso muerto.webp" },
                { nombre: "hip trusth", img: "../img/biblioteca de pierna/hip trusth.gif" },
                { nombre: "Bulgara para gluteos", img: "../img/biblioteca de pierna/bulgara.gif" },
                { nombre: "Gluteo en polea baja", img: "../img/biblioteca de pierna/gluteos_polea.gif" },
                { nombre: "Abductor", img: "../img/biblioteca de pierna/abductores.gif" },
                { nombre: "Step ups", img: "../img/biblioteca de pierna/weighted-step-up.gif" }
            ],
            "Pantorrilas": [

                { nombre: "Elevacion de pantorillas con barra", img: "../img/biblioteca de pierna/Elevacao-de-panturrilha-com-barra.webp" },
                { nombre: "Elevaciones sentado de pantorilla", img: "../img/biblioteca de pierna/soleo.gif" }
            ]
        }
    } else if (valor == 'hombros') {
        arrayEjercicios = {
            "Ejercicios de hombro": [
                { nombre: "Press militar con mancuernas", img: "../img/biblioteca de hombros/press militar con mancuernas.webp" },
                { nombre: "Vuelos laterales con mancuernas", img: "../img/biblioteca de hombros/ELEVACIONES-LATERALES-CON-MANCUERNAS.webp" },
                { nombre: "Face pull", img: "../img/biblioteca de hombros/face-pull-en-polea.webp" },
                { nombre: "Press militar con barra parado", img: "../img/biblioteca de hombros/ejercicio-press-militar con barra.gif" },
                { nombre: "Press militar con barra sentado", img: "../img/biblioteca de hombros/Press-de-hombro-sentado-con-barra-al-frente.webp" },
                { nombre: "Elevaciones frontales", img: "../img/biblioteca de hombros/ELEVACION-FRONTAL-CON-MANCUERNAS.webp" },
                { nombre: "Hombro posterior", img: "../img/biblioteca de hombros/hombro posterior.webp" },
                { nombre: "Vuelos laterales en polea", img: "../img/biblioteca de hombros/vuelos laterales en polea.gif" }
            ]
        }
    } else if (valor == 'espalda') {
        arrayEjercicios = {
            "Ejercicios de esplada": [
                { nombre: "Jalon al pecho", img: "../img/biblioteca de espalda/jalon de espalda.gif" },
                { nombre: "Remo con agarre amplio", img: "../img/biblioteca de espalda/remon sentado con agarre amplio.webp" },
                { nombre: "Remo con barra libre", img: "../img/biblioteca de espalda/remo con barra.webp" },
                { nombre: "Remo sentado con agarre cerrado", img: "../img/biblioteca de espalda/remon sentado con agarre cerrado.webp" },
                { nombre: "Jalon al pecho con agarre cerrado", img: "../img/biblioteca de espalda/jalon con agarre cerrado.gif" },
                { nombre: "Dominadas", img: "../img/biblioteca de espalda/dominadas.webp" },
                { nombre: "Dominadas con agarre supino", img: "../img/biblioteca de espalda/dominada con agarre supino.webp" },
                { nombre: "Remo con barra con agarre cerrado", img: "../img/biblioteca de espalda/remo con barra con agarre cerrado.gif" },
                { nombre: "Jalon de pecho en maquina", img: "../img/biblioteca de espalda/jalon al pecho en maquina.webp" },
                { nombre: "Pull over", img: "../img/biblioteca de espalda/pull-over-poulie.webp" },
                { nombre: "Remo T", img: "../img/biblioteca de espalda/remo t.webp" },
                { nombre: "Remo con mancuerna a una mano en banco plano", img: "../img/biblioteca de espalda/remo-con-mancuerna-a-una-mano.gif" },
                { nombre: "Remo unilateral parado con mancuernas", img: "../img/biblioteca de espalda/remo unilateral parado con mancuernas.gif" },
                { nombre: "Remo con mancuernas en banco inclinado agarre supino", img: "../img/biblioteca de espalda/REMO CON MANCUERNAS EN BANCO INCLINADO AGARRE SUPINO.gif" },
                { nombre: "Remo con mancuernas en banco inclinado", img: "../img/biblioteca de espalda/remo con mnancuernas en banco inclinado.webp" },
                { nombre: "Remo uniltaeral en polea", img: "../img/biblioteca de espalda/remo unilateral en polea.gif" },
                { nombre: "Remo en maquina", img: "../img/biblioteca de espalda/remo en maquina.webp" },
                { nombre: "Trapecio", img: "../img/biblioteca de espalda/trapecio.gif" }
            ]
        }
    } else if (valor == 'brazos') {
        arrayEjercicios = {
            "Biceps": [
                { nombre: "Curl en barra", img: "../img/biblioteca de brazos/curl-barre.gif" },
                { nombre: "Curl bayesian", img: "../img/biblioteca de brazos/bayesian-curl.gif" },
                { nombre: "Curl martillo", img: "../img/biblioteca de brazos/curl martillo con mancuernas.webp" },
                { nombre: "Curl predicador con barra", img: "../img/biblioteca de brazos/curl predicador con barra.gif" },
                { nombre: "Curl araña", img: "../img/biblioteca de brazos/CURL-ARANA-GIF.gif" },
                { nombre: "Curl de biceps en banco inclinado", img: "../img/biblioteca de brazos/curl-biceps-alterne-sur-banc-incline.gif" },
                { nombre: "Curl martillo en polea", img: "../img/biblioteca de brazos/curlo martillo en polea.webp" },
                { nombre: "Curl concentrado", img: "../img/biblioteca de brazos/curl-concentrado.gif" },
                { nombre: "Curl unilateral en polea alta", img: "../img/biblioteca de brazos/curl predicador con polea.webp" },
                { nombre: "Curl con mancuernas", img: "../img/biblioteca de brazos/CURL-CON-MANCUERNAS-PARADO-GIF.gif" },
                { nombre: "Curl predicador en maquina", img: "../img/biblioteca de brazos/cable-preacher-curl.gif" },
                { nombre: "Curl con barra en polea baja", img: "../img/biblioteca de brazos/CURL-BICEPS-CON-BARRA-EN-POLEA-BAJA.webp" }
            ],
            "Triceps": [
                { nombre: "Press frances en banco plano con barra", img: "../img/biblioteca de brazos/press frances en banco plano.webp" },
                { nombre: "Patada de triceps en polea", img: "../img/biblioteca de brazos/patadas-de-triceps-con-cable.gif" },
                { nombre: "Patada de triceps con mancuernas", img: "../img/biblioteca de brazos/patada de triceps con mancuerna.gif" },
                { nombre: "Fondos", img: "../img/biblioteca de brazos/fondos.gif" },
                { nombre: "Press frances con banco inclinado con mancuernas", img: "../img/biblioteca de brazos/press frances en banco inclinado con mancuernas.webp" },
                { nombre: "Flexiones diamante", img: "../img/biblioteca de brazos/flexiones diamante.gif" },
                { nombre: "Extension de triceps en soga", img: "../img/biblioteca de brazos/extensioon de trcieps con soga.webp" },
                { nombre: "Copa unilateral con mancuerna", img: "../img/biblioteca de brazos/extension unilateral en mancuerno.gif" },
                { nombre: "Extension tras nuca en polea baja", img: "../img/biblioteca de brazos/extension tras nuca desde polea baja.gif" },
                { nombre: "Extension tras nuca en polea alta", img: "../img/biblioteca de brazos/extension de triceps tras nuca en polea.webp" },
                { nombre: "Extension de triceps con barra", img: "../img/biblioteca de brazos/extension de triceps coin barra.webp" }
            ]
        }
    } else if (valor == 'abdomen') {
        arrayEjercicios = {
            "Ejercicios de Abdomen": [

                { nombre: "Abdomen en barra", img: "../img/biblioteca de abdomen/abdomen en barra.gif" },
                { nombre: "Abdominales básicas", img: "../img/biblioteca de abdomen/abdomen normal.gif" },
                { nombre: "Crunch de lado", img: "../img/biblioteca de abdomen/abdominales de lado.webp" },
                { nombre: "Plancha lateral", img: "../img/biblioteca de abdomen/plancha lateral.webp" },
                { nombre: "Abdomen con rueda", img: "../img/biblioteca de abdomen/abdomen con rueda.gif" },
                { nombre: "Sit up", img: "../img/biblioteca de abdomen/sit up.gif" },
                { nombre: "Toque de pies", img: "../img/biblioteca de abdomen/toque de pies.webp" },
                { nombre: "V-ups", img: "../img/biblioteca de abdomen/v ups.gif" }
            ]
        }
    }

    for (categoria in arrayEjercicios) {

        const bloque = document.createElement('div');
        bloque.classList.add('bloque_ejercicio');

        const titulo = document.createElement('div');
        titulo.classList.add('titulo');
        const h1 = document.createElement('div');
        h1.textContent = categoria
        titulo.appendChild(h1);
        containerProducts.appendChild(titulo);

        if (arrayEjercicios.hasOwnProperty(categoria)) {

            arrayEjercicios[categoria].forEach(ejercicio => {



                const cardPruduct = document.createElement('div');
                cardPruduct.classList.add('card-product');

                const containerImg = document.createElement('div');
                containerImg.classList.add('container-img');
                cardPruduct.appendChild(containerImg);

                const img = document.createElement('img');
                img.src = ejercicio.img;
                containerImg.appendChild(img);

                const contentCardProduct = document.createElement('div');
                contentCardProduct.classList.add('content-card-product');
                cardPruduct.appendChild(contentCardProduct);

                const h3 = document.createElement('h3');
                h3.textContent = ejercicio.nombre;
                contentCardProduct.appendChild(h3);
                contentCardProduct.appendChild(h3);


                bloque.appendChild(cardPruduct);
            });


        }
        containerProducts.appendChild(bloque);
    }


    wrapper.classList.add('active_wrapper');
}


const cerrar = document.getElementsByClassName('icon_close')[0];

cerrar.addEventListener("click", function () {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    wrapper.classList.remove('active_wrapper');

})
