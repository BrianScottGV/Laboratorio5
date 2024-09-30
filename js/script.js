const App = (() => {

    // Seleccionamos los elementos HTML necesarios
    const htmlElements = {
        inputText: document.querySelector('#input'),
        selectColor: document.querySelector('#select'),
        responseDiv: document.querySelector('#response')
    }

    // Manejo de eventos
    const handlers = {
        onInputTextChange() {
            // No actualizamos el contenido del div, solo el color de fondo
            const selectedColor = htmlElements.selectColor.value;
            htmlElements.responseDiv.style.backgroundColor = selectedColor; // Cambiar el color de fondo del div
        },
        onColorChange() {
            const inputValue = htmlElements.inputText.value; 
            htmlElements.responseDiv.style.backgroundColor = htmlElements.selectColor.value; // Cambiar el color de fondo del div
        }
    }

    // Asignamos los eventos a los elementos
    const bindEvents = () => {
        htmlElements.inputText.addEventListener('input', handlers.onInputTextChange); // Evento para cambiar el color al escribir
        htmlElements.selectColor.addEventListener('change', handlers.onColorChange);  // Evento para cambiar el color al seleccionar
    }

    // Inicializamos el módulo
    return {
        init() {
            bindEvents();
        }
    }

})();

// Inicializamos la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
