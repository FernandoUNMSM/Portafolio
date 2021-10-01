import Home from "./home.controller";
import Portafolio from "./portafolio.controller";
import Conocimientos from "./conocimientos.controller";
// import NotFound from "./404.controller";

const pages = {
  home: Home,
  portafolio: Portafolio,
  conocimientos: Conocimientos
  // notFound: NotFound,
};

export { pages };