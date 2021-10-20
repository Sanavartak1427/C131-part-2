function setup(){
    canvas = createCanvas(640, 420);
    canvas.position(350, 150);
    
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Object";
}
img = "";
status ="";
objects = [];
function preload(){
    img = loadImage("bedroom.jpg");

}

function modelLoaded(){
    console.log("ModelLoaded!");
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results){
    if (error){
    console.log("error");
    }
    else{
        console.log(results);
        objects = results;
        }
}

function draw() {
    image(img, 0, 0, 640, 420);
fill('#e01507');
text("bedroom", 45, 75);
noFill();
stroke("#e01507");
rect(30, 60, 450, 350);

}