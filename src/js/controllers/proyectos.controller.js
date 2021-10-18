import view from "../../html/proyectos/index.pug";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  return divElement;
};