import view from "../../html/home/index.pug";
// import menu from "./menu.controller"
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  const proyectos = divElement.querySelector('#proyectos')
  // const header = divElement.querySelector('.header')
  // header.prepend(menu())
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