// put in setup whatever needs to be done to get things started
function setup() {

    // this line creates a virtual canvas and attaches it to your HTML
    createCanvas(700, 551).parent('p5')
    noLoop()
}

// put in draw everything you want to draw to the canvas
function draw() {

    // start off with a background
    background(242, 241, 240)
    strokeWeight(1)
    stroke(0, 0, 0)


    // draw here!
strokeWeight(1)
line()


strokeWeight(2)


noFill()
beginShape()
stroke(117, 26, 12)
curveVertex(0, 109)
curveVertex(0, 109)
curveVertex(160, 153)
curveVertex(302, 208)
stroke(52, 16, 117)
curveVertex(284, 117)
curveVertex(416, 85)
curveVertex(456, 53)
curveVertex(699, 115)
curveVertex(699, 115)
endShape()

noFill()
beginShape()
stroke(153, 32, 40)
curveVertex(311, 203)
curveVertex(311, 203)
curveVertex(506, 165)
curveVertex(699, 187)
curveVertex(699, 187)
endShape()

stroke(10, 31, 89)
line(0, 304, 699, 304)

noFill()
beginShape()
stroke(194, 159, 21, 128)
curveVertex(520, 305)
curveVertex(520, 305)
curveVertex(434, 323)
curveVertex(418, 372)
curveVertex(464, 419)
curveVertex(399, 453)
curveVertex(106, 549)
curveVertex(106, 549)
endShape()

noFill()
beginShape()
stroke(194, 159, 21, 128)
curveVertex(618, 306)
curveVertex(618, 306)
curveVertex(539, 355)
curveVertex(539, 355)
curveVertex(620, 404)
curveVertex(560, 492)
curveVertex(456, 547)
curveVertex(456, 547)
endShape()

strokeWeight(25)
stroke(48, 17, 92, 128)
line(440, 418, 2, 418)
stroke(36, 6, 79, 128)
line(450, 433, 4, 433)

noFill()
beginShape()

endShape()

}


// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
