let imgSky;
let imgPlane
let x = -50
let y = -300

function preload(){
    imgSky = loadImage("assets/blue-sky.jpg")
    imgPlane = loadImage("assets/plane.png")
}

function setup (){
    createCanvas(800, 600)
}

function draw(){
    if(x < imgSky.width) {
        x++;
    }
    if(x >= imgSky.width) {
        x = -100
    }
    if(y < imgSky.width) {
        y++
    }
    if(y>= imgSky.width) {
        y = -600
    }

    imageMode(CENTER)
    image(imgSky, width/2, height/2, 0, 0)
    image(imgPlane, x, 450, 300, 300)
    image(imgPlane, y, 200, 100, 100)
}