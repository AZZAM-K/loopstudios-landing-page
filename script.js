let istoggled = false
let toggleMenu = document.getElementById('menu-toggle')
let sideMenu = document.querySelector('.sidemenu')
toggleMenu.addEventListener('click', () => {
  if (!istoggled) {
    toggleMenu.src = 'images/icon-close.svg'
    sideMenu.classList.remove('hidden-menu')
  } else {
    toggleMenu.src = 'images/icon-hamburger.svg'
    sideMenu.classList.add('hidden-menu')
  }
  istoggled = !istoggled
})
