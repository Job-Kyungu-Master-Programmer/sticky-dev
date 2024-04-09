


let header = document.querySelector('.header') // Iic nous avons d'abord recuperer notre Header, 
// Et la en-dessous , nous avons notre windown

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
})