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

//noFill - don't fill in shape
//beginShape - duh
//endShape - duh
//stoke - pick RGB color
//curveVertex - draws from last vertex

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
stroke(194, 159, 21)
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
stroke(194, 159, 21)
curveVertex(618, 306)
curveVertex(618, 306)
curveVertex(539, 355)
curveVertex(539, 355)
curveVertex(620, 404)
curveVertex(560, 492)
curveVertex(630, 551)
curveVertex(630, 551)
endShape()

stroke(48, 17, 92, 128)
line(440, 418, 2, 418)
stroke(36, 6, 79, 128)
line(450, 433, 4, 433)


noFill()
beginShape()
stroke(48, 17, 92, 128);
var x, y;
var height = 551
var width = 700

for (y = 0; y < height; y++){
  for(x = 0; x < width; x++){
    /*if ((x % 70 == 0) && (y % 70 == 0)) {
      noFill()
      beginShape()
      stroke(194, 159, 21, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }*/

    if ((x < 470 && x > 0) && (y < 450 && y > 400)){
      noFill()
      beginShape()
      stroke(73, 53, 89)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 700 && x > 0) && (y < 105 && y > 0)){
      noFill()
      beginShape()
      stroke(225, 223, 230, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 700 && x > 313) && (y < 300 && y > 103))
    {
      noFill()
      beginShape()
      stroke(145, 65, 65, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 313 && x > 0) && (y < 300 && y > 103))
    {
      noFill()
      beginShape()
      stroke(176, 162, 162, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 617 && x > 400) && (y < 309 && y > 290))
    {
      noFill()
      beginShape()
      stroke(35, 35, 84, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 515 && x > 437 ) && (y < 385 && y > 319 ))
    {
      noFill()
      beginShape()
      stroke(174, 174, 194, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 400 && x > 0 ) && (y < 500 && y > 445 ))
    {
      noFill()
      beginShape()
      stroke(166, 139, 93, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 400 && x > 260 ) && (y < 551 && y > 500 ))
    {
      noFill()
      beginShape()
      stroke(120, 53, 99, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 600 && x > 460 ) && (y < 460 && y > 380 ))
    {
      noFill()
      beginShape()
      stroke(174, 174, 194, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 530 && x > 400 ) && (y < 551 && y > 450 ))
    {
      noFill()
      beginShape()
      stroke(174, 174, 194, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 400 && x > 0 ) && (y < 551 && y > 500 ))
    {
      noFill()
      beginShape()
      stroke(174, 174, 194, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 400 && x > 0 ) && (y < 510 && y > 498 ))
    {
      noFill()
      beginShape()
      stroke(120, 53, 99, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 20 && x > 0 ) && (y < 305 && y > 290 ))
    {
      noFill()
      beginShape()
      stroke(46, 67, 112, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 40 && x > 22 ) && (y < 305 && y > 280 ))
    {
      noFill()
      beginShape()
      stroke(46, 67, 112, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 60 && x > 42 ) && (y < 305 && y > 285 ))
    {
      noFill()
      beginShape()
      stroke(46, 67, 112, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //This is an examole comment
    if ((x < 260 && x > 62 ) && (y < 305 && y > 298 ))
    {
      noFill()
      beginShape()
      stroke(46, 67, 112, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //clouds
    if ((x < 502 && x > 420 ) && (y < 180 && y > 120 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 200)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 412 && x > 335 ) && (y < 170 && y > 120 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 460 && x > 380 ) && (y < 175 && y > 110 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 365 && x > 300 ) && (y < 130 && y > 70 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 575 && x > 490 ) && (y < 160 && y > 115 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 652 && x > 532 ) && (y < 146 && y > 90 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 110)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 190 && x > 110 ) && (y < 85 && y > 15 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 1280)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //reflections
    if ((x < 270 && x > 210 ) && (y < 551 && y > 502 ))
    {
      noFill()
      beginShape()
      stroke(252, 254, 255, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 570 && x > 512 ) && (y < 480 && y > 440 ))
    {
      noFill()
      beginShape()
      stroke(163, 109, 34, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 536 && x > 496 ) && (y < 400 && y > 370 ))
    {
      noFill()
      beginShape()
      stroke(163, 109, 34, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //center of horizon line
    if ((x < 410 && x > 270 ) && (y < 308 && y > 278 ))
    {
      noFill()
      beginShape()
      stroke(77, 89, 150, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //center tree
    if ((x < 280 && x > 170 ) && (y < 410 && y > 230 ))
    {
      noFill()
      beginShape()
      stroke(242, 242, 240)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 240 && x > 225 ) && (y < 250 && y > 235 ))
    {
      noFill()
      beginShape()
      stroke(145, 78, 104)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 280 && x > 254 ) && (y < 270 && y > 230 ))
    {
      noFill()
      beginShape()
      stroke(145, 78, 104)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 296 && x > 274 ) && (y < 288 && y > 260 ))
    {
      noFill()
      beginShape()
      stroke(145, 78, 104)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 280 && x > 274 ) && (y < 360 && y > 286 ))
    {
      noFill()
      beginShape()
      stroke(145, 78, 104)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 288 && x > 228 ) && (y < 410 && y > 360 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 276 && x > 236 ) && (y < 290 && y > 246 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 180 && x > 142 ) && (y < 310 && y > 254 ))
    {
      noFill()
      beginShape()
      stroke(242, 242, 240)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //grass
    if ((x < 168 && x > 0 ) && (y < 400 && y > 302 ))
    {
      noFill()
      beginShape()
      stroke(160, 186, 101, 200)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 450 && x > 278 ) && (y < 400 && y > 305 ))
    {
      noFill()
      beginShape()
      stroke(174, 174, 194, 100)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //horizon line trees
    if ((x < 8 && x > 0 ) && (y < 298 && y > 260 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 40 && x > 12 ) && (y < 302 && y > 260 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 111 && x > 50 ) && (y < 302 && y > 245 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 90 && x > 50 ) && (y < 302 && y > 240 ))
    {
      noFill()
      beginShape()
      stroke(240, 239, 223, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    //side trees
    if ((x < 610 && x > 550 ) && (y < 350 && y > 230 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 580 && x > 550 ) && (y < 320 && y > 230 ))
    {
      noFill()
      beginShape()
      stroke(240, 239, 223, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 686 && x > 615 ) && (y < 360 && y > 220 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 646 && x > 615 ) && (y < 307 && y > 220 ))
    {
      noFill()
      beginShape()
      stroke(240, 239, 223, 128)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 666 && x > 604 ) && (y < 420 && y > 330 ))
    {
      noFill()
      beginShape()
      stroke(207, 194, 199)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
    if ((x < 700 && x > 0 ) && (y < 551 && y > 0 ))
    {
      noFill()
      beginShape()
      stroke(224, 224, 215, 80)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      curveVertex(x, y)
      endShape()
    }
  }
}
endShape()

}


// this function will print coordinates to the console whenever you click
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}
