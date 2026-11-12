// Variáveis
const todosParagrafos = document.querySelectorAll('.text')
todosParagrafos[1].style.textDecoration = 'underline black'

const secGeral = document.querySelector('#sec-geral')

// Criação da div dentro da #sec-geral
const divCriada = document.createElement('div')
divCriada.id = 'div-id'
divCriada.className = 'div-class'

secGeral.appendChild (divCriada)

// Criação da img dentro da div que foi criada por dentro da secGeral (#sec-geral)
const imgCriada = document.createElement('img')
imgCriada.id = 'img-id'
imgCriada.className = 'img-class'
imgCriada.src = 'albert.jpg'

divCriada.appendChild (imgCriada)

// Eventos criados para a secGeral (#sec-geral)
secGeral.addEventListener('mouseover', function(){
    secGeral.style.backgroundColor = 'rgb(24, 210, 148)'
})

secGeral.addEventListener('mouseout', function(){
    secGeral.style.backgroundColor = ''
})

// Criação do botão que gera rgb aleatório
const botao = document.createElement('button')
botao.id = 'id-botao'
botao.className = 'class-botao'
botao.innerText = 'Clique e veja uma cor aleatória!'

secGeral.appendChild(botao)

botao.addEventListener('click', function(){

    const rgb = []

    for (let index = 0; index < 3; index += 1){
        const aleatorio = Math.floor(Math.random() * 256)
        rgb.push(aleatorio)
    }

botao.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
})