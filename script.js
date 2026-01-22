function abrirWhatsApp() {
    window.open("https://wa.me/+5534984328009", "_blank");
}

/* ANIMAÇÃO AO SCROLL */
const elementos = document.querySelectorAll('.animate');

function animarScroll() {
    const alturaTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const topo = el.getBoundingClientRect().top;

        if (topo < alturaTela) {
            el.classList.add('active');
        }
    });

}
function moveClientes(direction) {
    const container = document.querySelector('.clientes-container');
    const scrollAmount = 240;

    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
