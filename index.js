let numSquares = 6
let colors = []
let pickedColor
const squares = document.querySelectorAll('.square')
const colorDisplay = document.getElementById('colorDisplay')
const messageDisplay = document.querySelector('#message')
const h1 = document.querySelector('h1')
const resetButton = document.querySelector('#reset')
const modeButtons = document.querySelectorAll('.mode')

const init = () => {
  initModeButtons()
  initSquares()
  reset()
}

const initModeButtons = () => {
  modeButtons.forEach((i, k) => {
    i.addEventListener('click', () => {
      // FIXME: need to have ability to toggle states.
      i.classList.remove('selected')
      // i.classList.add('selected')
      i.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6)
      reset()
    })
  })
}

const initSquares = () => {
  squares.forEach((i, k) => {
    i.style.backgroundColor = colors[k]
    i.addEventListener('click', () => {
      const clickedColor = i.style.backgroundColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        resetButton.textContent = 'Play Again?'
        changeColors(clickedColor)
        h1.style.backgroundColor = clickedColor
      } else {
        i.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try Again!'
      }
    })
  })
}

const reset = () => {
  colors = generateRandomColors(numSquares)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  resetButton.textContent = 'New Colors'
  messageDisplay.textContent = ''
  squares.forEach((i, k) => {
    if (colors[k]) {
      i.style.display = 'block'
      i.style.backgroundColor = colors[k]
    } else {
      i.style.display = 'none'
    }
  })
  h1.style.backgroundColor = 'steelblue'
}

resetButton.addEventListener('click', () => {
  reset()
})

const changeColors = color =>
  squares.forEach(i => (i.style.backgroundColor = color))

const pickColor = () => {
  const random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

const generateRandomColors = num => {
  const arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr
}

const randomColor = () => {
  const ranNum = () => Math.floor(Math.random() * 256)
  return `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`
}

init()
