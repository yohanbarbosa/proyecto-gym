let usuarios = [];

// Inicializar usuarios si ya existe en localStorage
const storedData = localStorage.getItem('userProfiles');
if (storedData) {
    usuarios = JSON.parse(storedData);
}

// console.log(usuarios);

// Agregar un evento al elemento con id 'funcion'
const prueba = document.getElementById('funcion');
prueba.addEventListener("click", function () {
    // Iterar sobre todos los usuarios y generar la rutina para cada uno

    const usuario = usuarios[usuarios.length - 1];

    let objetivo = usuario.objetivo;
    let experiencia = usuario.experiencia;
    let grupoMuscular = usuario.grupoMuscular;
    let edad = usuario.edad;
    let dias = usuario.dias;
    console.log(`Rutina para ${usuario.nombre}: ${objetivo}, ${experiencia}, ${dias}`);

    if (edad >= 16 && edad <= 50) {

        if (objetivo == "hipertrofia") {
            ejerciciosHipertrofia(dias);
        }
    }
});


function ejerciciosHipertrofia(dias) {
    // Objeto que contiene ejercicios de hipertrofia para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadillas", "imagen": "https://www.topvelocity.net/wp-content/uploads/2023/11/back-squat.gif" },
            { "nombre": "Prensa de piernas", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif" },
            { "nombre": "Curl de femoral", "imagen": "https://www.docteur-fitness.com/wp-content/uploads/2021/06/leg-extension-quadriceps.jpg" },
            { "nombre": "Elevaciones de gemelos", "imagen": "https://www.lyfta.app/thumbnails/11641201.jpg" }
        ],
        "espalda": [
            { "nombre": "Peso muerto", "imagen": "enlace_imagen_peso_muerto" },
            { "nombre": "Pull-ups", "imagen": "enlace_imagen_pull-ups" },
            { "nombre": "Remo con barra", "imagen": "enlace_imagen_remo_con_barra" },
            { "nombre": "Pulldown en polea alta", "imagen": "enlace_imagen_pulldown_en_polea_alta" }
        ],
        "pecho": [
            { "nombre": "Press de banca", "imagen": "enlace_imagen_press_de_banca" },
            { "nombre": "Fondos en paralelas", "imagen": "enlace_imagen_fondos_en_paralelas" },
            { "nombre": "Aperturas con mancuernas", "imagen": "enlace_imagen_aperturas_con_mancuernas" },
            { "nombre": "Flexiones", "imagen": "enlace_imagen_flexiones" }
        ],
        "hombros": [
            { "nombre": "Press militar", "imagen": "enlace_imagen_press_militar" },
            { "nombre": "Elevaciones laterales", "imagen": "enlace_imagen_elevaciones_laterales" },
            { "nombre": "Elevaciones frontales", "imagen": "enlace_imagen_elevaciones_frontales" },
            { "nombre": "Face pulls", "imagen": "enlace_imagen_face_pulls" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps", "imagen": "enlace_imagen_curl_de_bíceps" },
            { "nombre": "Extensiones de tríceps", "imagen": "enlace_imagen_extensiones_de_tríceps" },
            { "nombre": "Curl martillo", "imagen": "enlace_imagen_curl_martillo" },
            { "nombre": "Press de banca cerrado", "imagen": "enlace_imagen_press_de_banca_cerrado" }
        ],
        "abdominales": [
            { "nombre": "Crunches", "imagen": "enlace_imagen_crunches" },
            { "nombre": "Planchas", "imagen": "enlace_imagen_planchas" },
            { "nombre": "Elevaciones de piernas colgado", "imagen": "enlace_imagen_elevaciones_de_piernas_colgado" },
            { "nombre": "Russian twists", "imagen": "enlace_imagen_russian_twists" }
        ]
    }


    // Contenedor donde se mostrará la información en tu HTML
    const contenedor = document.getElementById('resultado');

    // Iterar sobre los días de la semana y asignar ejercicios para cada día
    dias.forEach(dia => {
        const diaElemento = document.createElement('div'); // Crear un nuevo elemento div para cada día
        switch (dia) {
            case "lunes":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda);
                break;
            // case "martes":
            //     bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros);
            //     break;
            // case "miercoles":
            //     bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales);
            //     break;
            // case "jueves":
            //     bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda);
            // case "viernes":
            //     bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros);
            //     break;
            // case "sábado":
            //     bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales);
            //     break;
            // case "domingo":
            //     diaElemento.textContent = "Día de descanso.";
            //     break;
            default:
                diaElemento.textContent = "Día inválido.";
        }

    });
}

function bloqueEjercicio(dia, bloqueUno, bloque_dos) {
    console.log(bloqueUno);
    const contenedor = document.getElementById('contenedor_rutina');

    // Crear el elemento div con clase 'titulo_rutina'
    const titulo = document.createElement('div');
    titulo.classList.add('titulo_rutina');

    // Crear el elemento p para el título del día
    const pDia = document.createElement('p');
    pDia.textContent = dia;
    titulo.appendChild(pDia);

    // Agregar el elemento 'titulo' al contenedor principal
    contenedor.appendChild(titulo);

    // Crear el contenedor para el primer bloque de ejercicios
    const bloqueEjercicio = document.createElement('div');
    bloqueEjercicio.classList.add('bloque');

    bloqueUno.forEach(ejercicio => {
        const cardProducto = document.createElement('div');
        cardProducto.classList.add('card-product');
        const contenedorImg = document.createElement('div');
        contenedorImg.classList.add('container-img');
        // Crear la etiqueta img y configurar su atributo src
        const img = document.createElement('img');
        img.src = "enlace_imagen_del_ejercicio"; // Reemplaza "enlace_imagen_del_ejercicio" con el enlace real
        img.alt = ejercicio; // También puedes establecer el atributo alt con el nombre del ejercicio
        // Agregar la etiqueta img al contenedor de la imagen
        contenedorImg.appendChild(img);
        cardProducto.appendChild(contenedorImg);
        bloqueEjercicio.appendChild(cardProducto);
    });

    contenedor.appendChild();
    
}
