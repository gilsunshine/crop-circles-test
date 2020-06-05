function advanceText(){
  let text = ""
  if (step == 1){
    let div = document.createElement("DIV")
    div.innerHTML = "1. Mark a line."
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
  if (step == 2){
    let div = document.createElement("DIV")
    div.innerHTML = "2. Draw an arc starting from some point along the line."
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
  if (step == 3){
    let div = document.createElement("DIV")
    div.innerHTML = "3. Draw an arc starting from a second point along the line, such that the two arcs intersect at two points."
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
  if (step == 4){
    let div = document.createElement("DIV")
    div.innerHTML = "4. Identify the points of intersection."
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
  if (step == 5){
    let div = document.createElement("DIV")
    div.innerHTML = "5. Draw a line that passes through the points of intersection."
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
  if (step == 6){
    let div = document.createElement("DIV")
    div.innerHTML = "6. You have two perpendicular lines!"
    parent.document.getElementById("instructions").appendChild(div)
    let br = document.createElement("BR")
    parent.document.getElementById("instructions").appendChild(br)

  }
}

function clearText(){
  parent.document.getElementById("instructions").innerHTML = ""
}
