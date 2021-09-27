import './../scss/main.scss'
import './../index.pug'
// console.log('hola')
const buttonOpenMenu = document.querySelector('.burguerMenu')
const buttonCloseMenu = document.querySelector('.closeMenu')
const menuHeader = document.querySelector('.header__menu')

buttonOpenMenu.addEventListener('click', () => {
  menuHeader.classList.add('on')
})
buttonCloseMenu.addEventListener('click', () => {
  menuHeader.classList.remove('on')
})

const togglebutton = document.querySelector('#toggle')
const body = document.body
togglebutton.addEventListener('click', ()=> {
  togglebutton.classList.toggle('on')
  if(togglebutton.classList.contains('on')) {
    body.classList.add('theme')
    body.classList.remove('theme--dark')
  }else {
    body.classList.remove('theme')
    body.classList.add('theme--dark')
  }
})