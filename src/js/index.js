const container = document.querySelector('.container')
const entities = []

fetch('http://bootcamp.podlomar.org/api/pacman?width=19&height=9')
  .then((result) => result.json())
  .then((result) => {
    console.log(result)
    for (const bomb of result.bombs) {
      const entity = new Entity(bomb.x, bomb.y, 'bomb', true)
      entities.push(entity)
      entity.mount(container)
    }

    for (const apple of result.apples) {
      const entity = new Entity(apple.x, apple.y, 'apple', true)
      entities.push(entity)
      entity.mount(container)
    }

    for (const wall of result.walls) {
      const entity = new Entity(wall.x, wall.y, 'wall', false)
      entities.push(entity)
      entity.mount(container)
    }
  })
const pacMan = new PacMan('pacgirl-active-light')
pacMan.mount(container)

function collisionDetection(x, y) {
  for (let i = 0; i < entities.length; i++) {
    const entity = entities[i]
    if (x === entity.x && y === entity.y) {
      if (entity.canHit) {
        removeEntity(entity)
        entities.splice(i, 1)
      }

      return !entity.canHit
    }
  }

  return null
}

const divScore = document.querySelector('.score')
let score = 0
function removeEntity(entity) {
  if (entity.type === 'apple') {
    score += 10
    divScore.textContent = score
  }
  if (entity.type === 'bomb') {
    const coin = Math.floor(Math.random() * 3)
    console.log(coin)
    if (coin === 1) {
      new Entity(entity.x, entity.y, 'tomb').mount(container)
      pacMan.die()
    }
  }
  entity.unMount()
}
