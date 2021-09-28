import { pages } from "./../controllers/index";
import getHash from './../js/getHash';

const routes = {
  '/': pages.home(),
  'portafolio': pages.portafolio()
};

const router = () => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  let hash = getHash();
  content.appendChild(routes[hash]);
};

export {router};