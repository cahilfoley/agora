class Obstacle {
  constructor(x, y, w, h) {
    this.left = Math.min(x, x + w)
    this.right = Math.max(x, x + w)
    this.top = Math.min(y, y + h)
    this.bottom = Math.max(y, y + h)

    this.width = this.right - this.left
    this.height = this.bottom - this.top
  }

  draw(p) {
    p.fill(255)
    p.noStroke()
    p.rect(this.left, this.top, this.width, this.height)
  }

  checkCollision(x, y) {
    const { left, right, top, bottom } = this
    if (x > left && x < right && y > top && y < bottom) {
      return true
    }
    return false
  }
}

export default Obstacle
