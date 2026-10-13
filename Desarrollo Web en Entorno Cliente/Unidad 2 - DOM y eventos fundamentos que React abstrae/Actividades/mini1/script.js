const encabezado = document.querySelector('#titulo');
encabezado.textContent = 'Taller de JavaScript';

const lista = document.querySelector('#lista');

const nuevoElemento = document.createElement('li');   // Crea el elemento <li>
nuevoElemento.textContent = 'Darío Bonilla Perea';    // Le asigna el texto
lista.appendChild(nuevoElemento);                     // Lo añade al final de la lista

const noEncontrado = document.querySelector('#noEsta');
console.log(noEncontrado);

const saludar = document.querySelector('#saludar');
saludar.addEventListener('click', () => nuevoParrafo.textContent = 'Bienvenido!!!');

