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

    // titulo de saludo ubicado en el header
    const mensajeHeader = document.getElementById('mensaje_header');
    const mensaje = document.createElement('p');
    mensaje.innerHTML = `Bienvenido <span>${usuario.nombre} </span> `;
    mensajeHeader.appendChild(mensaje);



    rutina(usuario);

});

function rutina(usuario) {

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
                { "nombre": "Curl martillo", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/06/oie_hsOXQMAjXz1l.gif?fit=360%2C360&ssl=1", "reps": "4 series x 12 repeticiones" },
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
    const grupoMuscular = usuario.musculos;
    const experiencia = usuario.experiencia;
    const objetivo = usuario.objetivo;
    const dias = usuario.dias;

    const rutina = {};


    let objetivoEjercios = null;

    if (objetivo == 'hipertrofia') {
        objetivoEjercios = contenedorEjercicios.hipertrofia;
    } else if (objetivo == 'definir musculo') {
        objetivoEjercios = contenedorEjercicios.definicion;
    } else if (objetivo == 'bajar peso') {
        objetivoEjercios = contenedorEjercicios.bajarPeso;
    } else {
        console.log("no hay un objetivo seleccionado ");
        return
    }

    const ejercicioExperiencia = {};

    if (experiencia == 'principiante') {


        for (const grupo of grupoMuscular) {
            const ejercicios = objetivoEjercios[grupo];
            const ejerciciosPrincipiante = ejercicios.slice(0, 3);
            ejercicioExperiencia[grupo] = ejerciciosPrincipiante;
        }

    } else if (experiencia == 'intermedio' || experiencia == 'avanzado') {
        for (const grupo of grupoMuscular) {
            const ejercicios = objetivoEjercios[grupo];
            const ejerciciosPrincipiante = ejercicios.slice(0, 5);
            ejercicioExperiencia[grupo] = ejerciciosPrincipiante;
        }
    }


    dias.forEach(dia => {
        rutina[dia] = [];
    });

    const gruposBarajados = grupoMuscular.sort(() => Math.random() - 0.5);

    let indiceGrupo = 0;
    dias.forEach(dia => {
        rutina[dia] = [];
        const grupo1 = gruposBarajados[indiceGrupo];
        const grupo2 = gruposBarajados[(indiceGrupo + 1) % grupoMuscular.length];
        const ejercicios1 = ejercicioExperiencia[grupo1];
        const ejercicios2 = ejercicioExperiencia[grupo2];
        rutina[dia].push({ grupo: grupo1, ejercicios: ejercicios1 });
        rutina[dia].push({ grupo: grupo2, ejercicios: ejercicios2 });
        indiceGrupo = (indiceGrupo + 2) % grupoMuscular.length;
    });
    console.log(rutina);
    imprimir(rutina);
}


function imprimir(rutina) {
    // Contenedor donde se muestra la rutina
    const rutinaContainer = document.getElementById('contenedor_rutina');

    for (let dia in rutina) {
        if (Array.isArray(rutina[dia])) {
            // Crear un contenedor de grupo
            const contenedorGrupo = document.createElement('div');
            contenedorGrupo.classList.add('contenedor_grupo'); // Agregar clase

            // Crear un elemento <div> para el día
            const diaElemento = document.createElement('div');
            diaElemento.classList.add('titulo_dia');
            const tituloDia = document.createElement('h2');
            tituloDia.textContent = `Día: ${dia}`;
            diaElemento.appendChild(tituloDia);

            // Crear un bloque de ejercicios para el día
            const bloqueEjercicios = document.createElement('div');
            bloqueEjercicios.classList.add('bloque');

            // Iterar sobre los grupos de ejercicios de este día
            rutina[dia].forEach(grupo => {
                // Crear un contenedor para cada grupo de ejercicios del día
                const grupoElemento = document.createElement('div');
                grupoElemento.classList.add('grupo');

                // Crear un contenedor para cada nombre de grupo muscular del día

                const elementoTitulo = document.createElement('div');
                elementoTitulo.classList.add('nombre_ejercicio')

                // Crear un elemento <h3> para el nombre del grupo muscular
                const tituloGrupo = document.createElement('h3');
                tituloGrupo.textContent = `Grupo Muscular: ${grupo.grupo}`;
                elementoTitulo.appendChild(tituloGrupo);
                bloqueEjercicios.appendChild(elementoTitulo);
                // Iterar sobre los ejercicios de este grupo
                grupo.ejercicios.forEach(ejercicio => {
                    // Crear un contenedor para cada ejercicio del grupo
                    const ejercicioElemento = document.createElement('div');
                    ejercicioElemento.classList.add('card-product');


                    // Crear un contenedor para cada ejercicio del grupo
                    const contenedorImg = document.createElement('div');
                    contenedorImg.classList.add('container-img');

                    // Crear un elemento <img> para la imagen del ejercicio
                    const img = document.createElement('img');
                    img.src = ejercicio.imagen;
                    contenedorImg.appendChild(img);
                    ejercicioElemento.appendChild(contenedorImg);


                    // Crear un elemento <p> para el nombre del ejercicio
                    const nombreEjercicio = document.createElement('p');
                    nombreEjercicio.textContent = ejercicio.nombre;
                    ejercicioElemento.appendChild(nombreEjercicio);

                    // Crear un elemento <p> para la cantidad de repeticiones
                    const repsEjercicio = document.createElement('p');
                    repsEjercicio.textContent = `Reps: ${ejercicio.reps}`;
                    ejercicioElemento.appendChild(repsEjercicio);

                    // Agregar el elemento del ejercicio al contenedor del grupo
                    grupoElemento.appendChild(ejercicioElemento);
                });

                // Agregar el contenedor del grupo al bloque de ejercicios del día
                bloqueEjercicios.appendChild(grupoElemento);
            });

            // Agregar el título del día y el bloque de ejercicios al contenedor de grupo
            contenedorGrupo.appendChild(diaElemento);
            contenedorGrupo.appendChild(bloqueEjercicios);

            // Agregar el contenedor de grupo al contenedor de rutina
            rutinaContainer.appendChild(contenedorGrupo);
        } else {
            console.log(`${dia}: ${rutina[dia]}`);
        }
    }



}





document.addEventListener('DOMContentLoaded', function () {
    const titulosRutina = document.querySelectorAll('.titulo_dia');
    const bloquesDeEjercicio = document.querySelectorAll('.bloque');
    const contenedor = document.getElementById('contenedor_rutina');



    titulosRutina.forEach((titulo, index) => {
        titulo.addEventListener('click', function () {
            // Accede al bloque de ejercicio correspondiente al título
            const bloqueEjercicio = bloquesDeEjercicio[index];
            if (bloqueEjercicio) {
                // Realiza alguna acción con el bloque de ejercicio
                bloqueEjercicio.classList.toggle('bloqueActive');
                // (Opcional) También puedes realizar otras acciones, como mostrar u ocultar más contenido
            }
        });
    });


})
