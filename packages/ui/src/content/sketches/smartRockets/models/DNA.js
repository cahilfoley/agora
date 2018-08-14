import { Vector } from 'p5'

class DNA {
  static lifespan = 400
  static maxForce = 0.05
  static mutationRate = 0.02

  constructor({ genes = [] } = {}) {
    while (genes.length < DNA.lifespan) {
      const newForce = Vector.random2D()
      newForce.setMag(DNA.maxForce)
      genes.push(newForce)
    }

    this.genes = genes
  }

  crossover(otherGenes) {
    const newGenes = []
    const mid = Math.floor(Math.random(this.genes.length))

    for (let i = 0; i < DNA.lifespan; i++) {
      if (i < mid) {
        newGenes.push(this.genes[i])
      } else {
        newGenes.push(otherGenes[i])
      }
    }

    return new DNA({
      genes: newGenes
    })
  }

  mutate() {
    for (let i = 0; i < DNA.lifespan; i++) {
      if (Math.random() < DNA.mutationRate) {
        this.genes[i] = Vector.random2D()
        this.genes[i].setMag(DNA.maxForce)
      }
    }
  }
}

export default DNA
