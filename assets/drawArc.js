class DrawArc {
  constructor(x, y, d1, d2, angle, rotation, r, g, b, str, speed, nodeSize){
    this.currentAngle = 0
    this.col = color(r, g, b)
    this.x = x
    this.y = y
    this.d1 = d1
    this.d2 = d2
    this.angle = angle
    this.rotation = rotation
    this.r = r
    this.g = g
    this.b = b
    this.str = str
    this.speed = speed
    this.nodeSize = nodeSize
  }

  display(){
    if(this.currentAngle > 0){
      push()
      translate(this.x, this.y)
      rotate(this.rotation)
      noStroke()
      fill(this.r, this.g, this.b)
      ellipse(0, 0, this.nodeSize)
      strokeWeight(this.str)
      noFill()
      stroke(this.r, this.g, this.b)
      drawingContext.setLineDash([])
      arc(0, 0, this.d1, this.d2, 0, this.currentAngle)
      pop()
    }
  }

  update(){
    if(this.currentAngle < this.angle){
      this.currentAngle += this.speed
    }
  }
}
