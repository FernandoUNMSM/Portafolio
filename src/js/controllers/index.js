import Home from "./home.controller";
import Portafolio from "./portafolio.controller";
import Conocimientos from "./conocimientos.controller";
import Proyectos from "./proyectos.controller";
// import NotFound from "./404.controller";

const pages = {
  home: Home,
  portafolio: Portafolio,
  conocimientos: Conocimientos,
  proyectos: Proyectos
  // notFound: NotFound,
};

export { pages };