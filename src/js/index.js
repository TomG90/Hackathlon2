fetch('http://bootcamp.podlomar.org/api/pacman?width=19&height=9')
.then((result) => result.json())
.then((result) => {
    console.log(result)
    for(const bomb of result.bombs) {
        const entity = new Entity(bomb.x, bomb.y, 'bomb',  true)
        entity.mount(container)
    }

    for(const apple of result.apples) {
        const entity = new Entity(apple.x, apple.y, 'apple', true)
        entity.mount(container)
    }

    for(const wall of result.walls) {
        const entity = new Entity(wall.x, wall.y, 'wall', true)
        entity.mount(container)
    }

})

const container = document.querySelector('.container');

