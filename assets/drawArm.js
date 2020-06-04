class DrawArm {
  constructor(x, y, length, angle, rotation, col, str, speed, nodeSize){
    this.currentAngle = 0
    this.col = col
    this.x = x
    this.y = y
    this.length = length
    this.angle = angle
    this.rotation = rotation
    this.str = str
    this.speed = speed
    this.nodeSize = nodeSize
  }

  update(){
    if(this.currentAngle < this.angle){
      push()
      translate(this.x, this.y)
      rotate(this.rotation)
      rotate(this.currentAngle)
      stroke(this.col)
      line(0,0, this.length / 2,0)
      ellipse(this.length /2 , 0, this.nodeSize)
      pop()
      this.currentAngle += this.speed
    }
  }
}
