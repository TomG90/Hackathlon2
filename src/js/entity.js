class Entity {
  constructor(x, y, type) {
    this.x = x
    this.y = y
    this.type = type
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
}
