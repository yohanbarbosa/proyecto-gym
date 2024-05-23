let usuarios = [];

// Inicializar usuarios si ya existe en localStorage
const storedData = localStorage.getItem('userProfiles');
if (storedData) {
    usuarios = JSON.parse(storedData);
}

document.addEventListener('DOMContentLoaded', function () {
    const activarRutina = document.getElementById('activar_rutina');
    const contenedorRutina = document.getElementById('contenedor_rutina');
    const cerrarRutina = document.getElementById('cerrar_rutina');

    activarRutina.addEventListener('click', function () {
        contenedorRutina.style.display = 'block';
    });

    cerrarRutina.addEventListener('click', function () {
        contenedorRutina.style.display = 'none';
    });

    const usuario = usuarios[usuarios.length - 1];
    let grupoMuscular = usuario.musculos;

    // titulo de saludo ubicado en el header
    const mensajeHeader = document.getElementById('mensaje_header');
    const mensaje = document.createElement('p');
    mensaje.innerHTML = `Bienvenido <span>${usuario.nombre} </span> `;
    mensajeHeader.appendChild(mensaje);

    console.log(usuario);
    const contenedorEjercicios = {

        hipertrofia: {

            "piernas": [
                { "nombre": "Sentadillas", "imagen": "https://www.topvelocity.net/wp-content/uploads/2023/11/back-squat.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Prensa de piernas", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Curl de femoral", "imagen": "https://doriangym.es/wp-content/uploads/2022/10/curl-femoral-sentado.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones de gemelos", "imagen": "https://shopguarani.com/wp-content/uploads/2022/11/Elevacao-de-panturrilha-com-barra.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "espalda": [
                { "nombre": "Peso muerto", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Pull-ups", "imagen": "https://newlife.com.cy/wp-content/uploads/2019/08/18661301-Wide-Grip-Pull-Up-on-Dip-Cage_Back_720.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Remo con barra", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/rowing-barre-min.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Pulldown en polea alta", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/tirage-vertical-poitrine-min.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "pecho": [
                { "nombre": "Press de banca ", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Fondos en paralelas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_6XNNBnRjlp0Y.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Aperturas con maquina", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/mariposa.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Press con mancuernas", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/press_manku.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "hombros": [
                { "nombre": "Press militar con agarre cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/10/oie_WlBA1Cmefanq.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones laterales", "imagen": "https://doriangym.es/wp-content/uploads/2021/11/ejecucion-elevaciones-laterales-con-mancuernas.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones frontales", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ELEVACION-FRONTAL-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Face pulls", "imagen": "https://burnfit.io/wp-content/uploads/2023/11/FACE_PULL.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "brazos": [
                { "nombre": "Curl de bíceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_7KyizCzE8xCM.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Extensiones de tríceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_8qpEpBt6F08r.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Press de banca cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/12/oie_cUHqXRt2TLnb.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Rompe craneos", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/06/barre-front.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Fondos en paralelas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_6XNNBnRjlp0Y.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Copa de triceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_UzW294JNSeIm.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "Abdomen": [
                { "nombre": "Crunches", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Planchas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_O24AjQFHvK6p.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones de piernas colgado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_a6F3n65peFFG.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Russian twists", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "gluteos": [
                { "nombre": "Sentadilla búlgara", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_a1pClH2TzpiR.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Peso muerto con mancuernas", "imagen": "https://paramujerfitness.com/wp-content/uploads/2021/11/peso-muerto-con-mancuerna.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Hip thrust", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3D1j7D16GUDg2CEePt0Vx_j02LYaoTIbnteUsJMq2WQ&s", "reps": "4 series x 12 repeticiones" }
            ]
        },

        definicion: {
            "piernas": [
                { "nombre": "Prensa de piernas", "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-Jb8gDr1thS9eZ9L6gumZqSDcBB-8QIETIBA2U4UJA&s", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Peso muerto rumano", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Zancadas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_BNDLY0nDTwH3.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Sentadillas", "imagen": "https://doriangym.es/wp-content/uploads/2022/09/pin-squat-con-barra.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Extensiones de piernas", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/leg-extension-exercice-musculation-min.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "espalda": [
                { "nombre": "Remo con mancuerna", "imagen": "https://jumpseller.s3.eu-west-1.amazonaws.com/store/grecoromana-co/assets/Remos%20con%20mancuerna%20a%20un%20brazo.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Dominadas asistidas", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/traction-musculation-dos-min.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Jalón al pecho", "imagen": "https://vitruve.fit/wp-content/uploads/2021/11/vitruvs.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Remo con barra", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_d1iO8DYEJ7aH.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "pecho": [
                { "nombre": "Press inclinado con mancuernas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_xt4zAwJtGV8l.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "press de banca", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Press de banca con agarre cerrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/12/oie_cUHqXRt2TLnb.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "butterfly en máquina", "imagen": "https://modusx.de/wp-content/uploads/butterfly-maschine-parallelgriff.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "hombros": [
                { "nombre": "Press militar con mancuernas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/10/oie_WlBA1Cmefanq.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones frontales", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ELEVACION-FRONTAL-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Arnold press", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Encogimientos de hombros", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ENCOGIMIENTO-DE-HOMBROS-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "brazos": [
                { "nombre": "Curl de bíceps con barra Z", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_74xEPw1H8Vfp.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Curl de bíceps con mancuernas", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/curl-biceps-avec-halteres-alterne-1.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Curl concentrado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_Mmun0mVsd7oc.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Extensiones de tríceps con polea", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_cLZJbe8xwOej.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Rompe craneos", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/06/barre-front.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Fondos en paralelas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_6XNNBnRjlp0Y.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Copa de triceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_UzW294JNSeIm.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "Abdomen": [
                { "nombre": "Crunches", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Bicicleta", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_s6xpR0W1n2Gt.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones de piernas colgado", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_a6F3n65peFFG.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Russian twists", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", "reps": "4 series x 12 repeticiones" }
            ],
            "gluteos": [
                { "nombre": "Sentadilla búlgara", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_a1pClH2TzpiR.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Hip Thrusts", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", "reps": "4 series x 12 repeticiones" }
            ]
        },
        bajarPeso: {
            "piernas": [
                { "nombre": "Sentadilla con salto", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/SENTADILLA-CON-SALTO-CON-MANCUERNAS.gif?fit=300%2C300&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Step-up con mancuernas", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/06/montees-sur-banc-exercice-musculation-4.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Peso muerto con mancuernas", "imagen": "https://paramujerfitness.com/wp-content/uploads/2021/11/peso-muerto-con-mancuerna.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Zancadas caminando", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/11/oie_BNDLY0nDTwH3.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "espalda": [
                { "nombre": "Remo con barra", "imagen": "https://doriangym.es/wp-content/uploads/2022/10/remo-con-barra-a-un-brazo-1.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Pull-ups asistidas", "imagen": "https://www.deportrainer.com/img/cms/Post%20de%20blog/ejercicios_espalda_gym/dominadas-en-barra-con-goma-el%C3%A1stica.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Jalón con cuerda", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/07/tirage-vertical-prise-serree-min.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Remo sentado en máquina", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_tjL7L7y33idj.gif?fit=300%2C300&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "pecho": [
                { "nombre": "Aperturas con maquina", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/mariposa.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Press con mancuernas", "imagen": "https://www.thingys.com.ar/gymapps/tutorial/press_manku.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Press de banca", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_VZ1q2XQzQfhn.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Aperturas con bandas", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/12/oie_pvGQHR2oakLr.gif?fit=300%2C300&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "hombros": [
                { "nombre": "Press militar con barra", "imagen": "https://doriangym.es/wp-content/uploads/2021/11/ejercicio-press-militar.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Elevaciones laterales", "imagen": "https://doriangym.es/wp-content/uploads/2021/11/ejecucion-elevaciones-laterales-con-mancuernas.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Arnold press", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Encogimientos de hombros", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/ENCOGIMIENTO-DE-HOMBROS-CON-MANCUERNAS.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "brazos": [
                { "nombre": "Curl de bíceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_7KyizCzE8xCM.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Extensiones de tríceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_8qpEpBt6F08r.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones"  },
                { "nombre": "Rompe craneos", "imagen": "https://boxlifemagazine.com/wp-content/uploads//2023/06/barre-front.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Copa de triceps", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_UzW294JNSeIm.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "Abdomen": [
                { "nombre": "Mountain climbers", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_YtbqRASze0gH.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Russian twists", "imagen": "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Plancha lateral", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/09/oie_zDXSsE9snQd4.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Crunch en bicicleta", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/08/oie_s6xpR0W1n2Gt.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" }
            ],
            "cardio": [
                { "nombre": "Burpees", "imagen": "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/burpee-movement.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Saltos de tijera", "imagen": "https://www.clinicacemes.com/wp-content/uploads/2020/04/jumping-jacks-2.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Correr en el lugar", "imagen": "https://i.pinimg.com/originals/a6/be/1c/a6be1c681b8fed93f642078c207a43e0.gif", "reps": "4 series x 12 repeticiones" },
                { "nombre": "Saltar la cuerda", "imagen": "https://hips.hearstapps.com/hmg-prod/images/skip-1568116471.gif?crop=0.860xw:1.00xh;0.0363xw,0&resize=980:*", "reps": "4 series x 12 repeticiones" }
            ]
        }

    }

    if (grupoMuscular == "balanceado") {
        rutinaA(usuario, contenedorEjercicios);
    } else {
        rutinaB(usuario, contenedorEjercicios);
    }

});


function rutinaA(usuario, contenedorEjercicios) {


    let edad = usuario.edad;
    let dias = usuario.dias;
    let objetivo = usuario.objetivo;

    if (edad >= 16 && edad <= 50) {

        if (objetivo == "hipertrofia") {
            generarRutinaA(dias, contenedorEjercicios.hipertrofia);
        } else if (objetivo == "definir musculo") {
            generarRutinaA(dias, contenedorEjercicios.definicion);
        } else if (objetivo == "bajar peso") {
            generarRutinaA(dias, contenedorEjercicios.bajarPeso);
        }
    }

}

function generarRutinaA(dias, ejercicios) {


    // Iterar sobre los días de la semana y asignar ejercicios para cada día
    dias.forEach(dia => {
        switch (dia) {
            case "lunes":
                imprimirEjerciciosA(dia, ejercicios.piernas, ejercicios.espalda, "Piernas", "Espalda");
                break;
            case "martes":
                imprimirEjerciciosA(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "miercoles":
                imprimirEjerciciosA(dia, ejercicios.brazos, ejercicios.Abdomen, "Brazos", "Abdominales");
                break;
            case "jueves":
                imprimirEjerciciosA(dia, ejercicios.piernas, ejercicios.gluteos, "Piernas", "Gluteos");
                break;
            case "viernes":
                imprimirEjerciciosA(dia, ejercicios.pecho, ejercicios.hombros, "Pecho", "Hombros");
                break;
            case "sábado":
                imprimirEjerciciosA(dia, ejercicios.brazos, ejercicios.Abdomen, "Brazos", "Abdominales");
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
function imprimirEjerciciosA(dia, bloqueUno, bloqueDos, nombre1, nombre2) {
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

    // crear el bloque contenedoor del nombre del grupo muscular
    const nombreEjercicio = document.createElement('div');
    nombreEjercicio.classList.add("nombre_ejercicio");
    // crear etiqueta P contenedora de la informacion 
    const pNombre = document.createElement('p');
    pNombre.textContent = nombre1;
    nombreEjercicio.appendChild(pNombre);
    bloqueEjerciciosUno.appendChild(nombreEjercicio);

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
        texto.innerHTML = `<h3>${ejercicio.nombre}</h3><h3>${ejercicio.reps}</h3>`;
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
    // crear el bloque contenedoor del nombre del grupo muscular
    const nombreEjercicio2 = document.createElement('div');
    nombreEjercicio2.classList.add("nombre_ejercicio");
    // crear etiqueta P contenedora de la informacion 
    const pNombre2 = document.createElement('p');
    pNombre2.textContent = nombre2;
    nombreEjercicio2.appendChild(pNombre2);
    bloqueEjerciciosDos.appendChild(nombreEjercicio2);
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
        texto.innerHTML = `<h3>${ejercicio.nombre}</h3><h3>${ejercicio.reps}</h3>`;
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


function rutinaB(usuario, contenedorEjercicios) {
    let grupoMuscular = usuario.musculos;
    let edad = usuario.edad;
    let dias = usuario.dias;
    let objetivo = usuario.objetivo;
    if (edad >= 16 && edad <= 50) {

        if (objetivo == "hipertrofia") {
            generarRutinaB(dias, grupoMuscular, contenedorEjercicios.hipertrofia);
        } else if (objetivo == "definir musculo") {
            generarRutinaB(dias, grupoMuscular, contenedorEjercicios.definicion);
        } else if (objetivo == "bajar peso") {
            generarRutinaB(dias, grupoMuscular, contenedorEjercicios.bajarPeso);
        }
    }
}

function generarRutinaB(dias, gruposSeleccionados, ejercicios) {


    if (dias.length >= gruposSeleccionados.length) {
        const rutina = {};

        // Inicializar la rutina para cada día con un array vacío
        dias.forEach(dia => {
            rutina[dia] = [];
        });

        let grupoIndex = 0;

        // Iterar sobre los días seleccionados
        dias.forEach(dia => {
            // Verificar que el día no sea undefined
            if (dia === undefined) {
                console.error('Error: uno de los días es undefined.');
                return;
            }

            // Obtener el grupo muscular correspondiente
            const grupo = gruposSeleccionados[grupoIndex];

            // Verificar que el grupo no sea undefined
 

            // Obtener los ejercicios del grupo
            const ejerciciosGrupo = ejercicios[grupo];

            // Verificar que los ejercicios del grupo no sean undefined
            if (ejerciciosGrupo === undefined) {
                console.error(`Error: no se encontraron ejercicios para el grupo muscular "${grupo}".`);
                return;
            }

            // Agregar todos los ejercicios del grupo al día correspondiente
            rutina[dia] = rutina[dia].concat(ejerciciosGrupo);

            // Actualizar el índice del grupo para el próximo día
            grupoIndex++;

            // Si se alcanza el último grupo muscular, volver al primero
            if (grupoIndex >= gruposSeleccionados.length) {
                grupoIndex = 0;
            }
        });


        imprimirEjerciciosB(rutina)

    } else if (diasSeleccionados < gruposSeleccionados) {



        const rutina = {};
        const gruposMusculares = Object.keys(ejercicios);
        const ejerciciosPorDia = Math.min(7, Math.ceil(gruposMusculares.length / dias.length)); // Máximo de 7 ejercicios por día
        const gruposPorDia = Math.ceil(gruposSeleccionados.length / dias.length); // Número de grupos musculares por día

        let grupoIndex = 0;

        dias.forEach(dia => {
            rutina[dia] = [];

            for (let i = 0; i < gruposPorDia; i++) {
                if (grupoIndex >= gruposSeleccionados.length) {
                    grupoIndex = 0; // Reiniciar si se supera la cantidad de grupos
                }
                const grupo = gruposSeleccionados[grupoIndex];
                const ejerciciosGrupo = ejercicios[grupo];

                // Determinar el rango de ejercicios a agregar para este grupo muscular
                const startIndex = i * ejerciciosPorDia;
                const endIndex = Math.min(startIndex + ejerciciosPorDia, ejerciciosGrupo.length);

                // Agregar los ejercicios al día correspondiente en la rutina
                rutina[dia] = rutina[dia].concat(ejerciciosGrupo.slice(startIndex, endIndex));

                grupoIndex++;
            }
        });

        imprimirEjerciciosB(rutina)
    }

}

function imprimirEjerciciosB(rutina) {


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

            // crear un contenedor para cada ejercicio del día
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
            //Crea un elemento <div> para la cantidad de reps
            const reps = document.createElement('div');
            reps.classList.add('content-card-product');
            reps.innerHTML = `<p>${ejercicio.reps}</p>`;
            ejercicioElemento.appendChild(reps);
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




//############################################### Animacion #############################################################################


document.addEventListener('DOMContentLoaded', function () {
    const titulosRutina = document.querySelectorAll('.titulo_dia');
    const bloquesDeEjercicio = document.querySelectorAll('.bloque');
    const contenedor = document.getElementById('contenedor_rutina');
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
                    bloqueEjercicioUno.classList.toggle('bloqueActive');
                    bloqueEjercicioDos.classList.toggle('bloqueActive');
                    const isActive = bloqueEjercicioUno.classList.contains('bloqueActive');
                    

                // Ajustar la  margen del contenedor
                if (bloqueEjercicioUno.classList.contains('bloqueActive')) {
                  
                    contenedor.style.padding = "20px";
                } else {
                  
                    contenedor.style.padding = "150px";
                }
                
                if (isActive) {
                    const titulos = document.querySelectorAll('.titulo_dia');
                    titulos.forEach(t => {
                        t.style.display = 'block';
                    });
                }

                   
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


