import './../scss/main.scss'
// import './../index.pug'
import { router } from "./../router/index.routes";

// const init = () => {
//   router(window.location.hash);

//   window.addEventListener("hashchange", () => {
//     router(window.location.hash);
//   });
// };
// window.addEventListener("load", init);
window.addEventListener('load', router);
window.addEventListener('hashchange', router);