document.getElementById('get-advice').addEventListener('click', function() {
    const adviceElement = document.getElementById('advice');
    const selectedOption = document.getElementById('gym-options').value;
    let advice = '';

    switch (selectedOption) {
        case 'warmup':
            advice = 'Realiza un calentamiento de al menos 10 minutos antes de comenzar tu rutina.';
            break;
        case 'cardio':
            advice = 'Intenta hacer al menos 30 minutos de cardio, tres veces por semana.';
            break;
        case 'strength':
            advice = 'Enfócate en la técnica antes de aumentar el peso para evitar lesiones.';
            break;
        case 'nutrition':
            advice = 'Mantén una dieta equilibrada y consume proteínas después de tu entrenamiento.';
            break;
        case 'recovery':
            advice = 'Asegúrate de descansar lo suficiente y estirar después de tus sesiones de ejercicio.';
            break;
        default:
            advice = 'Por favor, selecciona una opción para obtener un consejo.';
    }

    adviceElement.textContent = advice;
});