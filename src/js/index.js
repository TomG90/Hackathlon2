'use strict'
const right = 'ArrowRight'
const left = 'ArrowLeft'
const up = 'ArrowUp'
const down = 'ArrowDown'

const keyArrows = [right, left, up, down]

const pacMan = document.querySelector('.entity--pac')
document.addEventListener('keyup', (event) => {
  if (keyArrows.includes(event.code)) {
    pacMan.classList.toggle('entity--pac-closed')
    pacMan.classList.remove('entity--pac-up', 'entity--pac-down', 'entity--pac-left', 'entity--pac-right')
    if (event.code === right) {
      pacMan.classList.add('entity--pac-right')
    }

    if (event.code === left) {
      pacMan.classList.add('entity--pac-left')
    }

    if (event.code === up) {
      pacMan.classList.add('entity--pac-up')
    }

    if (event.code === down) {
      pacMan.classList.add('entity--pac-down')
    }
  }
})
