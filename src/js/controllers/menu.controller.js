import view from "../../html/common/menu.pug";
// console.log(view())
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();
  const buttonOpenMenu = divElement.querySelector('.burguerMenu')
  const menuHeader = divElement.querySelector('.header__menu')
  buttonOpenMenu.addEventListener('click', () => {
    menuHeader.classList.add('on')
  })

  const togglebutton = divElement.querySelector('#toggle')
  const body = document.body

  if(!body.classList.contains('theme--dark')) {
    togglebutton.classList.add('on')
  }else {
    togglebutton.classList.remove('on')
  }

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
  const header = document.querySelector('#header')
  window.onscroll = () => {
    if(scrollY != 0) {
      header.classList.add('on')
    }else {
      header.classList.remove('on')
    }
  }

  const menuOptions = divElement.querySelectorAll('.menuOption')
  menuOptions.forEach(option => {
    option.addEventListener('click', () => {
      menuHeader.classList.remove('on')
    })
  })

  return divElement;
};