const ejercicios = {
    "piernas": [
        { "nombre": "Sentadillas", "imagen": "https://www.topvelocity.net/wp-content/uploads/2023/11/back-squat.gif" },
        { "nombre": "Prensa de piernas", "imagen": "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/pernas-leg-press-45-tradicional.gif" },
        { "nombre": "Curl de femoral", "imagen": "https://doriangym.es/wp-content/uploads/2022/10/curl-femoral-sentado.gif" },
        { "nombre": "Elevaciones de gemelos", "imagen": "https://shopguarani.com/wp-content/uploads/2022/11/Elevacao-de-panturrilha-com-barra.gif" }
    ],
    "espalda": [
        { "nombre": "Peso muerto", "imagen": "https://i0.wp.com/entrenandoc.com/wp-content/uploads/2023/07/oie_jeWBlFOzCoAY-1.gif?fit=360%2C360&ssl=1" },
        { "nombre": "Pull-ups", "imagen": "https://www.pullups.com/image" },
        { "nombre": "Remo con barra", "imagen": "https://www.remoconbarra.com/image" },
        { "nombre": "Pulldown en polea alta", "imagen": "https://www.pulldown.com/image" }
    ],
    "pecho": [
        { "nombre": "Press de banca", "imagen": "https://www.pressdebanca.com/image" },
        { "nombre": "Fondos en paralelas", "imagen": "https://www.fondosenparalelas.com/image" },
        { "nombre": "Aperturas con mancuernas", "imagen": "https://www.aperturasconmancuernas.com/image" },
        { "nombre": "Flexiones", "imagen": "https://www.flexiones.com/image" }
    ],
    "hombros": [
        { "nombre": "Press militar", "imagen": "https://www.pressmilitar.com/image" },
        { "nombre": "Elevaciones laterales", "imagen": "https://www.elevacioneslaterales.com/image" },
        { "nombre": "Elevaciones frontales", "imagen": "https://www.elevacionesfrontales.com/image" },
        { "nombre": "Face pulls", "imagen": "https://www.facepulls.com/image" }
    ],
    "brazos": [
        { "nombre": "Curl de bíceps", "imagen": "https://www.curldebiceps.com/image" },
        { "nombre": "Extensiones de tríceps", "imagen": "https://www.extensionesdetriceps.com/image" },
        { "nombre": "Curl martillo", "imagen": "https://www.curlmartillo.com/image" },
        { "nombre": "Press de banca cerrado", "imagen": "https://www.pressdebancacerrado.com/image" }
    ],
    "abdominales": [
        { "nombre": "Crunches", "imagen": "https://www.crunches.com/image" },
        { "nombre": "Planchas", "imagen": "https://www.planchas.com/image" },
        { "nombre": "Elevaciones de piernas colgado", "imagen": "https://www.elevacionesdepiernascolgado.com/image" },
        { "nombre": "Russian twists", "imagen": "https://www.russiantwists.com/image" }
    ]
};

function generarRutina(diasSeleccionados, gruposMuscularesSeleccionados) {
    const rutina = {};
    const gruposPorDia = Math.ceil(gruposMuscularesSeleccionados.length / diasSeleccionados.length);
    let grupoIndex = 0;

    diasSeleccionados.forEach(dia => {
        rutina[dia] = [];

        for (let i = 0; i < gruposPorDia; i++) {
            const grupo = gruposMuscularesSeleccionados[grupoIndex];
            const ejerciciosGrupo = ejercicios[grupo];
            rutina[dia] = rutina[dia].concat(ejerciciosGrupo);

            grupoIndex = (grupoIndex + 1) % gruposMuscularesSeleccionados.length;
        }
    });

    return rutina;
}

// Ejemplo de uso
const diasSeleccionados = ["lunes", "martes", "miércoles","jueves","viernes"];
const gruposMuscularesSeleccionados = ["piernas", "espalda", "pecho","hombros"];

const rutinaPersonalizada = generarRutina(diasSeleccionados, gruposMuscularesSeleccionados);

console.log(rutinaPersonalizada);



localStorage.removeItem('userProfiles');
console.log("borrado exitoso");