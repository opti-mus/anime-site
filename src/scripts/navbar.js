export default function showNavbar() {
  const navbar = document.querySelector('.header__nav')

  window.addEventListener('scroll', changeNavbar)

  function changeNavbar() {
    if (navbar.getBoundingClientRect().bottom < 0) {
      navbar.classList.add('fixed-show')
      addAnim(navbar)
    }
    if (pageYOffset < 210) {
      navbar.classList.remove('fixed-show', 'anim-navbar')
    }
  }
  function addAnim(el) {
    setTimeout(() => {
      el.classList.add('anim-navbar')
    }, 100)
  }
  changeNavbar()
}
