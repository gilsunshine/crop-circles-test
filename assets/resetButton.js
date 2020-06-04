class ResetButton {
  constructor(){
    this.diameter = 25
    this.x = windowWidth/2 - 25
    this.y = windowHeight - (1.5 * this.diameter)
    this.color = ochre()
    this.outline = blueGrey()
    this.hovered = false
    this.width = 4
    this.length = 15
  }

  display(){
    this.isHovered()
    strokeWeight(2.5);
    stroke(this.outline)
    fill(this.color);
    drawingContext.setLineDash([])
    push()
    translate(this.x, this.y)
    rotate(45)
    beginShape();
    vertex(-this.width, this.length);
    vertex(this.width, this.length);
    vertex(this.width, this.width);
    vertex(this.length, this.width);
    vertex(this.length, -this.width);
    vertex(this.width, -this.width);
    vertex(this.width, -this.length);
    vertex(-this.width, -this.length);
    vertex(-this.width, -this.width);
    vertex(-this.length, -this.width);
    vertex(-this.length, this.width);
    vertex(-this.width, this.width)
    endShape(CLOSE);
    pop()
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
