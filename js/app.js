'use strict'

// window.addEventListener('scroll', () => {
//   const header = this.document.querySelector('#header')
//   header.classList.toggle('sticky', window.scrollY > 0)
// })

const hambuger = document.querySelector('.hambuger')
const navBar = document.querySelector('.hambuger__list')
const btnFixed = document.querySelector('#btnFixed')

const openBar = () => {
  hambuger.classList.toggle('openBar')
  navBar.classList.toggle('hiddenNav')
}

const onFixed = () => {
  btnFixed.classList.toggle('btnShow', window.scrollY > 30)
}
// Event
hambuger.addEventListener('click', openBar)
window.addEventListener('scroll', onFixed)
