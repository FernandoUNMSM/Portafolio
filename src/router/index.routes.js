import { pages } from "../js/controllers/index";
import getHash from './../js/getHash';
import {common} from './../js/common';

const routes = {
  '/': pages.home(),
  'portafolio': pages.portafolio(),
  'conocimientos': pages.conocimientos(),
  'proyectos': pages.proyectos()
};

const router = () => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  let hash = getHash();
  // common(routes[hash])
  content.appendChild(routes[hash]);
};

export {router};