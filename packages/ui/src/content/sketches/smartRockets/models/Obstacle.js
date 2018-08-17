class Obstacle {
  constructor(x, y, x2, y2) {
    this.left = Math.min(x, x2)
    this.right = Math.max(x, x2)
    this.top = Math.min(y, y2)
    this.bottom = Math.max(y, y2)

    this.width = this.right - this.left
    this.height = this.bottom - this.top
  }

  draw(p) {
    p.fill(255)
    p.noStroke()
    p.rect(
      this.left * p.width,
      this.top * p.height,
      this.width * p.width,
      this.height * p.height
    )
  }

  checkCollision(x, y) {
    const { left, top, right, bottom } = this

    if (x > left && x < right && y > top && y < bottom) {
      return true
    }
    return false
  }
}

export default Obstacle
