import 'normalize.css'
import './../scss/main.scss'
import 'hammerjs'
// import './../index.pug'
import { router } from "./../router/index.routes";
import menu from './controllers/menu.controller'

const header = document.querySelector('#header')
header.appendChild(menu())

const body = document.body
const hammer = new Hammer(body)

const menuHeader = header.querySelector('.header__menu')
hammer.on('swipeleft', () => {
  if (window.innerWidth <= 640) {
    menuHeader.classList.add('on')
  }
})
hammer.on('swiperight', () => {
  if (window.innerWidth <= 640) {

    menuHeader.classList.remove('on')
  }
})

window.addEventListener('load', router);
window.addEventListener('hashchange', router);