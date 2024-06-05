'use strict'
const promotionDb = [
    {
        id: 1,
        title: 'O menino que desenhava monstros',
        author: 'Keith Donohue',
        description: 'desde que quase se afogou no oceano três anos antes, Jack Peter Keenan, de dez anos, tem um medo mortal de se aventurar ao ar livre. Recusando-se a deixar sua casa em uma pequena cidade costeira do Maine, Jack Peter passa seu tempo desenhando monstros. Quando esses desenhos ganham vida própria, ninguém está a salvo do terror que inspiram. Sua mãe, Holly, começa a ouvir sons estranhos à noite vindos do oceano, e ela busca respostas do padre católico local e de sua governanta japonesa, que enchem sua cabeça com histórias de naufrágios e fantasmas. Seu pai, Tim, vagueia pela praia, procurando freneticamente por uma estranha aparição correndo solta nas dunas. E o único amigo do menino, Nick, fica desamparado no poder misterioso dos desenhos. Enquanto aqueles ao redor de Jack Peter são assombrados pelo que eles pensam que vêem, só ele sabe a verdade por trás das ocorrências assustadoras enquanto o mundo exterior invade todos eles.',
        gender: 'ficção',
        oldPrice: '9956,63 Kz',
        newPrice: '9948,30 Kz',
        image: './img/menino-que-desenhava-monstros.png',
    },
    {
        id: 2,
        title: 'Ed & Lorraine Warren - Demonologistas',
        author: 'Gerald Brittle',
        description: 'O demonologista revela o grave processo religioso por trás de eventos sobrenaturais e como isso pode acontecer com você. Usado como texto em seminários e salas de aula, este é um livro que você não consegue largar. Por mais de cinco décadas, Ed e Loraine Warren foram considerados os maiores especialistas da América em demonologia e exorcismo. Com mais de 3.000 investigações em seu crédito, eles revelam o que realmente quebra a paz em casas assombradas.',
        gender: 'biografia',
        oldPrice: ' 5539,20 Kz',
        newPrice: ' 4427,44 Kz',
        image: './img/demonologistas.png',
    },
    {
        id: 3,
        title: 'Amityville',
        author: 'Jay Anson',
        description: 'baseado nas alegações de experiências paranormais da família Lutz, mas gerou polêmica e ações judiciais sobre sua veracidade.',
        gender: 'horror',
        oldPrice: ' 9574,99 Kz',
        newPrice: ' 7699,99 Kz',
        image: './img/amityville.png',
    },
]


const catalogueDb = [
    {
        id: 1,
        title: 'Antologia Dark',
        author: 'Cesar Bravo',
        description: 'uma homenagem à obra de Stephen King e um agradecimento por suas palavras terem formado leitores e vidas. A antologia é o primeiro volume de uma coleção que vai promover a importância do conto no universo do horror e o diálogo entre autores nacionais e grandes mestres da literatura dark.',
        gender: 'ficção',
        oldPrice: '8854,90 Kz',
        newPrice: '7849,41 Kz',
        image: './img/antologia-dark.png',
    },
    {
        id: 2,
        title: 'Evangelho de Sangue',
        author: 'Clive Barker',
        description: 'todo mal tem uma origem. Pinhead está de volta. Por aproximadamente trinta anos o Sacerdote do Inferno – conhecido por todos nós pela sugestiva alcunha de Pinhead – tem sido um dos mais ilustres e famosos personagens do universo do terror de todos os tempos. O aclamado escritor Clive Barker, seu criador, apresenta agora o capítulo final desta saga, que teve início com Hellraiser – Renascido do Inferno',
        gender: 'horror',
        oldPrice: '',
        newPrice: '9941,90 Kz',
        image: './img/evangelho-sangue.png',
    },
    {
        id: 3,
        title: 'Legião',
        author: 'William Peter Blatty',
        description: 'continuação de O Exorcista. Foi adaptado para o filme O Exorcista III em 1990. Como O Exorcista, envolve possessão demoníaca.',
        gender: 'horror',
        oldPrice: '',
        newPrice: '8831,80 Kz',
        image: './img/legiao.png',
    },
    {
        id: 4,
        title: 'Medicina Macabra',
        author: '',
        description: '',
        gender: '',
        oldPrice: '',
        newPrice: '7843,90 Kz',
        image: './img/medicina-macabra.png',
    },
    {
        id: 5,
        title: 'Vitorianas Macabras',
        author: '',
        description: '',
        gender: '',
        oldPrice: '9943,90 Kz',
        newPrice: '8936,87 Kz',
        image: './img/vitorianas-macabras.png',
    },
    {
        id: 6,
        title: 'Btk profile: Máscara da Maldade',
        author: '',
        description: '',
        gender: 'terror',
        oldPrice: '',
        newPrice: '8936,87 Kz',
        image: './img/btk-profile.png',
    },

]

const creatingCard = (product) => {
    const catalogueCard = document.createElement('div')
    catalogueCard.classList.add('catalogue-container')
    catalogueCard.innerHTML =
        `<div class="product">
            <img src="${product.image}">
        </div>
        <div class="description">
            <div class="description-content">      
                <span class="title">${product.title}</span>
                <span class="old-price">${product.oldPrice}</span>
                <span class="new-price">${product.newPrice}</span>
            </div>
            <div class="see-more">
                <div class="line"></div>
                <a href="#" class="details" data-id="${product.id}">ver detalhes</a>
            </div>
        </div>`

    return catalogueCard
}

const loadingCatalogue = (products) => {
    const container = document.querySelector('#session')
    const cards = products.map(creatingCard)

    container.replaceChildren(...cards)
}

const createModal = (catalogueItem) => {
    const modalCard = document.createElement('div')
    modalCard.setAttribute('id', 'modal-container')
    modalCard.innerHTML =
        `<div id="modal">
        <div class="modal-content">
            <div class="top">
                <div class="book-gender">
                    <button id="close-button">X</button>
                    <img src="${catalogueItem.image}">
                    <span>${catalogueItem.gender}</span>
                </div>
                <div class="book-info">
                    <span>${catalogueItem.title}</span>
                    <span>${catalogueItem.author}</span>
                    <p>${catalogueItem.description}</p>
                </div>
            </div>
            <div class="line"></div>
            <div class="finish">
                <div class="freight-area">
                    <span>Calcular entrega</span>
                    <label>CEP</label>
                    <div class="input-cep">
                        <input type="search" class="search-cep">
                        <button type="submit" class="calculate-cep">ok</button>
                    </div>
                </div>
                <div class="prices">
                    <div class="subtotal">
                        <span>subtotal</span>
                        <div class="value">
                            <span>${catalogueItem.oldPrice}</span>
                        </div>
                    </div>
                    <div class="total">
                        <span>total</span>
                        <div class="value">
                            <span>${catalogueItem.newPrice}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    document.getElementById('modal-content').replaceChildren(modalCard)
    document.getElementById('close-button').addEventListener('click', closeModal)

    return modalCard
}

const modalGenerator = () => {
    document.getElementById('modal-container').classList.toggle('active')
}

loadingCatalogue(catalogueDb)

document.querySelectorAll('.details')
.forEach(details => details.addEventListener('click', function(event){
    event.preventDefault()
    let catalogueItem = catalogueDb.filter(item => {
        return item.id == event.target.dataset.id
      
    })[0]
    createModal(catalogueItem)
    modalGenerator()
}))

const closeModal = () => {
    document.getElementById('modal-container').classList.remove('active')
}
    
loadingCatalogue(catalogueDb)






