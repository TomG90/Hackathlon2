const size = '3vw'

const right = 'ArrowRight'
const left = 'ArrowLeft'
const up = 'ArrowUp'
const down = 'ArrowDown'

const keyArrows = [right, left, up, down]

class PacMan {
  constructor(x, y, name) {
    this.x = x
    this.y = y
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
    this.direction = 'left'
    this.x -= 1
    this.update()
  }

  moveRight() {
    this.direction = 'right'
    this.x += 1
    this.update()
  }

  moveUp() {
    this.direction = 'up'
    this.y -= 1
    this.update()
  }

  moveDown() {
    this.direction = 'down'
    this.y += 1
    this.update()
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
