const input = document.querySelector('input')
const sea = document.querySelector('.sea')
const fishWrapper = document.querySelector('.fish-wrapper')
const bird = document.querySelector('.bird')
const birdAlert = document.querySelector('.bird-alert')



alert('熊爸爸去釣魚了！快點點看熊爸爸，看看會發生什麼事！')

input.addEventListener('click', ()=> {
  if(input.checked) {
    setTimeout(() => {
      sea.classList.add('move-backward')
      fishWrapper.classList.add('show')
    }, 2100)
    setTimeout(() => {
      bird.classList.add('show-bird')
      birdAlert.classList.add('show-bird')
    }, 5000)
  } else {
    fishWrapper.classList.remove('show')
    bird.classList.remove('show-bird')
    birdAlert.classList.remove('show-bird')
    sea.classList.remove('move-backward')
  }
   
})

