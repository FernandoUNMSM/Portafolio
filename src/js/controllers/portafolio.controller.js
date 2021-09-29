import view from "../../html/portafolio/index.pug";
// import menu from "./menu.controller"

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();
  // const header = divElement.querySelector('.portafolio__header')
  // header.prepend(menu())
  return divElement;
};