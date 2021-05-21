const size = '3vw'

const right = 'ArrowRight'
const left = 'ArrowLeft'
const up = 'ArrowUp'
const down = 'ArrowDown'

const keyArrows = [right, left, up, down]

class PacMan {
  constructor(name) {
    this.x = 0
    this.y = 0
    this.name = name

    this.direction = 'right'
    this.hasMouthOpen = true
  }

  render() {
    const pacManDiv = document.createElement('div')
    pacManDiv.classList.add('entity', 'entity--pac', `entity--pac-${this.direction}`, this.name)

    return pacManDiv
  }

  update() {
    this.element.classList.toggle('entity--pac-closed')
    this.element.classList.remove('entity--pac-up', 'entity--pac-down', 'entity--pac-left', 'entity--pac-right')
    this.element.classList.add(`entity--pac-${this.direction}`)

    this.element.style.left = `${this.x * 3}vw`
    this.element.style.top = `${this.y * 3}vw`
  }

  moveLeft() {
    if (!collisionDetection(this.x - 1, this.y)) {
      this.direction = 'left'
      this.x -= 1
      this.x = Math.max(0, this.x)

      this.update()
    }
  }

  moveRight() {
    if (!collisionDetection(this.x + 1, this.y)) {
      this.direction = 'right'
      this.x += 1
      this.x = Math.min(18, this.x)

      this.update()
    }
  }

  moveUp() {
    if (!collisionDetection(this.x, this.y - 1)) {
      this.direction = 'up'
      this.y -= 1
      this.y = Math.max(0, this.y)
      this.update()
    }
  }

  moveDown() {
    if (!collisionDetection(this.x, this.y + 1)) {
      this.direction = 'down'
      this.y += 1
      this.y = Math.min(8, this.y)
      this.update()
    }
  }

  mount(parent) {
    this.element = this.render()
    parent.appendChild(this.element)

    document.addEventListener('keyup', (event) => {
      if (keyArrows.includes(event.code)) {
        if (event.code === left) {
          this.moveLeft()
        }
        if (event.code === right) {
          this.moveRight()
        }
        if (event.code === up) {
          this.moveUp()
        }
        if (event.code === down) {
          this.moveDown()
        }
      }
    })
  }
}
