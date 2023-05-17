function showTopSearchBar() {
    const searchInput = document.getElementById('input-search');

    if (searchInput.classList.contains('close')) {
        searchInput.classList.remove('close');
    }
    else {
        searchInput.classList.add('close');
    }
}

function showTopMenu() {
    const menuMobile = document.getElementById('nav-mobile');
    const menuIcon = document.getElementById('menu');

    if (menuMobile.classList.contains('close')) {
        menuMobile.classList.remove('close');
        
        menuIcon.classList.remove('nav-menu');
        menuIcon.classList.add('nav-menu-close');
    }
    else {
        menuMobile.classList.add('close');

        menuIcon.classList.remove('nav-menu-close');
        menuIcon.classList.add('nav-menu');
    }
}

function showBottomMenu() {
    const menuMobile = document.getElementById('menu-bottom-mobile');
    const menu = document.getElementsByClassName('info-mobile')[0];

    console.log();
    if (menuMobile.classList.contains('close')) {
        menuMobile.classList.remove('close');

        menu.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';
    }
    else {
        menuMobile.classList.add('close');

        menu.firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';
    }
}

function showSobreMenuMobile() {
    const menuMobile = document.getElementById('sobre-bottom-mobile');
    const menu = document.getElementsByClassName('info-mobile')[1];

    if (menuMobile.classList.contains('close')) {
        menuMobile.classList.remove('close');
        
        menu.firstElementChild.lastElementChild.style.transform = 'rotate(180deg)';
    }
    else {
        menuMobile.classList.add('close');

        menu.firstElementChild.lastElementChild.style.transform = 'rotate(0deg)';
    }
}

function exibeConteudo() {
    const conteudo = document.getElementsByClassName('conteudo')[1];
    const botao = document.getElementById('leia-mais');

    if (conteudo.classList.contains('show-content')) {
        conteudo.classList.remove('show-content');

        botao.firstElementChild.innerText = 'Leia Mais';
        botao.lastElementChild.style.transform = 'rotate(0deg)';
    }
    else {
        conteudo.classList.add('show-content');    

        botao.firstElementChild.innerText = 'Leia Menos'
        botao.lastElementChild.style.transform = 'rotate(180deg)';
    }
}

function exibirProjetos() {
    const imagens = document.getElementById('imagens');
    const imagensOcultas = getComputedStyle(imagens.children[4]).display == 'none' && getComputedStyle(imagens.children[5]).display == 'none';

    if (imagensOcultas) {
        imagens.children[4].classList.add('show-image');
        imagens.children[5].classList.add('show-image');
    }
    else {
        imagens.children[4].classList.remove('show-image');
        imagens.children[5].classList.remove('show-image');
    }
}