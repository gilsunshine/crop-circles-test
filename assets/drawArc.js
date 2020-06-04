class DrawArc {
  constructor(x, y, d1, d2, angle, rotation, col, cp, cpOut, str, speed, nodeSize){
    this.currentAngle = 0
    this.col = col
    this.cp = cp
    this.cpOut = cpOut
    this.x = x
    this.y = y
    this.d1 = d1
    this.d2 = d2
    this.angle = angle
    this.rotation = rotation
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
      fill(this.cp)
      ellipse(0, 0, this.nodeSize)
      strokeWeight(this.str)
      noFill()
      stroke(this.col)
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
