const buttonLight = document.querySelector('.light')
const buttonDark = document.querySelector('.dark')
const title = document.querySelector('.title')
const text = document.querySelector('.text')
const footerText = document.querySelector('.footer')
const body = document.querySelector('body')

function clickButton() {
  buttonDark.classList.toggle('hiden')
  buttonLight.classList.toggle('hiden')
}

buttonDark.addEventListener('click', () => {
  clickButton()
  title.classList.add('light-mode')
  text.classList.add('light-mode')
  footerText.classList.add('light-mode')
  body.classList.add('dark-mode')
})

buttonLight.addEventListener('click', () => {
  clickButton()
  title.classList.remove('light-mode')
  text.classList.remove('light-mode')
  footerText.classList.remove('light-mode')
  body.classList.remove('dark-mode')
})
