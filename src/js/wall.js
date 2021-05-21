class Wall {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  render() {
    const wallDiv = document.createElement('div')
    wallDiv.classList.add('entity', 'entity--wall')
    wallDiv.style.left = `${this.x * 3}vw`
    wallDiv.style.top = `${this.y * 3}vw`

    return wallDiv
  }

  mount(parent) {
    this.element = this.render()
    parent.appendChild(this.element)
  }
}
