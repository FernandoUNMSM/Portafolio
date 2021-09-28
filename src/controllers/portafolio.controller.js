import view from "../html/portafolio/index.pug";
// console.log(view())
export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view();

  return divElement;
};