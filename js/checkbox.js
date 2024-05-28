

const datos_pagina = document.getElementById('btn').value;

if (datos_pagina == 'musculos') {


    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const balanceadoCheckbox = document.getElementById('balanceado');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (checkbox.id === 'balanceado' && checkbox.checked) {
                    // Si se selecciona "Balanceado", desactivar las selecciones de los otros checkboxes
                    checkboxes.forEach(cb => {
                        if (cb !== checkbox) {
                            cb.checked = false;
                        }
                    });
                } else if (balanceadoCheckbox.checked && checkbox.checked) {
                    balanceadoCheckbox.checked = false;
                }
            });
        });
    });
} else if (datos_pagina == 'dias') {


    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const limiteDias = 6;

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);

                if (checkedCheckboxes.length > limiteDias) {
                    checkbox.checked = false;

                    const contenedor_alerta = document.getElementsByClassName('mensaje_alerta')[0];
                    const mensaje = document.createElement('p');
                    mensaje.classList.add("texto_alerta");
                    mensaje.textContent = "Debe descansar por lo menos un dia a la semana";
                    contenedor_alerta.appendChild(mensaje);
                    contenedor_alerta.classList.add("activar_alerta");

                    function ocultarAlerta() {
                        contenedor_alerta.classList.remove("activar_alerta");
                        mensaje.textContent = "";
                    }

                    const tiempoVisible = 2000; // Por ejemplo, 1000 milisegundos = 1 segundo
                    setTimeout(ocultarAlerta, tiempoVisible);
                }
            });
        });
    });

} else if (datos_pagina == 'objetivo') {

    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    checkboxes.forEach(cb => {
                        if (cb !== checkbox) {
                            cb.checked = false;
                        }
                    });
                }
            });
        });
    });

} else if (datos_pagina == 'experiencia') {
    document.addEventListener('DOMContentLoaded', function () {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (checkbox.checked) {
                    checkboxes.forEach(cb => {
                        if (cb !== checkbox) {
                            cb.checked = false;
                        }
                    });
                }
            });
        });
    });
}