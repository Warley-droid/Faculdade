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

// Variáveis dos elementos da estrutura HTML
const elementoHeader = document.querySelector('header')
const elementoNav = document.querySelector('#nav-section')
const elementoMain = document.querySelector('main')
const elementoAside = document.querySelector('aside')
const elementoFooter = document.querySelector('footer')

// Função para criar os elementos
function criaElemento(qual, texto, id, classe, onde, caminhoImagem) {

    const elemento = document.createElement(qual)

    elemento.innerText = texto
    elemento.id = id
    elemento.className = classe

    if (qual === 'a') {
        elemento.href = '#'
    }

    if (qual === 'img') {
        elemento.src = caminhoImagem
    }

    onde.appendChild(elemento)

    return elemento
}

// Adicionando o título do Header
function adicionaElementosHeader() {

    criaElemento('h1','Innovate Tech Store','','title',elementoHeader)
}

// Adicionando os links na barra de navegação
function adicionaElementosNav() {

    for (let index = 0; index < arrayLinksNavegacao.length; index += 1) {

        const elementoDiv = criaElemento('div','','','navElemento',
            elementoNav)

        criaElemento('a',arrayLinksNavegacao[index],'','navLink',elementoDiv)
    }
}

// Adicionando os elementos no Main
function adicionaImagensMain() {

    const sectionPrincipal = criaElemento('section','','','section-main',elementoMain)

    for (let index = 0; index < dadosDosProdutos.produto.length; index += 1) {

        const elementoDiv = criaElemento('div','','','sectionElement',sectionPrincipal)

        criaElemento('img','','','imagemProduto',elementoDiv,dadosDosProdutos.produto[index].imagem)

        criaElemento('p',dadosDosProdutos.produto[index].nome,'','imagemProduto',elementoDiv)

        criaElemento('button','mais info',dadosDosProdutos.produto[index].codigo,'botao',elementoDiv)
    }
}

// Adicionando elementos no Aside
function adicionaElementosIniciaisAside() {

    let tamanhoDoArray = dadosDosProdutos.produto.length

    // Selecionando o último produto
    const produtoDestaque = dadosDosProdutos.produto[tamanhoDoArray - 1]

    criaElemento('p','Produto em destaque','','aside-inicial',elementoAside)

    criaElemento('img','','','imagem-produto',elementoAside,produtoDestaque.imagem)

    criaElemento('p',produtoDestaque.nome,'prod-destaque','imagemProduto',elementoAside)

    criaElemento('button','mais info',produtoDestaque.codigo,'botao',elementoAside)
}

// Adicionando o rodapé
function adicionaRodape() {

    const paragrafoRodape = criaElemento('p','2026 Innovate Tech Store. Todos os direitos reservados','','',elementoFooter)

    return paragrafoRodape
}

// Adicionei os eventos nos botões

function eventoNosBotoes(){
    const buttons = document.querySelectorAll('button')

    for (let index = 0; index < buttons.length; index += 1){
        buttons[index].addEventListener('click', adicionaDetalhesAside)
    }
}

// Adicionei detalhes dos produtos
function adicionaDetalhesAside(event) {

    elementoAside.innerHTML = ''
    const codigo = event.currentTarget.id
    const produtoSelecionado = dadosDosProdutos.produto.find(
    produto => produto.codigo === Number(codigo)
    )
    if (!produtoSelecionado) {
    return
    }
    const chavesDeProdutos = Object.keys(produtoSelecionado)

    for (let index = 0; index < chavesDeProdutos.length; index += 1) {

        let texto = chavesDeProdutos[index]

        if (texto === 'imagem') {

            criaElemento('img','','','imagem-produto',elementoAside,produtoSelecionado.imagem)

        } else {

            criaElemento('p',`${texto.charAt(0).toUpperCase() + texto.substring(1)} : ${produtoSelecionado[texto]}`,'',`prod-${texto}`,
            elementoAside)
        }
    }
}

// Carregamento dos elementos da página
window.onload = function() {
    adicionaElementosHeader()
    adicionaElementosNav()
    adicionaImagensMain()
    adicionaElementosIniciaisAside()
    adicionaRodape()
    eventoNosBotoes()
}