// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Juan Carlos Paulino Fonseca Gómez

// Lista para almacenar los nombres ingresados
let listaAmigos = [];

// Agregar un nombre desde el input a la lista de amigos
function incluirNombre() {
    let campoTexto = document.getElementById('amigo');
    let nuevoNombre = campoTexto.value;
    
    if (!nuevoNombre) {
        alert("Ingresa un amigo.");
        return;
    } else {
        // Incorporar el nuevo nombre al arreglo
        listaAmigos.push(nuevoNombre);
        // Vaciar el input y devolverle el foco
        campoTexto.value = '';
        campoTexto.focus();
        actualizarLista();
    }
}

function actualizarLista() {
    // Referencia al elemento HTML que mostrará los nombres
    let contenedorLista = document.getElementById('listaAmigos');
    // Limpiar contenido previo para evitar duplicaciones
    contenedorLista.innerHTML = "";

    // Recorrer el arreglo y agregar cada nombre como un elemento de lista
    for (let i = 0; i < listaAmigos.length; i++) {
        let elementoLista = document.createElement("li");
        elementoLista.textContent = listaAmigos[i];
        contenedorLista.appendChild(elementoLista);
    }
}

// Seleccionar aleatoriamente un nombre de la lista
function elegirAleatorio() {
    // Verificar si hay nombres en la lista
    if (listaAmigos.length === 0) {
        alert("Nos quedamos sin amigos para elegir");
        return;
    }
    
    // Generar un índice aleatorio dentro del rango de la lista
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // Extraer y eliminar el nombre seleccionado
    let nombreSeleccionado = listaAmigos.splice(indiceAleatorio, 1)[0];
    
    // Mostrar el resultado en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo que agarraste es: ${nombreSeleccionado}`;
    actualizarLista();

    // Si ya no quedan nombres, mostrar una alerta
    if (listaAmigos.length === 0) {
        setTimeout(() => {
            alert("ya salieron todos los amigos");
        }, 600);
    }

    // Limpiar la visualización de la lista
    let contenedorLista = document.getElementById('listaAmigos');
    contenedorLista.innerHTML = "";
}

// Alias para mantener compatibilidad con index.html
function agregarAmigo() {
    incluirNombre();
}

function sortearAmigo() {
    elegirAleatorio();
}

