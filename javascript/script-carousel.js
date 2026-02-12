let id_elemento = 0;

const elemento_html = document.querySelectorAll(".elemento-carousel");

function mostrarElemento() {
    elemento_html.forEach(item => item.classList.remove("activo"));
    elemento_html[id_elemento].classList.add("activo");
    id_elemento = (id_elemento + 1) % elemento_html.length;

}

setInterval(mostrarElemento, 3000);