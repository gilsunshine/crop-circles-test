let next;
let arcs = []
let dashes = []
let intersections = []

function setup() {
  createCanvas(windowWidth, windowWidth)
  background(240)
  angleMode(DEGREES)
  next = new NextButton()
  reset = new ResetButton()
}

function draw() {
  next.display()
  reset.display()
  for(let i = 0; i < dashes.length; i++){
    dashes[i].display()
    dashes[i].update()
  }
  for(let i = 0; i < arcs.length; i++){
    arcs[i].display()
    arcs[i].update()
  }

  for(let i = 0; i < intersections.length; i++){
    intersections[i].display()
  }
}

function mousePressed(){
  if(next.hovered){
    step ++
    advanceText()
  }
  if (step == 1){
    let dash = new DashedLine(windowWidth - windowWidth / 6, windowHeight / 2, windowWidth / 6, windowHeight / 2, 0, 0, 0, 1, 2, 5, 5, 6)
    dashes.push(dash)
  }else if (step == 2) {
    let arc = new DrawArc(windowWidth / 2.5, windowHeight / 2, windowWidth / 4, windowWidth / 4, 180, -90, 256, 150, 0, 2, 4, 5);
    arcs.push(arc)
  }else if (step == 3) {
    let arc = new DrawArc(windowWidth - windowWidth / 2.5, windowHeight / 2, windowWidth / 4, windowWidth / 4, 180, 90, 256, 150, 0, 2, 4, 5);
    arcs.push(arc)
  }else if (step == 4){
    let ints = ccIntersect( windowWidth - windowWidth / 2.5, windowHeight / 2, windowWidth / 2.5, windowHeight / 2, windowWidth / 8, windowWidth / 8)
    noStroke()
    fill(256, 150,0)

    intersections.push(new Intersection(ints[0][0], ints[0][1], 8, 256, 0, 256))
    intersections.push(new Intersection(ints[1][0], ints[1][1], 8, 256, 0, 256))

  }else if (step == 5){
    dash = new DashedLine(windowWidth / 2, windowHeight - windowHeight / 6, windowWidth / 2, windowHeight / 6, 0, 0, 0, 1, 2, 5, 5, 6)
    dashes.push(dash)
  }else if (step == 6){
    arcs = []
    intersections = []
    clear()
    background(240)
  }
  if(reset.hovered){
    arcs = []
    intersections = []
    dashes = []
    clear()
    background(240)
    step = 0
    clearText()
  }
  return false;
}
