class Entity {
  constructor(x, y, type, canHit) {
    this.x = x
    this.y = y
    this.type = type
    this.canHit = canHit
  }

  render() {
    const wallDiv = document.createElement('div')
    wallDiv.classList.add('entity', `entity--${this.type}`)
    wallDiv.style.left = `${this.x * 3}vw`
    wallDiv.style.top = `${this.y * 3}vw`

    return wallDiv
  }

  mount(parent) {
    this.element = this.render()
    parent.appendChild(this.element)
  }

  unMount() {
    this.element.remove()
  }
}
