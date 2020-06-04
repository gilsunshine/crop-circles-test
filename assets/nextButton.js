class NextButton {
  constructor(){
    this.diameter = 25
    this.x = windowWidth/2 + 25
    this.y = windowHeight - (1.5 * this.diameter)
    this.color = ochre()
    this.outline = blueGrey()
    this.hovered = false
  }

  display(){
    this.isHovered()
    strokeWeight(2.5);
    stroke(this.outline)
    fill(this.color);
    drawingContext.setLineDash([])
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  isHovered(){
    this.distance = dist(this.x, this.y, mouseX, mouseY)
    if (this.distance < this.diameter / 2) {
      this.hovered = true
      this.outline = pumpkin()
    } else {
      this.hovered = false
      this.outline = blueGrey()
    }
  }
}
