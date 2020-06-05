class DashedLine {
  constructor(x1, y1, x2, y2, col, nodeColor, str, speed, dash, gap, nodeSize){
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.col = col
    this.nodeColor = nodeColor
    this.str = str
    this.speed = speed
    this.dash = dash
    this.gap = gap
    this.nodeSize = nodeSize
    this.length = dist(this.x1, this.y1, this.x2, this.y2)
    this.currentLength = 0
    this.vector1 = createVector(x1, y1)
    this.vector2 = createVector(x2, y2)
    this.xFactor = x2 - x1
    this.yFactor = y2 - y1
    }

  display(){
      drawingContext.setLineDash([this.dash, this.gap])
      push()
      translate(this.x1, this.y1)
      let v0 = createVector(0,0)
      let v1 = createVector((this.vector2.x - this.vector1.x), (this.vector2.y- this.vector1.y))
      v1.setMag(this.currentLength)
      strokeWeight(this.str)
      stroke(this.col)
      line(0,0, v1.x, v1.y)
      noStroke()
      fill(this.nodeColor)
      ellipse(0, 0, this.nodeSize, this.nodeSize)
      ellipse(v1.x, v1.y, this.nodeSize, this.nodeSize)
      pop()
  }

  update(){
    if(this.currentLength < this.length){
      this.currentLength += this.speed
    }
  }
}
