let img;
let imageheight = 512;
let imagewidth = 410;

function preload(){
    img = loadImage("assets/pallas_cat.jpg");
}

function setup(){
    createCanvas(512, 410)
}

function draw(){
    
    if( imageheight < img.width && imagewidth < img.height) {
        imageheight++
        imagewidth++
    }

    imageMode(CENTER)

    image(img, width/2, height/2, imageheight, imagewidth)
}