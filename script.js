const botaoAbrir = document.querySelector(".header-mobile > button")
const nav = document.querySelector(".header-mobile nav")
const botaoFechar = document.querySelector(".header-mobile nav button")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('fecharMenu')

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.romove("escurecer")
    nav.classList.remove("abrir")
}