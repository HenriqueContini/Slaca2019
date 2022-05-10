const botaoVerMais = document.querySelector('.resumo__ver-mais')
const textoCompleto = document.querySelector('.resumo__texto-completo')

botaoVerMais.addEventListener('click', () => {
    if(botaoVerMais.innerText == '...ver mais'){
        botaoVerMais.innerText = 'ver menos'
    } else {
        botaoVerMais.innerText = '...ver mais'
    }
    textoCompleto.classList.toggle('resumo__texto-completo--ativo')
})