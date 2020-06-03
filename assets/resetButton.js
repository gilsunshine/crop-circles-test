class ResetButton {
  constructor(){
    this.diameter = 30
    this.x = windowWidth/2 - 25
    this.y = windowHeight - (1.5 * this.diameter)
    this.color = color(256, 0, 256)
    this.outline = color(0, 150, 256)
    this.hovered = false
  }

  display(){
    this.isHovered()
    strokeWeight(3);
    stroke(this.outline)
    fill(this.color);
    drawingContext.setLineDash([])
    push()
    translate(this.x, this.y)
    rotate(45)
    beginShape();
    vertex(-5, 17);
    vertex(5, 17);
    vertex(5, 5);
    vertex(17, 5);
    vertex(17, -5);
    vertex(5, -5);
    vertex(5, -17);
    vertex(-5, -17);
    vertex(-5, -5);
    vertex(-17, -5);
    vertex(-17, 5);
    vertex(-5, 5)
    endShape(CLOSE);
    pop()
  }

  isHovered(){
    this.distance = dist(this.x, this.y, mouseX, mouseY)
    if (this.distance < this.diameter / 2) {
      this.hovered = true
      this.outline = color(256, 150, 0)
    } else {
      this.hovered = false
      this.outline = color(0, 150, 256)
    }
  }
}
