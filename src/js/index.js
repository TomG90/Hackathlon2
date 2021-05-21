'use strict'

const container = document.querySelector('.container')

const entities = [
  //line 1
  new Entity(5, 0, 'wall', false),
  new Entity(7, 0, 'wall', false),
  new Entity(11, 0, 'wall', false),
  new Entity(15, 0, 'wall', false),

  //line2
  new Entity(1, 1, 'wall', false),
  new Entity(2, 1, 'wall', false),
  new Entity(3, 1, 'wall', false),
  new Entity(4, 1, 'wall', false),
  new Entity(5, 1, 'wall', false),
  new Entity(7, 1, 'wall', false),
  new Entity(9, 1, 'wall', false),
  new Entity(11, 1, 'wall', false),
  new Entity(13, 1, 'wall', false),
  new Entity(15, 1, 'wall', false),
  new Entity(17, 1, 'wall', false),
  new Entity(18, 1, 'wall', false),

  //line3
  new Entity(5, 2, 'wall', false),
  new Entity(9, 2, 'wall', false),
  new Entity(13, 2, 'wall', false),

  //line4
  new Entity(0, 3, 'wall', false),
  new Entity(1, 3, 'wall', false),
  new Entity(2, 3, 'wall', false),
  new Entity(3, 3, 'wall', false),
  new Entity(5, 3, 'wall', false),
  new Entity(7, 3, 'wall', false),
  new Entity(8, 3, 'wall', false),
  new Entity(9, 3, 'wall', false),
  new Entity(10, 3, 'wall', false),
  new Entity(11, 3, 'wall', false),
  new Entity(12, 3, 'wall', false),
  new Entity(13, 3, 'wall', false),
  new Entity(15, 3, 'wall', false),
  new Entity(16, 3, 'wall', false),
  new Entity(17, 3, 'wall', false),
  new Entity(18, 3, 'wall', false),

  //line5
  new Entity(3, 4, 'wall', false),
  new Entity(7, 4, 'wall', false),
  new Entity(11, 4, 'wall', false),
  new Entity(17, 4, 'wall', false),

  //line6
  new Entity(1, 5, 'wall', false),
  new Entity(3, 5, 'wall', false),
  new Entity(4, 5, 'wall', false),
  new Entity(5, 5, 'wall', false),
  new Entity(7, 5, 'wall', false),
  new Entity(9, 5, 'wall', false),
  new Entity(10, 5, 'wall', false),
  new Entity(11, 5, 'wall', false),
  new Entity(13, 5, 'wall', false),
  new Entity(14, 5, 'wall', false),
  new Entity(15, 5, 'wall', false),
  new Entity(16, 5, 'wall', false),
  new Entity(17, 5, 'wall', false),

  //line7
  new Entity(1, 6, 'wall', false),
  new Entity(7, 6, 'wall', false),
  new Entity(15, 6, 'wall', false),

  //line8
  new Entity(0, 7, 'wall', false),
  new Entity(1, 7, 'wall', false),
  new Entity(3, 7, 'wall', false),
  new Entity(4, 7, 'wall', false),
  new Entity(5, 7, 'wall', false),
  new Entity(6, 7, 'wall', false),
  new Entity(7, 7, 'wall', false),
  new Entity(9, 7, 'wall', false),
  new Entity(11, 7, 'wall', false),
  new Entity(12, 7, 'wall', false),
  new Entity(13, 7, 'wall', false),
  new Entity(14, 7, 'wall', false),
  new Entity(15, 7, 'wall', false),
  new Entity(17, 7, 'wall', false),

  //line9
  new Entity(3, 8, 'wall', false),
  new Entity(9, 8, 'wall', false),
  new Entity(17, 8, 'wall', false),

  //apples
  new Entity(1, 0, 'apple', true),
]

for (const entity of entities) {
  entity.mount(container)
}

new PacMan('pacgirl-active-light').mount(container)

function collisionDetection(x, y) {
  for (const entity of entities) {
    if (x === entity.x && y === entity.y) {
      return entity
    }
  }

  return null
}
