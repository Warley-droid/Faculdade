// Array
const arrayLinksNavegacao = ['Home', 'Sobre', 'Contato']

// Base de dados
const dadosDosProdutos = {
    produto: [
        {
            codigo: 1,
            nome: "Nome do produto",
            imagem: "./images/imagem-produto.jpg",
            preco: 99.90,
            descricao: "Descrição do produto",
            fabricante: "Nome do fabricante",
            cor: "Preto"
        },
        {
            codigo: 2,
            nome: "Nome do segundo produto",
            imagem: "./images/imagem-produto2.jpg",
            preco: 149.90,
            descricao: "Descrição do segundo produto",
            fabricante: "Nome do fabricante",
            cor: "Branco"
        }
    ]
}

// Variáveis dos elementos daa estrutura HTML
const elementoHeader = document.querySelector('header')
const elementoNav = document.querySelector('#nav-section')
const elementoMain = document.querySelector('main')
const elementoAside = document.querySelector('aside')
const elementoFooter = document.querySelector('footer')

// Função para criar os elementos
function criaElemento (qual, texto, id, classe, onde, caminhoImagem) {
    const elemento = document.createElement(qual)
    elemento.innerText = texto
    elemento.id = id
    elemento.className = classe

    if (qual === 'a') {
        elemento.href = ''
    }

    if (qual === 'img') {
        elemento.src = caminhoImagem
    }

    onde.appendChild(elemento)

    return elemento
}

// Adicionei o título do Header
function adicionaElementosHeader(){
    criaElemento('h1', 'Innovate Tech Store', '', 'title', elementoHeader)
}

// Adicionei os links na barra de navegação
function adicionaElementosNav(){
    for (let index = 0; index < arrayLinksNavegacao.length; index += 1){
        const elementoDiv = criaElemento ('div', '', '', 'navElemento', elementoNav)

        criaElemento('a', arrayLinksNavegacao[index], '', 'navLink', elementoDiv)
    }
}

// Adicionei os elementos no Main
function adicionaImagensMain(){
    const sectionPrincipal = criaElemento('section', '', '', 'section-main', elementoMain)

    for (let index = 0; index < dadosDosProdutos.produto.length; index += 1)
    {   const elementoDiv = criaElemento('div', '', '', 'sectionElement', sectionPrincipal)

        criaElemento('img', '', '', 'imagemProduto', elementoDiv, dadosDosProdutos.produto[index].imagem)

        criaElemento('p', dadosDosProdutos.produto[index].nome, '', 'imagemProduto', elementoDiv)

        criaElemento('button', 'mais info', dadosDosProdutos.produto[index].codigo, 'botao', elementoDiv)
    }
}

window.onload = function(){
    adicionaElementosHeader()
    adicionaElementosNav()
    adicionaImagensMain()
}