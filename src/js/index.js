'use strict'

const container = document.querySelector('.container')

const entities = [
  //line 1
  { type: 'wall', canHit: false, x: 5, y: 0 },
  { type: 'wall', canHit: false, x: 7, y: 0 },
  { type: 'wall', canHit: false, x: 11, y: 0 },
  { type: 'wall', canHit: false, x: 15, y: 0 },

  //line2
  { type: 'wall', canHit: false, x: 1, y: 1 },
  { type: 'wall', canHit: false, x: 2, y: 1 },
  { type: 'wall', canHit: false, x: 3, y: 1 },
  { type: 'wall', canHit: false, x: 4, y: 1 },
  { type: 'wall', canHit: false, x: 5, y: 1 },
  { type: 'wall', canHit: false, x: 7, y: 1 },
  { type: 'wall', canHit: false, x: 9, y: 1 },
  { type: 'wall', canHit: false, x: 11, y: 1 },
  { type: 'wall', canHit: false, x: 13, y: 1 },
  { type: 'wall', canHit: false, x: 15, y: 1 },
  { type: 'wall', canHit: false, x: 17, y: 1 },
  { type: 'wall', canHit: false, x: 18, y: 1 },

  //line3
  { type: 'wall', canHit: false, x: 5, y: 2 },
  { type: 'wall', canHit: false, x: 9, y: 2 },
  { type: 'wall', canHit: false, x: 13, y: 2 },

  //line4
  { type: 'wall', canHit: false, x: 0, y: 3 },
  { type: 'wall', canHit: false, x: 1, y: 3 },
  { type: 'wall', canHit: false, x: 2, y: 3 },
  { type: 'wall', canHit: false, x: 3, y: 3 },
  { type: 'wall', canHit: false, x: 5, y: 3 },
  { type: 'wall', canHit: false, x: 7, y: 3 },
  { type: 'wall', canHit: false, x: 8, y: 3 },
  { type: 'wall', canHit: false, x: 9, y: 3 },
  { type: 'wall', canHit: false, x: 10, y: 3 },
  { type: 'wall', canHit: false, x: 11, y: 3 },
  { type: 'wall', canHit: false, x: 12, y: 3 },
  { type: 'wall', canHit: false, x: 13, y: 3 },
  { type: 'wall', canHit: false, x: 15, y: 3 },
  { type: 'wall', canHit: false, x: 16, y: 3 },
  { type: 'wall', canHit: false, x: 17, y: 3 },
  { type: 'wall', canHit: false, x: 18, y: 3 },

  //line5
  { type: 'wall', canHit: false, x: 3, y: 4 },
  { type: 'wall', canHit: false, x: 7, y: 4 },
  { type: 'wall', canHit: false, x: 11, y: 4 },
  { type: 'wall', canHit: false, x: 17, y: 4 },

  //line6
  { type: 'wall', canHit: false, x: 1, y: 5 },
  { type: 'wall', canHit: false, x: 3, y: 5 },
  { type: 'wall', canHit: false, x: 4, y: 5 },
  { type: 'wall', canHit: false, x: 5, y: 5 },
  { type: 'wall', canHit: false, x: 7, y: 5 },
  { type: 'wall', canHit: false, x: 9, y: 5 },
  { type: 'wall', canHit: false, x: 10, y: 5 },
  { type: 'wall', canHit: false, x: 11, y: 5 },
  { type: 'wall', canHit: false, x: 13, y: 5 },
  { type: 'wall', canHit: false, x: 14, y: 5 },
  { type: 'wall', canHit: false, x: 15, y: 5 },
  { type: 'wall', canHit: false, x: 16, y: 5 },
  { type: 'wall', canHit: false, x: 17, y: 5 },

  //line7
  { type: 'wall', canHit: false, x: 1, y: 6 },
  { type: 'wall', canHit: false, x: 7, y: 6 },
  { type: 'wall', canHit: false, x: 15, y: 6 },

  //line8
  { type: 'wall', canHit: false, x: 0, y: 7 },
  { type: 'wall', canHit: false, x: 1, y: 7 },
  { type: 'wall', canHit: false, x: 3, y: 7 },
  { type: 'wall', canHit: false, x: 4, y: 7 },
  { type: 'wall', canHit: false, x: 5, y: 7 },
  { type: 'wall', canHit: false, x: 6, y: 7 },
  { type: 'wall', canHit: false, x: 7, y: 7 },
  { type: 'wall', canHit: false, x: 9, y: 7 },
  { type: 'wall', canHit: false, x: 11, y: 7 },
  { type: 'wall', canHit: false, x: 12, y: 7 },
  { type: 'wall', canHit: false, x: 13, y: 7 },
  { type: 'wall', canHit: false, x: 14, y: 7 },
  { type: 'wall', canHit: false, x: 15, y: 7 },
  { type: 'wall', canHit: false, x: 17, y: 7 },

  //line9
  { type: 'wall', canHit: false, x: 3, y: 8 },
  { type: 'wall', canHit: false, x: 9, y: 8 },
  { type: 'wall', canHit: false, x: 17, y: 8 },

  //apples
  { type: 'apple', canHit: true, x: 1, y: 0 },
]

for (const entity of entities) {
  new Entity(entity.x, entity.y, entity.type).mount(container)
}

new PacMan('pacgirl-active-light').mount(container)

function collisionDetection(x, y) {
  for (const entity of entities) {
    if (x === entity.x && y === entity.y) {
      return !entity.canHit
    }
  }

  return false
}
