function muda_catalogo(n) {
    var catalogos = document.querySelectorAll('.catalogo');

    catalogos.forEach(catalogo => {
        catalogo.classList.add('hidden');
    });

    catalogos[n].classList.remove('hidden');
}

function refresh(){
    var catalogos = document.querySelectorAll('.o');
    catalogos.forEach(catalogo => {
        catalogo.classList.remove('hidden');
    });
}