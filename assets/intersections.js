class Intersection {
  constructor(x, y, d, r, g, b){
    this.diameter = d
    this.x = x
    this.y = y
    this.color = color(r, g, b)
  }

  display(){
    noStroke()
    fill(this.color);
    drawingContext.setLineDash([])
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
