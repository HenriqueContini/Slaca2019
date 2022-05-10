// Botões
const botaoCriarTopico = document.querySelector('.compartilhar-ideias__botao__criar-topico')
const botaoEnviarTopico = document.querySelector('.criar-topico__enviar')
const botaoNovoTopico = document.querySelector('.topico-enviado__botao__novo-topico')

// Telas de criação de tópicos
const bannerInicial = document.querySelector('.compartilhar-ideias__banner')
const criarTopico = document.querySelector('.criar-topico')
const topicoEnviado = document.querySelector('.topico-enviado')

const topicos = document.querySelector('.topicos')
const mensagemErro = document.querySelector('.criar-topico__span__erro')

botaoCriarTopico.addEventListener('click', () => {
    bannerInicial.classList.toggle('compartilhar-ideias__banner--ativo')
    criarTopico.classList.toggle('criar-topico--ativo')
})

botaoNovoTopico.addEventListener('click', () => {
    criarTopico.classList.toggle('criar-topico--ativo')
    topicoEnviado.classList.toggle('topico-enviado--ativo')
})

botaoEnviarTopico.addEventListener('click', (event) => {
    event.preventDefault()
    
    let assunto = document.getElementById('assunto')
    let conteudo = document.getElementById('conteudo')

    if(assunto.value == '' || conteudo.value == ''){
        mensagemErro.classList.add('criar-topico__span__erro--ativo')
    } else {
        criarTopico.classList.toggle('criar-topico--ativo')
        topicoEnviado.classList.toggle('topico-enviado--ativo')
        mensagemErro.classList.remove('criar-topico__span__erro--ativo')
        
        criarCardTopico(assunto.value, conteudo.value)
    }

    assunto.value = ''
    conteudo.value = ''
})

function criarCardTopico(assunto, conteudo){
    let cardTopico = document.createElement('div')
    cardTopico.classList.add('card-topico')

    let conteudoHTML = `
        <p class="titulo__laranja card-topico__assunto">${assunto}</p>
        <p class="texto card-topico__autor">Henrique Contini</p>
        <p class="texto__cinza-escuro card-topico__conteudo">${conteudo}</p>
        <div class="card-topico__social">
            <img class="card-topico__botao__informacoes" src="./src/icone-tres-pontinhos.svg" alt="Mais informações">
            <button type="button" class="card-topico__botao__like"></button>
            <p class="texto">0 like</p>
            <p class="texto">0 resposta</p>
        </div>
    `

    cardTopico.innerHTML = conteudoHTML

    topicos.appendChild(cardTopico)
}