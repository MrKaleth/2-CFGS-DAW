// 1. Seleccionamos los elementos del DOM usando querySelector
const inputNombre = document.querySelector('#inputNombre');
const saludo = document.querySelector('#saludo');
const btnLimpiar = document.querySelector('#btnLimpiar');

inputNombre.addEventListener('input', () => {
    const nombre = inputNombre.value.trim();

    if (nombre !== "") {
        // Actualiza el párrafo con el saludo
        saludo.textContent = `Hola, ${nombre}.`;
    } else {
        // Si el usuario borra todo manualmente, el saludo se vacía
        saludo.textContent = "";
    }
});

// 3. Escuchamos el evento 'click' en el botón Limpiar
btnLimpiar.addEventListener('click', () => {
    inputNombre.value = ""; // Borra el contenido del campo de texto
    saludo.textContent = ""; // Borra el texto del saludo
});
