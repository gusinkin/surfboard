const openButton = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeButton = document.querySelector('.hamburger-menu__close')

openButton.addEventListener('click', (e) => {
  e.preventDefault()
  hamburgerMenu.classList.add('active')
})
closeButton.addEventListener('click', (e) => {
  e.preventDefault()
  hamburgerMenu.classList.remove('active')
})

$('[data-scroll-to').click((e) => {
  e.preventDefault()
  hamburgerMenu.classList.remove('active')
})
