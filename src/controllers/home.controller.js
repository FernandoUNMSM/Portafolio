import view from "../html/home/index.pug";
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  const buttonOpenMenu = divElement.querySelector('.burguerMenu')
  const buttonCloseMenu = divElement.querySelector('.closeMenu')
  const menuHeader = divElement.querySelector('.header__menu')
  buttonOpenMenu.addEventListener('click', () => {
    menuHeader.classList.add('on')
  })
  buttonCloseMenu.addEventListener('click', () => {
    menuHeader.classList.remove('on')
  })

  const togglebutton = divElement.querySelector('#toggle')
  const body = document.body
  if(!body.classList.contains('theme--dark')) {
    togglebutton.classList.add('on')
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

  return divElement;
};