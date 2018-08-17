import DNA from './DNA'
import p5 from 'p5'

class Rocket {
  constructor({
    dna = new DNA(),
    pos = new p5.Vector(0.5, 0.95),
    target
  } = {}) {
    this.dna = dna
    this.target = target

    this.acc = new p5.Vector(0, 0)
    this.vel = new p5.Vector(0, 0)
    this.pos = pos

    this.completed = false
    this.crashed = false
    this.step = 0
  }

  draw(p) {
    p.push()
    p.noStroke()
    if (this.crashed) {
      p.fill(255, 0, 0, 150)
    } else {
      p.fill(255, 150)
    }

    // Move to the position of the rocket
    p.translate(this.pos.x * p.width, this.pos.y * p.height)

    // Rotate to face the direction the rocket is moving
    p.rotate(this.vel.heading())

    p.triangle(8, 0, -7, -5, -7, 5)
    p.pop()
  }

  update(p) {
    if (this.crashed || this.completed) {
      return
    }

    // Check for collisions
    const distanceToTarget = p.dist(
      p.map(this.pos.x, 0, 1, 0, p.width),
      p.map(this.pos.y, 0, 1, 0, p.height),
      p.map(this.target.x, 0, 1, 0, p.width),
      p.map(this.target.y, 0, 1, 0, p.height)
    )

    if (distanceToTarget < 25) {
      // Within the radius of target
      this.completed = true
      this.completedStep = this.step

      // Move to center of target
      this.pos = this.target.copy()

      // Clear velocity and acceleration
      this.vel.mult(0)
      this.acc.mult(0)
    }

    if (this.pos.x < 0 || this.pos.x > 1 || this.pos.y < 0 || this.pos.y > 1) {
      // Gone off the screen
      this.crashed = true
    }

    if (!this.crashed && !this.finished) {
      // Apply force to acceleration from DNA
      this.applyForce(this.dna.genes[this.step++])

      // Apply acceleration to velocity
      this.vel.add(this.acc)

      // Update position based on velocity
      this.pos.add(this.vel)

      // Clear the acceleration
      this.acc.mult(0)
    }
  }

  applyForce(force) {
    this.acc.add(force)
  }

  calculateFitness(p) {
    const d = p.dist(this.pos.x, this.pos.y, this.target.x, this.target.y)
    this.fitness = p.map(d, 0, 1, 1, 0)

    // Big bonus for completing
    if (this.completed) {
      this.fitness *= 10

      // Add an extra bonus for completing quickly
      this.fitness += (DNA.lifespan - this.completedStep) * 5
    }

    // Big penalty for crashing
    if (this.crashed) {
      this.fitness /= 5
    }
  }
}

export default Rocket
