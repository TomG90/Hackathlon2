'use strict'

const container = document.querySelector('.container')

const walls = [
  //line 1
  { x: 5, y: 0 },
  { x: 7, y: 0 },
  { x: 10, y: 0 },
  { x: 15, y: 0 },


  //line2
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 9, y: 1 },
  { x: 11, y: 1 },
  { x: 13, y: 1 },
  { x: 15, y: 1 },
  { x: 17, y: 1 },
  { x: 18, y: 1 },
  
  //line3
  { x: 5, y: 2 },
  { x: 9, y: 2 },
  { x: 13, y: 2 },

  //line4
  { x: 0, y: 3 },
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 5, y: 3 },
  { x: 7, y: 3 },
  { x: 8, y: 3 },
  { x: 9, y: 3 },
  { x: 10, y: 3 },
  { x: 11, y: 3 },
  { x: 12, y: 3 },
  { x: 13, y: 3 },
  { x: 15, y: 3 },
  { x: 16, y: 3 },
  { x: 17, y: 3 },
  { x: 18, y: 3 },

  //line5
  { x: 3, y: 4 },
  { x: 7, y: 4 },
  { x: 11, y: 4 },
  { x: 17, y: 4 },

  //line6
  { x: 1, y: 5 },
  { x: 3, y: 5 },
  { x: 4, y: 5 },
  { x: 5, y: 5 },
  { x: 7, y: 5 },
  { x: 9, y: 5 },
  { x: 10, y: 5 },
  { x: 11, y: 5 },
  { x: 13, y: 5 },
  { x: 14, y: 5 },
  { x: 15, y: 5 },
  { x: 16, y: 5 },
  { x: 17, y: 5 },

  //line7
  { x: 1, y: 6 },
  { x: 7, y: 6 },
  { x: 15, y: 6 },

  //line8
  { x: 0, y: 7 },
  { x: 1, y: 7 },
  { x: 3, y: 7 },
  { x: 4, y: 7 },
  { x: 5, y: 7 },
  { x: 6, y: 7 },
  { x: 7, y: 7 },
  { x: 9, y: 7 },
  { x: 11, y: 7 },
  { x: 12, y: 7 },
  { x: 13, y: 7 },
  { x: 14, y: 7 },
  { x: 15, y: 7 },
  { x: 17, y: 7 },

  //line9
  { x: 3, y: 8 },
  { x: 9, y: 8 },
  { x: 17, y: 8 },

]

for (const wall of walls) {
  new Wall(wall.x, wall.y).mount(container)
}

new PacMan(0, 0, 'pacgirl-active-light').mount(container)

// function collisionDetection(x,y){
//     const pacMan = PacMan

// }
