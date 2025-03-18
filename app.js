// Función que modifica el texto de un elemento HTML
function objetoYtexto(objeto, texto) {
    let objetoHTML = document.querySelector(objeto);
    objetoHTML.innerHTML = texto;
}

// Cambios en los textos iniciales de la página
objetoYtexto('h1', 'Descubre tu amigo secreto');
objetoYtexto('h2', 'Introduce los nombres de tus amigos');

// Arreglo para almacenar participantes
let friends = [];

// Función que captura el valor del campo de entrada y lo agrega a la lista
function capturaDeNombres() {

// Obtener el valor ingresado en el campo de texto
    let nombresDeAmigos = document.getElementById('amigo').value;

// Validar que no esté vacío
    if (nombresDeAmigos === "") {
        alert('Por favor, inserte un nombre');
        return;
    }
// Comprobar nombres duplicados
    if (!friends.includes(nombresDeAmigos)) {
    friends.push(nombresDeAmigos);
    } else {
    alert('Este nombre ya fue agregado.');
    }
// Mostrar en la consola los siguientes elementos:
    console.log(nombresDeAmigos);
    console.log(friends);

// Vaciar el campo de entrada después de digitar un nombre
limpiarCaja();
}
