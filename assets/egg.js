let next;
let arcs = []
let arms = []
let dashes = []
let intersections = []
let intPoint
let r1
let r2
let arcSpacing

function setup() {
  createCanvas(windowWidth, windowWidth)
  background(cream())
  angleMode(DEGREES)
  next = new NextButton()
  reset = new ResetButton()
  intPoint = random(windowWidth/6,windowWidth-windowWidth/2.5)
  r1 = random(windowWidth/6, windowWidth/4)
  r2 = r1 - random(-windowWidth/12, windowWidth/12)
  arcSpacing = (r1 + r2)/2 - random(windowWidth/32, windowWidth/20)
  console.log(arcSpacing)
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

  for(let i = 0; i < arms.length; i++){
    if(step > 5){
      arms[i].length = 0
      arms[i].nodeSize = 0
    }
    arms[i].display()
    arms[i].update()
  }

  for(let i = 0; i < intersections.length; i++){
    intersections[i].display()
  }

}

function mousePressed(){
  if(next.hovered){
    step ++
    advanceText()
    if (step == 1){
      let dash = new DashedLine(windowWidth - windowWidth / 6, windowHeight / 2, windowWidth / 6, windowHeight / 2, bluish(), darkBlue(), 1, 6, 5, 5, 6)
      dashes.push(dash)
    }else if (step == 2) {
      let arc = new DrawArc(intPoint, windowHeight / 2, r1, r1, 180, -90, ochre(), darkRed(), brown(), 1.5, 2, 5);
      let arm = new DrawArm(intPoint, windowHeight / 2, r1, 180, -90, ochre(), 1.5, .5, 4, 2);
      arcs.push(arc)
      arms.push(arm)
    }else if (step == 3) {
      let arc = new DrawArc(intPoint + arcSpacing, windowHeight / 2, r2, r2, 180, 90, ochre(), darkRed(), brown(),1.5, 2, 5);
      let arm = new DrawArm(intPoint + arcSpacing, windowHeight / 2, r2, 180, 90, ochre(), 1.5, .5, 4, 2);
      arcs.push(arc)
      arms.push(arm)
    }else if (step == 4){
      let ints = ccIntersect( intPoint + arcSpacing, windowHeight / 2, intPoint, windowHeight / 2, r2/2, r1/2)
      noStroke()
      fill(256, 150,0)

      intersections.push(new Intersection(ints[0][0], ints[0][1], 8, lightPink(), bluish(), 2))
      intersections.push(new Intersection(ints[1][0], ints[1][1], 8, lightPink(), bluish(), 2))

    }else if (step == 5){
      dash = new DashedLine(intersections[0].x, windowHeight - windowHeight / 6, intersections[0].x, windowHeight / 6, bluish(), darkBlue(), 1, 6, 5, 5, 6)
      dashes.push(dash)
    }else if (step == 6){
      let int = llIntersect(windowWidth - windowWidth / 6, windowHeight / 2, windowWidth / 6, windowHeight / 2, intersections[0].x, windowHeight - windowHeight / 6, intersections[0].x, windowHeight / 6)
      arcs = []
      intersections = [new Intersection(int.x, int.y, 10, lightPink(), bluish(), 2)]
      clear()
      background(cream())
    }
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
    intPoint = random(windowWidth/6,windowWidth-windowWidth/2.5)
    r1 = random(windowWidth/6, windowWidth/4)
    r2 = r1 - random(-windowWidth/12, windowWidth/12)
    arcSpacing = (r1 + r2)/2 - random(windowWidth/32, windowWidth/20)

  }
  return false;
}
