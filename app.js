// Función que modifica el texto de un elemento HTML
function objetoYtexto(objeto, texto) {
    let objetoHTML = document.querySelector(objeto);
    objetoHTML.innerHTML = texto;
}

// Cambios en los textos iniciales de la página
objetoYtexto('h1', 'Descubre tu amigo secreto');
objetoYtexto('h2', 'Introduce los nombres de tus amigos');

