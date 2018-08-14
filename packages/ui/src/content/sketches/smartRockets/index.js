import Population from './models/Population'
import DNA from './models/DNA'

const sketch = p => {
  let population
  let mouseDownPoint = null
  let speed = 1

  p.setup = () => {
    p.createCanvas(600, 600)
    population = new Population()
  }

  p.draw = () => {
    p.background(0)
    // for (let i = 0; i < speed; i++) {
    population.update()
    // }
    population.draw(p)
    if (mouseDownPoint !== null) {
      p.fill(255)
      let { x, y } = mouseDownPoint
      p.rect(x, y, p.mouseX - x, p.mouseY - y)
    }
    p.fill(255)
    p.text(`Mutation Rate: ${DNA.mutationRate}`, 10, p.height - 45)
    p.text(`Fail Streak: ${population.failStreak}`, 10, p.height - 30)
    p.text(`Number Completed: ${population.numCompleted}`, 10, p.height - 15)
  }

  p.mousePressed = () => {
    mouseDownPoint = p.createVector(p.mouseX, p.mouseY)
  }

  p.mouseReleased = () => {
    if (mouseDownPoint !== null) {
      let { x, y } = mouseDownPoint
      population.addObstacle(x, y, p.mouseX - x, p.mouseY - y)
      mouseDownPoint = null
    }
  }
}

export default sketch
