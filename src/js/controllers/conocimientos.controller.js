import view from "../../html/conocimientos/index.pug";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  return divElement;
};