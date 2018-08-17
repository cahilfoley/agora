import Population from './models/Population'
import DNA from './models/DNA'

function sketch(p) {
  let population
  let mouseDownPoint = null
  // let speed = 1

  p.setup = function() {
    const { canvas } = p.createCanvas(600, 600)
    canvas.style.borderRadius = '4px'
    population = new Population()
  }

  p.draw = function() {
    p.background(51)
    population.update(p)
    population.draw(p)
    if (mouseDownPoint !== null) {
      p.fill(255)
      let { x, y } = mouseDownPoint
      const xPos = p.map(x, 0, 1, 0, p.width)
      const yPos = p.map(y, 0, 1, 0, p.height)
      p.rect(xPos, yPos, p.mouseX - xPos, p.mouseY - yPos)
    }
    p.fill(255)
    p.text(`Mutation Rate: ${DNA.mutationRate}`, 10, p.height - 45)
    p.text(`Fail Streak: ${population.failStreak}`, 10, p.height - 30)
    p.text(`Number Completed: ${population.numCompleted}`, 10, p.height - 15)
  }

  p.mousePressed = () => {
    const x = p.map(p.mouseX, 0, p.width, 0, 1)
    const y = p.map(p.mouseY, 0, p.height, 0, 1)
    mouseDownPoint = p.createVector(x, y)
  }

  p.mouseReleased = () => {
    if (mouseDownPoint !== null) {
      const { x, y } = mouseDownPoint
      const endX = p.map(p.mouseX, 0, p.width, 0, 1)
      const endY = p.map(p.mouseY, 0, p.height, 0, 1)
      population.addObstacle(x, y, endX, endY)
      mouseDownPoint = null
    }
  }
}

export default sketch
