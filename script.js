const nav = document.querySelector('#Menu_ple');
const abrir= document.querySelector('#abrir_ple');
const cerrar= document.querySelector('#cerrar_ple');

abrir.addEventListener("click", ()=>{
    nav.classList.add("visible")
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible")
})

window.addEventListener('resize', function() {
    const elementos = document.querySelectorAll('[data-aos]');
    elementos.forEach(elemento => {
        if (window.innerWidth < 768) {
            elemento.setAttribute('data-aos', 'fade-up');
        } else {
            elemento.setAttribute('data-aos', 'fade');
        }
    });
});
