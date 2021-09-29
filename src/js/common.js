const common = (divElement) => {
  const togglebutton = divElement.querySelector('#toggle')
  const body = document.body
  if(!body.classList.contains('theme--dark')) {
    togglebutton.classList.add('on')
  }else {
    togglebutton.classList.remove('on')
  }
}
export {common}