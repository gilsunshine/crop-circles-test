class DrawArm {
  constructor(x, y, length, angle, rotation, col, str, dash, gap, speed){
    this.currentAngle = 0
    this.col = col
    this.x = x
    this.y = y
    this.length = length
    this.angle = angle
    this.rotation = rotation
    this.str = str
    this.dash = dash
    this.gap = gap
    this.speed = speed
  }

  display(){
    push()
    translate(this.x, this.y)
    rotate(this.rotation)
    rotate(this.currentAngle)
    stroke(this.col)
    strokeWeight(this.str)
    drawingContext.setLineDash([this.dash, this.gap])
    line(0,0, this.length / 2,0)
    pop()
  }

  update(){
    if(this.currentAngle < this.angle){
      this.currentAngle += this.speed
    }
    else{
      // this.length = 0
      this.col = color(0,0,0,0)
    }
  }
}
