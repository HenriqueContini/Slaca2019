const botaoMenu = document.querySelector('.cabecalho__botao__menu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu--ativo')
    botaoMenu.classList.toggle('cabecalho__botao__menu--x')
})