let usuarios = [];

// Inicializar usuarios si ya existe en localStorage
const storedData = localStorage.getItem('userProfiles');
if (storedData) {
    usuarios = JSON.parse(storedData);
}

document.addEventListener("DOMContentLoaded", function () {

    const usuario = usuarios[usuarios.length - 1];
    let grupoMuscular = usuario.musculos;

    // titulo de saludo ubicado en el header
    const mensajeHeader = document.getElementById('mensaje_header');
    const mensaje = document.createElement('p');
    mensaje.textContent = `Bienvenido ${usuario.nombre}`;
    mensajeHeader.appendChild(mensaje);

    if (grupoMuscular == "balanceado") {
        rutina(usuario);
    } else {
        rutinaAleatoria(usuario);
    }

});


function rutinaAleatoria(usuario) {
    let grupoMuscular = usuario.musculos;
    let edad = usuario.edad;
    let dias = usuario.dias;
    let objetivo = usuario.objetivo;
    if (edad >= 16 && edad <= 50) {

        if (objetivo == "hipertrofia") {
            rutinaHipertrofiaAleatoria(dias, grupoMuscular);
        } else if (objetivo == "definicion") {
            rutinaDefinicionAleatoria(diasSeleccionados, grupoMuscular);
        } else if (objetivo == "bajar peso") {
            rutinaBajarPesoAleatoria(diasSeleccionados, grupoMuscular);
        }
    }
}



function rutinaHipertrofiaAleatoria(diasSeleccionados, grupoMuscular) {
    // Objeto que contiene ejercicios de hipertrofia para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadillas", "imagen": "https://www.topvelocity.net/wp-content/uploads/2023/11/back-squat.gif" },
            { "nombre": "Prensa de piernas", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif" },
            { "nombre": "Curl de femoral", "imagen": "https://doriangym.es/wp-content/uploads/2022/10/curl-femoral-sentado.gif" },
            { "nombre": "Elevaciones de gemelos", "imagen": "https://shopguarani.com/wp-content/uploads/2022/11/Elevacao-de-panturrilha-com-barra.gif" }
        ],
        "espalda": [
            { "nombre": "Peso muerto", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Pull-ups", "imagen": "https://newlife.com.cy/wp-content/uploads/2019/08/18661301-Wide-Grip-Pull-Up-on-Dip-Cage_Back_720.gif" },
            { "nombre": "Remo con barra", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/rowing-barre-min.gif" },
            { "nombre": "Pulldown en polea alta", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/tirage-vertical-poitrine-min.gif" }
        ],
        "pecho": [
            { "nombre": "Press de banca", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Fondos en paralelas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_6XNNBnRjlp0Y.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Aperturas con maquina", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/mariposa.gif" },
            { "nombre": "Press con mancuernas", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/press_manku.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con agarre cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/10/oie_WlBA1Cmefanq.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Elevaciones laterales", "imagen": "https://doriangym.es/wp-content/uploads/2021/11/ejecucion-elevaciones-laterales-con-mancuernas.gif" },
            { "nombre": "Elevaciones frontales", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ELEVACION-FRONTAL-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Face pulls", "imagen": "https://burnfit.io/wp-content/uploads/2023/11/FACE_PULL.gif" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_7KyizCzE8xCM.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Extensiones de tríceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_8qpEpBt6F08r.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Press de banca cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_xAkQdZQ6fiIX.gif?fit=360%2C360&ssl=1" }
        ],
        "abdominales": [
            { "nombre": "Crunches", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif" },
            { "nombre": "Planchas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_O24AjQFHvK6p.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Elevaciones de piernas colgado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_a6F3n65peFFG.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Russian twists", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif" }
        ]
    }

    const rutina = {};
    const gruposPorDia = Math.ceil(grupoMuscular.length / diasSeleccionados.length);
    let grupoIndex = 0;

    diasSeleccionados.forEach(dia => {
        rutina[dia] = [];

        for (let i = 0; i < gruposPorDia; i++) {
            const grupo = grupoMuscular[grupoIndex];
            const ejerciciosGrupo = ejercicios[grupo];
            rutina[dia] = rutina[dia].concat(ejerciciosGrupo);

            grupoIndex = (grupoIndex + 1) % grupoMuscular.length;
        }
    });

    imprimirEjercicioAleatorio(rutina);

}

function rutinaDefinicionAleatoria(diasSeleccionados, grupoMuscular) {
    // Objeto que contiene ejercicios de hipertrofia para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadilla búlgara", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_a1pClH2TzpiR.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Peso muerto rumano", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Zancadas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_BNDLY0nDTwH3.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Sentadillas", "imagen": "https://doriangym.es/wp-content/uploads/2022/09/pin-squat-con-barra.gif" },
            { "nombre": "Extensiones de piernas" , "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/leg-extension-exercice-musculation-min.gif"}
        ],
        "espalda": [
            { "nombre": "Remo con mancuerna", "imagen": "https://jumpseller.s3.eu-west-1.amazonaws.com/store/grecoromana-co/assets/Remos%20con%20mancuerna%20a%20un%20brazo.gif" },
            { "nombre": "Dominadas asistidas", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/traction-musculation-dos-min.gif" },
            { "nombre": "Jalón al pecho", "imagen": "https://vitruve.fit/wp-content/uploads/2021/11/vitruvs.gif" },
            { "nombre": "Remo con barra", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_d1iO8DYEJ7aH.gif?fit=360%2C360&ssl=1" }
        ],
        "pecho": [
            { "nombre": "Press inclinado con mancuernas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_xt4zAwJtGV8l.gif?fit=360%2C360&ssl=1" },
            { "nombre": "press de banca", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Press de banca con agarre cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_xAkQdZQ6fiIX.gif?fit=360%2C360&ssl=1" },
            { "nombre": "butterfly en máquina", "imagen": "https://modusx.de/wp-content/uploads/butterfly-maschine-parallelgriff.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con mancuernas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/10/oie_WlBA1Cmefanq.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Elevaciones frontales", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ELEVACION-FRONTAL-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Arnold press", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif" },
            { "nombre": "Encogimientos de hombros", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ENCOGIMIENTO-DE-HOMBROS-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps en banco inclinado", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/rosca-biceps-com-halteres-no-banco-inclinado.gif" },
            { "nombre": "Extensión de tríceps en polea", "imagen": "https://www.example.com/extension-triceps-polea.gif" },
            { "nombre": "Curl de bíceps en polea baja", "imagen": "https://www.example.com/curl-biceps-polea-baja.gif" },
            { "nombre": "Fondos en banco", "imagen": "https://www.example.com/fondos-en-banco.gif" }
        ],
        "abdominales": [
            { "nombre": "Crunch inverso", "imagen": "https://www.example.com/crunch-inverso.gif" },
            { "nombre": "Bicicleta", "imagen": "https://www.example.com/bicicleta.gif" },
            { "nombre": "Rodillo abdominal", "imagen": "https://www.example.com/rodillo-abdominal.gif" },
            { "nombre": "V-ups", "imagen": "https://www.example.com/v-ups.gif" }
        ],
        "gluteos":[
            { "nombre":  "Peso muerto rumano", "imagen": "https://www.example.com/crunch-inverso.gif" },
            { "nombre":  "Prensa de piernas", "imagen": "https://www.example.com/bicicleta.gif" },
            { "nombre":  "Hip Thrusts", "imagen": "https://www.example.com/rodillo-abdominal.gif" },
            { "nombre":  "Elevación de pelvis en banco", "imagen": "https://www.example.com/v-ups.gif" },
            { "nombre":   "Patada de glúteo en máquina", "imagen": "https://www.example.com/v-ups.gif" }
        ]
    }

    const rutina = {};
    const gruposPorDia = Math.ceil(grupoMuscular.length / diasSeleccionados.length);
    let grupoIndex = 0;

    diasSeleccionados.forEach(dia => {
        rutina[dia] = [];

        for (let i = 0; i < gruposPorDia; i++) {
            const grupo = grupoMuscular[grupoIndex];
            const ejerciciosGrupo = ejercicios[grupo];
            rutina[dia] = rutina[dia].concat(ejerciciosGrupo);

            grupoIndex = (grupoIndex + 1) % grupoMuscular.length;
        }
    });

    imprimirEjercicioAleatorio(rutina);

}

function rutinaBajarPesoAleatoria(diasSeleccionados, grupoMuscular) {
    // Objeto que contiene ejercicios para bajar peso para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadilla con salto", "imagen": "https://www.example.com/sentadilla-con-salto.gif" },
            { "nombre": "Step-up con mancuernas", "imagen": "https://www.example.com/step-up-con-mancuernas.gif" },
            { "nombre": "Peso muerto con mancuernas", "imagen": "https://www.example.com/peso-muerto-con-mancuernas.gif" },
            { "nombre": "Zancadas caminando", "imagen": "https://www.example.com/zancadas-caminando.gif" }
        ],
        "espalda": [
            { "nombre": "Remo con barra", "imagen": "https://www.example.com/remo-con-barra.gif" },
            { "nombre": "Pull-ups asistidas", "imagen": "https://www.example.com/pull-ups-asistidas.gif" },
            { "nombre": "Jalón con cuerda", "imagen": "https://www.example.com/jalon-con-cuerda.gif" },
            { "nombre": "Remo sentado en máquina", "imagen": "https://www.example.com/remo-sentado-en-maquina.gif" }
        ],
        "pecho": [
            { "nombre": "Press de pecho en máquina", "imagen": "https://www.example.com/press-de-pecho-en-maquina.gif" },
            { "nombre": "Push-ups con manos juntas", "imagen": "https://www.example.com/push-ups-con-manos-juntas.gif" },
            { "nombre": "Press inclinado con mancuernas", "imagen": "https://www.example.com/press-inclinado-con-mancuernas.gif" },
            { "nombre": "Aperturas con bandas", "imagen": "https://www.example.com/aperturas-con-bandas.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con barra", "imagen": "https://www.example.com/press-militar-con-barra.gif" },
            { "nombre": "Elevaciones laterales con mancuernas", "imagen": "https://www.example.com/elevaciones-laterales-con-mancuernas.gif" },
            { "nombre": "Press arnold", "imagen": "https://www.example.com/press-arnold.gif" },
            { "nombre": "Encogimientos de hombros con mancuernas", "imagen": "https://www.example.com/encogimientos-de-hombros-con-mancuernas.gif" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps en banco scott", "imagen": "https://www.example.com/curl-de-biceps-en-banco-scott.gif" },
            { "nombre": "Tríceps dips", "imagen": "https://www.example.com/triceps-dips.gif" },
            { "nombre": "Curl de bíceps con barra", "imagen": "https://www.example.com/curl-de-biceps-con-barra.gif" },
            { "nombre": "Extensión de tríceps con cuerda", "imagen": "https://www.example.com/extension-de-triceps-con-cuerda.gif" }
        ],
        "abdominales": [
            { "nombre": "Mountain climbers", "imagen": "https://www.example.com/mountain-climbers.gif" },
            { "nombre": "Russian twists con balón medicinal", "imagen": "https://www.example.com/russian-twists-con-balon-medicinal.gif" },
            { "nombre": "Plancha lateral", "imagen": "https://www.example.com/plancha-lateral.gif" },
            { "nombre": "Crunch en bicicleta", "imagen": "https://www.example.com/crunch-en-bicicleta.gif" }
        ],
        "cardio": [
            { "nombre": "Burpees", "imagen": "https://www.example.com/burpees.gif" },
            { "nombre": "Saltos de tijera", "imagen": "https://www.example.com/saltos-de-tijera.gif" },
            { "nombre": "Correr en el lugar", "imagen": "https://www.example.com/correr-en-el-lugar.gif" },
            { "nombre": "Saltar la cuerda", "imagen": "https://www.example.com/saltar-la-cuerda.gif" }
        ]
    }


    const rutina = {};
    const gruposPorDia = Math.ceil(grupoMuscular.length / diasSeleccionados.length);
    let grupoIndex = 0;

    diasSeleccionados.forEach(dia => {
        rutina[dia] = [];

        for (let i = 0; i < gruposPorDia; i++) {
            const grupo = grupoMuscular[grupoIndex];
            const ejerciciosGrupo = ejercicios[grupo];
            rutina[dia] = rutina[dia].concat(ejerciciosGrupo);

            grupoIndex = (grupoIndex + 1) % grupoMuscular.length;
        }
    });

    imprimirEjercicioAleatorio(rutina);

}

function imprimirEjercicioAleatorio(rutina) {


    //  contenedor donde se muestra la rutina
    const rutinaContainer = document.getElementById('contenedor_rutina');

    Object.entries(rutina).forEach(([dia, ejerciciosDelDia], index) => {

        // Crear un contenedor de grupo
        const contenedorGrupo = document.createElement('div');
        contenedorGrupo.classList.add('contenedor_grupo'); // Agregar clase

        // Crear un elemento <div> para el día
        const diaElemento = document.createElement('div');
        diaElemento.classList.add('titulo_dia');

        // Crea un elemento <h2> para mostrar el nombre del día
        const tituloDia = document.createElement('h2');
        tituloDia.textContent = `Día: ${dia}`;
        diaElemento.appendChild(tituloDia);
        // Crea un bloque de ejercicios para el día
        const bloqueEjercicios = document.createElement('div');
        bloqueEjercicios.classList.add('bloque');

        // Recorre cada grupo de ejercicios del día
        ejerciciosDelDia.forEach((ejercicio, ejercicioIndex) => {

            // Recorre cada ejercicio del día
            const ejercicioElemento = document.createElement('div');
            ejercicioElemento.classList.add('card-product');
            // Crea un elemento <div> para la imagen del ejercicio
            const contenedorImg = document.createElement('div');
            contenedorImg.classList.add('container-img');
            const img = document.createElement('img');
            img.src = ejercicio.imagen;
            contenedorImg.appendChild(img);
            ejercicioElemento.appendChild(contenedorImg);

            // Crea un elemento <div> para el nombre del ejercicio
            const texto = document.createElement('div');
            texto.classList.add('content-card-product');
            texto.innerHTML = `<p>${ejercicio.nombre}</p>`;
            ejercicioElemento.appendChild(texto);

            // Agrega el elemento del ejercicio al bloque de ejercicios del día
            bloqueEjercicios.appendChild(ejercicioElemento);
            // Agregar un ID único al bloque de ejercicio
            bloqueEjercicios.id = `${index}`;
            // Agregar un ID único al bloque del dia
            diaElemento.id = `${index}`;
        });

        // Agrega el título del día al contenedor del grupo de ejercicios
        contenedorGrupo.appendChild(diaElemento);

        // Agregar el bloque de ejercicios al contenedor del grupo de ejercicios
        contenedorGrupo.appendChild(bloqueEjercicios);

        // Agregar el contenedor de grupo al contenedor de rutina
        rutinaContainer.appendChild(contenedorGrupo);
    });



}






function rutina(usuario) {


    let edad = usuario.edad;
    let dias = usuario.dias;
    let objetivo = usuario.objetivo;
    if (edad >= 16 && edad <= 50) {

        if (objetivo == "hipertrofia") {
            rutinaHipertrofia(dias);
        } else if (objetivo == "definicion") {
            rutinaDefinicion(dias);
        } else if (objetivo == "bajar peso") {
            rutinaBajarPeso(dias);
        }
    }

}


function rutinaHipertrofia(dias) {
    // Objeto que contiene ejercicios de hipertrofia para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadillas", "imagen": "https://www.topvelocity.net/wp-content/uploads/2023/11/back-squat.gif" },
            { "nombre": "Prensa de piernas", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif" },
            { "nombre": "Curl de femoral", "imagen": "https://doriangym.es/wp-content/uploads/2022/10/curl-femoral-sentado.gif" },
            { "nombre": "Elevaciones de gemelos", "imagen": "https://shopguarani.com/wp-content/uploads/2022/11/Elevacao-de-panturrilha-com-barra.gif" }
        ],
        "espalda": [
            { "nombre": "Peso muerto", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Pull-ups", "imagen": "https://newlife.com.cy/wp-content/uploads/2019/08/18661301-Wide-Grip-Pull-Up-on-Dip-Cage_Back_720.gif" },
            { "nombre": "Remo con barra", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/rowing-barre-min.gif" },
            { "nombre": "Pulldown en polea alta", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/tirage-vertical-poitrine-min.gif" }
        ],
        "pecho": [
            { "nombre": "Press de banca", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Fondos en paralelas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_6XNNBnRjlp0Y.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Aperturas con maquina", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/mariposa.gif" },
            { "nombre": "Press con mancuernas", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/press_manku.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con agarre cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/10/oie_WlBA1Cmefanq.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Elevaciones laterales", "imagen": "https://doriangym.es/wp-content/uploads/2021/11/ejecucion-elevaciones-laterales-con-mancuernas.gif" },
            { "nombre": "Elevaciones frontales", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ELEVACION-FRONTAL-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Face pulls", "imagen": "https://burnfit.io/wp-content/uploads/2023/11/FACE_PULL.gif" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_7KyizCzE8xCM.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Extensiones de tríceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_8qpEpBt6F08r.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Press de banca cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_xAkQdZQ6fiIX.gif?fit=360%2C360&ssl=1" }
        ],
        "abdominales": [
            { "nombre": "Crunches", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif" },
            { "nombre": "Planchas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_O24AjQFHvK6p.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Elevaciones de piernas colgado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_a6F3n65peFFG.gif?fit=360%2C360&ssl=1" },
            { "nombre": "Russian twists", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif" }
        ]
    }

    // Iterar sobre los días de la semana y asignar ejercicios para cada día
    dias.forEach(dia => {

        switch (dia) {
            case "lunes":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
                break;
            case "martes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "miercoles":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "jueves":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
                break;
            case "viernes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "sábado":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "domingo":
                diaElemento.textContent = "Día de descanso.";
                break;
            default:
                diaElemento.textContent = "Día inválido.";
        }

    });
}

function rutinaDefinicion(dias) {
    // Objeto que contiene ejercicios de Definicion para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadilla búlgara", "imagen": "https://www.example.com/sentadilla-bulgara.gif" },
            { "nombre": "Peso muerto rumano", "imagen": "https://www.example.com/peso-muerto-rumano.gif" },
            { "nombre": "Zancadas", "imagen": "https://www.example.com/zancadas.gif" },
            { "nombre": "Saltos de caja", "imagen": "https://www.example.com/saltos-de-caja.gif" }
        ],
        "espalda": [
            { "nombre": "Remo con mancuerna", "imagen": "https://www.example.com/remo-con-mancuerna.gif" },
            { "nombre": "Dominadas asistidas", "imagen": "https://www.example.com/dominadas-asistidas.gif" },
            { "nombre": "Jalón al pecho", "imagen": "https://www.example.com/jalon-al-pecho.gif" },
            { "nombre": "Remo en máquina", "imagen": "https://www.example.com/remo-en-maquina.gif" }
        ],
        "pecho": [
            { "nombre": "Press inclinado con mancuernas", "imagen": "https://www.example.com/press-inclinado-mancuernas.gif" },
            { "nombre": "Push-ups", "imagen": "https://www.example.com/push-ups.gif" },
            { "nombre": "Aperturas en banco inclinado", "imagen": "https://www.example.com/aperturas-banco-inclinado.gif" },
            { "nombre": "Press en máquina", "imagen": "https://www.example.com/press-en-maquina.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con mancuernas", "imagen": "https://www.example.com/press-militar-mancuernas.gif" },
            { "nombre": "Pájaros", "imagen": "https://www.example.com/pajaros.gif" },
            { "nombre": "Arnold press", "imagen": "https://www.example.com/arnold-press.gif" },
            { "nombre": "Encogimientos de hombros", "imagen": "https://www.example.com/encogimientos-de-hombros.gif" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps en banco inclinado", "imagen": "https://www.example.com/curl-biceps-banco-inclinado.gif" },
            { "nombre": "Extensión de tríceps en polea", "imagen": "https://www.example.com/extension-triceps-polea.gif" },
            { "nombre": "Curl de bíceps en polea baja", "imagen": "https://www.example.com/curl-biceps-polea-baja.gif" },
            { "nombre": "Fondos en banco", "imagen": "https://www.example.com/fondos-en-banco.gif" }
        ],
        "abdominales": [
            { "nombre": "Crunch inverso", "imagen": "https://www.example.com/crunch-inverso.gif" },
            { "nombre": "Bicicleta", "imagen": "https://www.example.com/bicicleta.gif" },
            { "nombre": "Rodillo abdominal", "imagen": "https://www.example.com/rodillo-abdominal.gif" },
            { "nombre": "V-ups", "imagen": "https://www.example.com/v-ups.gif" }
        ]
    }



    // Iterar sobre los días de la semana y asignar ejercicios para cada día
    dias.forEach(dia => {


        switch (dia) {
            case "lunes":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
                break;
            case "martes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "miercoles":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "jueves":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
            case "viernes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "sábado":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "domingo":
                diaElemento.textContent = "Día de descanso.";
                break;
            default:
                diaElemento.textContent = "Día inválido.";
        }

    });
}

function rutinaBajarPeso(dias) {
    // Objeto que contiene ejercicios de Definicion para diferentes grupos musculares
    ejercicios = {
        "piernas": [
            { "nombre": "Sentadilla con salto", "imagen": "https://www.example.com/sentadilla-con-salto.gif" },
            { "nombre": "Step-up con mancuernas", "imagen": "https://www.example.com/step-up-con-mancuernas.gif" },
            { "nombre": "Peso muerto con mancuernas", "imagen": "https://www.example.com/peso-muerto-con-mancuernas.gif" },
            { "nombre": "Zancadas caminando", "imagen": "https://www.example.com/zancadas-caminando.gif" }
        ],
        "espalda": [
            { "nombre": "Remo con barra", "imagen": "https://www.example.com/remo-con-barra.gif" },
            { "nombre": "Pull-ups asistidas", "imagen": "https://www.example.com/pull-ups-asistidas.gif" },
            { "nombre": "Jalón con cuerda", "imagen": "https://www.example.com/jalon-con-cuerda.gif" },
            { "nombre": "Remo sentado en máquina", "imagen": "https://www.example.com/remo-sentado-en-maquina.gif" }
        ],
        "pecho": [
            { "nombre": "Press de pecho en máquina", "imagen": "https://www.example.com/press-de-pecho-en-maquina.gif" },
            { "nombre": "Push-ups con manos juntas", "imagen": "https://www.example.com/push-ups-con-manos-juntas.gif" },
            { "nombre": "Press inclinado con mancuernas", "imagen": "https://www.example.com/press-inclinado-con-mancuernas.gif" },
            { "nombre": "Aperturas con bandas", "imagen": "https://www.example.com/aperturas-con-bandas.gif" }
        ],
        "hombros": [
            { "nombre": "Press militar con barra", "imagen": "https://www.example.com/press-militar-con-barra.gif" },
            { "nombre": "Elevaciones laterales con mancuernas", "imagen": "https://www.example.com/elevaciones-laterales-con-mancuernas.gif" },
            { "nombre": "Press arnold", "imagen": "https://www.example.com/press-arnold.gif" },
            { "nombre": "Encogimientos de hombros con mancuernas", "imagen": "https://www.example.com/encogimientos-de-hombros-con-mancuernas.gif" }
        ],
        "brazos": [
            { "nombre": "Curl de bíceps en banco scott", "imagen": "https://www.example.com/curl-de-biceps-en-banco-scott.gif" },
            { "nombre": "Tríceps dips", "imagen": "https://www.example.com/triceps-dips.gif" },
            { "nombre": "Curl de bíceps con barra", "imagen": "https://www.example.com/curl-de-biceps-con-barra.gif" },
            { "nombre": "Extensión de tríceps con cuerda", "imagen": "https://www.example.com/extension-de-triceps-con-cuerda.gif" }
        ],
        "abdominales": [
            { "nombre": "Mountain climbers", "imagen": "https://www.example.com/mountain-climbers.gif" },
            { "nombre": "Russian twists con balón medicinal", "imagen": "https://www.example.com/russian-twists-con-balon-medicinal.gif" },
            { "nombre": "Plancha lateral", "imagen": "https://www.example.com/plancha-lateral.gif" },
            { "nombre": "Crunch en bicicleta", "imagen": "https://www.example.com/crunch-en-bicicleta.gif" }
        ],
        "cardio": [
            { "nombre": "Burpees", "imagen": "https://www.example.com/burpees.gif" },
            { "nombre": "Saltos de tijera", "imagen": "https://www.example.com/saltos-de-tijera.gif" },
            { "nombre": "Correr en el lugar", "imagen": "https://www.example.com/correr-en-el-lugar.gif" },
            { "nombre": "Saltar la cuerda", "imagen": "https://www.example.com/saltar-la-cuerda.gif" }
        ]
    }




    // Iterar sobre los días de la semana y asignar ejercicios para cada día
    dias.forEach(dia => {


        switch (dia) {
            case "lunes":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
                break;
            case "martes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "miercoles":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "jueves":
                bloqueEjercicio(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
            case "viernes":
                bloqueEjercicio(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "sábado":
                bloqueEjercicio(dia, ejercicios.brazos, ejercicios.abdominales, "Brazos", "Abdominales");
                break;
            case "domingo":
                diaElemento.textContent = "Día de descanso.";
                break;
            default:
                diaElemento.textContent = "Día inválido.";
        }

    });
}


let indiceBloque = 0; // Variable global para el índice único
function bloqueEjercicio(dia, bloqueUno, bloqueDos, nombre1, nombre2) {

    console.log(dia);
    // Obtén el contenedor donde deseas mostrar la rutina
    const rutinaContainer = document.getElementById('contenedor_rutina');
    // Crear el contenedor de grupo para este día
    const contenedorGrupo = document.createElement('div');
    contenedorGrupo.classList.add('contenedor_grupo'); // Agregar clase

    // Crear un elemento <div> para el día
    const diaElemento = document.createElement('div');
    diaElemento.classList.add('titulo_dia');
    diaElemento.id = indiceBloque;
    // Crear el título del día
    const tituloDia = document.createElement('h2');
    tituloDia.textContent = `Día: ${dia}`;
    diaElemento.appendChild(tituloDia);

    // Agregar el elemento 'titulo' al contenedor principal
    contenedorGrupo.appendChild(diaElemento);

    // Crear el primer bloque de ejercicios
    const bloqueEjerciciosUno = document.createElement('div');
    bloqueEjerciciosUno.classList.add('bloque');

    // Recorrer y agregar los ejercicios del primer bloque
    bloqueUno.forEach(ejercicio => {
        const cardProduct = document.createElement('div');
        cardProduct.classList.add('card-product');

        const contenedorImg = document.createElement('div');
        contenedorImg.classList.add('container-img');
        const img = document.createElement('img');
        img.src = ejercicio.imagen;
        contenedorImg.appendChild(img);

        const texto = document.createElement('div');
        texto.classList.add('content-card-product');
        texto.innerHTML = `<h3>${ejercicio.nombre}</h3><h3>reps</h3>`;
        cardProduct.appendChild(contenedorImg);
        cardProduct.appendChild(texto);


        bloqueEjerciciosUno.id = indiceBloque;
        bloqueEjerciciosUno.appendChild(cardProduct);
    });

    // Agregar el primer bloque de ejercicios al contenedor de grupo
    contenedorGrupo.appendChild(bloqueEjerciciosUno);

    // Incrementar el índice para el siguiente bloque
    indiceBloque++;


    // Crear el segundo bloque de ejercicios
    const bloqueEjerciciosDos = document.createElement('div');
    bloqueEjerciciosDos.classList.add('bloque');

    // Recorrer y agregar los ejercicios del segundo bloque
    bloqueDos.forEach(ejercicio => {
        const cardProduct = document.createElement('div');
        cardProduct.classList.add('card-product');

        const contenedorImg = document.createElement('div');
        contenedorImg.classList.add('container-img');
        const img = document.createElement('img');
        img.src = ejercicio.imagen;
        contenedorImg.appendChild(img);

        const texto = document.createElement('div');
        texto.classList.add('content-card-product');
        texto.innerHTML = `<h3>${ejercicio.nombre}</h3><h3>reps</h3>`;
        cardProduct.appendChild(contenedorImg);
        cardProduct.appendChild(texto);
        bloqueEjerciciosDos.id = indiceBloque - indiceBloque;
        bloqueEjerciciosDos.appendChild(cardProduct);
    });

    // Agregar el segundo bloque de ejercicios al contenedor de grupo
    contenedorGrupo.appendChild(bloqueEjerciciosDos);

    // Agregar el contenedor de grupo al contenedor de rutina
    rutinaContainer.appendChild(contenedorGrupo);
}



//############################################### Animacion #############################################################################


document.addEventListener('DOMContentLoaded', function () {
    const titulosRutina = document.querySelectorAll('.titulo_dia');
    const bloquesDeEjercicio = document.querySelectorAll('.bloque');
 
    const usuario = usuarios[usuarios.length - 1];
    
    if (usuario.musculos == "balanceado") {
        titulosRutina.forEach((titulo, index) => {
            titulo.addEventListener('click', function () {
                const id = titulo.id;
                const texto = titulo.querySelector('h2').textContent;
                // Acceder al primer y segundo bloque de ejercicios correspondientes al título
                const bloqueEjercicioUno = bloquesDeEjercicio[index * 2]; // El primer bloque
                const bloqueEjercicioDos = bloquesDeEjercicio[index * 2 + 1]; // El segundo bloque
                
                // Verificar si ambos bloques existen
                if (bloqueEjercicioUno && bloqueEjercicioDos) {
                    // Alternar la clase 'activar' para cada bloque de ejercicio
                    bloqueEjercicioUno.classList.toggle('bloqueActive');
                    bloqueEjercicioDos.classList.toggle('bloqueActive');
                    const contenedorFunciones = document.getElementById('contenedor_funciones');
                    contenedorFunciones.classList.toggle('quitar_contenedor_funciones');
                }
            });
        });
    } else {
        titulosRutina.forEach((titulo, index) => {
            titulo.addEventListener('click', function () {
                const id = titulo.id;
                const texto = titulo.querySelector('h2').textContent;

                // Acceder al bloque de ejercicio correspondiente al título
                const bloqueEjercicio = bloquesDeEjercicio[index];
                if (bloqueEjercicio) {
                    // Realizar alguna acción con el bloque de ejercicio
                    bloqueEjercicio.classList.toggle('bloqueActive');
                    const contenedorFunciones = document.getElementById('contenedor_funciones');
                    contenedorFunciones.classList.toggle('quitar_contenedor_funciones');
                }
            });
        });
    }
});


