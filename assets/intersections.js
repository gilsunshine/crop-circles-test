class Intersection {
  constructor(x, y, d, col, outline, weight){
    this.diameter = d
    this.x = x
    this.y = y
    this.col = col
    this.outline = outline
    this.weight = weight
  }

  display(){
    strokeWeight(this.weight)
    stroke(this.outline)
    fill(this.col);
    drawingContext.setLineDash([])
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
