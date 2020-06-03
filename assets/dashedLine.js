class DashedLine {
  constructor(x1, y1, x2, y2, r, g, b, str, speed, dash, gap, nodeSize){
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.r = r
    this.g = g
    this.b = b
    this.str = str
    this.speed = speed
    this.dash = dash
    this.gap = gap
    this.nodeSize = nodeSize
    this.length = dist(this.x1, this.y1, this.x2, this.y2)
    this.currentLength = 0
    this.vector1 = createVector(x1, y1)
    this.vector2 = createVector(x2, y2)
  }

  display(){
      noStroke()
      fill(0)
      ellipse(this.x1, this.y1, this.nodeSize, this.nodeSize)
      ellipse(this.x2, this.y2, this.nodeSize, this.nodeSize)
      strokeWeight(this.str)
      stroke(this.r, this.g, this.b)
      drawingContext.setLineDash([this.dash, this.gap])
      line(this.vector1.x, this.vector1.y, this.vector2.x, this.vector2.y)
  }

  update(){
    if(this.currentLength < this.length){
      this.currentLength += this.speed
    }
  }
}
