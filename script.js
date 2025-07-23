const tema = document.querySelector('.tema');
const root = document.documentElement;

function mudarTema() {
    const temaAtual = root.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        root.setAttribute('data-theme', 'light');
    } else {
        root.setAttribute('data-theme', 'dark');
    }
    tema.classList.toggle('bi-sun');
    tema.classList.toggle('bi-moon');
}

tema.addEventListener('click', mudarTema);