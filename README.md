# challenge-amigo-secreto
El objetivo principal de este desafío es desarrollar habilidades en lógica de programación, por eso hemos proporcionado el HTML y CSS ya preparados. De esta manera, puedes enfocarte exclusivamente en construir la lógica del código JavaScript, aplicando conceptos clave como funciones, arrays, condicionales y variables. Esto te permitirá centrarte en resolver el problema y mejorar el razonamiento lógico, sin preocuparse por la estructura visual del proyecto.

#### Instrucciones:
El código "Sorteo Amigos" permite agregar nombres a una lista y luego seleccionar uno al azar. Aquí te explico su funcionamiento:

### 1. Agregar amigos
Cuando el usuario escribe un nombre en un campo de texto y presiona un botón, la función ```incluirNombre():```
Toma el valor del input.
Lo agrega al array listaAmigos.
Limpia el input y actualiza la lista mostrada en la pantalla.

### 2. Mostrar la lista de amigos
Cada vez que se agrega un amigo o se hace un sorteo, la función actualizarLista():
Borra la lista anterior en el **HTML**.
Recorre el array listaAmigos y agrega cada nombre como un <li>.

### 3. Realizar el sorteo
Al presionar el botón para sortear, la función elegirAleatorio():
Verifica si la lista tiene nombres.
Genera un número aleatorio dentro del tamaño de listaAmigos.
Usa splice() para extraer y eliminar el nombre seleccionado del array.
Muestra el nombre sorteado en la pantalla.

### 4. Vaciar la lista cuando se sortea todo
Si ya no quedan amigos en listaAmigos, se muestra una alerta después de 600ms.
También se limpia la lista en la interfaz.
![Screen Shot 2025-03-18 at 0 55 12](https://github.com/user-attachments/assets/7d1b5ba6-0f39-43de-b268-be3c341ea7af)
