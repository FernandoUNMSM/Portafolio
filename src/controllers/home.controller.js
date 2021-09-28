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
  const proyectos = divElement.querySelector('#proyectos')
  const options =  {
    // root,
    rootMargin: '0px',
    // threshold
  }

  const callback = (entries, observer) => {
    if(entries[0].isIntersecting) {
      const projects = proyectos.childNodes[1].childNodes;
      projects.forEach(project => project.classList.add('on'))
      observer.disconnect()
    }
  }
  const observer = new IntersectionObserver(callback, options)
  observer.observe(proyectos)
  return divElement;
};