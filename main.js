function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(560, 90);
    video = createCapture(VIDEO);
    video.size(500, 400);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#89CFF0");
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}