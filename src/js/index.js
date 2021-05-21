'use strict'

const container = document.querySelector('.container')

const walls = [
  //line 1
  { x: 5, y: 0 },

  //line2
  { x: 1, y: 1 },
  { x: 2, y: 1 },
]

for (const wall of walls) {
  new Wall(wall.x, wall.y).mount(container)
}

new PacMan(0, 0, 'pacgirl-active-light').mount(container)
