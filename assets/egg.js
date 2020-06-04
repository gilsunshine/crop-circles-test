let next;
let arcs = []
let arms = []
let dashes = []
let intersections = []

function setup() {
  createCanvas(windowWidth, windowWidth)
  background(cream())
  angleMode(DEGREES)
  next = new NextButton()
  reset = new ResetButton()
}

function draw() {
  background(cream())
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
  for(let i = 0; i < arms.length; i++){
    arms[i].update()
  }
}

function mousePressed(){
  if(next.hovered){
    step ++
    advanceText()
  }
  if (step == 1){
    let dash = new DashedLine(windowWidth - windowWidth / 6, windowHeight / 2, windowWidth / 6, windowHeight / 2, bluish(), darkBlue(), 1, 2, 5, 5, 6)
    dashes.push(dash)
  }else if (step == 2) {
    let arc = new DrawArc(windowWidth / 2.5, windowHeight / 2, windowWidth / 4, windowWidth / 4, 180, -90, ochre(), darkRed(), brown(), 1.5, 2, 5);
    let arm = new DrawArm(windowWidth / 2.5, windowHeight / 2, windowWidth / 4, 180, -90, ochre(), 1, 2, 5);
    arcs.push(arc)
    arms.push(arm)
  }else if (step == 3) {
    let arc = new DrawArc(windowWidth - windowWidth / 2.5, windowHeight / 2, windowWidth / 4, windowWidth / 4, 180, 90, ochre(), darkRed(), brown(),1.5, 2, 5);
    let arm = new DrawArm(windowWidth - windowWidth / 2.5, windowHeight / 2, windowWidth / 4, 180, 90, ochre(), 1, 2, 5);
    arcs.push(arc)
    arms.push(arm)
  }else if (step == 4){
    let ints = ccIntersect( windowWidth - windowWidth / 2.5, windowHeight / 2, windowWidth / 2.5, windowHeight / 2, windowWidth / 8, windowWidth / 8)
    noStroke()
    fill(256, 150,0)

    intersections.push(new Intersection(ints[0][0], ints[0][1], 8, lightPink(), darkBlue(), 2))
    intersections.push(new Intersection(ints[1][0], ints[1][1], 8, lightPink(), darkBlue(), 2))

  }else if (step == 5){
    dash = new DashedLine(windowWidth / 2, windowHeight - windowHeight / 6, windowWidth / 2, windowHeight / 6, bluish(), darkBlue(), 1, 2, 5, 5, 6)
    dashes.push(dash)
  }else if (step == 6){
    arcs = []
    intersections = []
    clear()
    background(cream())
  }
  if(reset.hovered){
    arcs = []
    intersections = []
    dashes = []
    arms = []
    clear()
    background(cream())
    step = 0
    clearText()
  }
  return false;
}
