nose_x = 0;
nose_y = 0;
right_wrist = 0;
left_wrist= 0;
difference = 0 ;

function setup(){
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    PoseNet = ml5.poseNet(video,modelloaded);
    PoseNet.on('pose',gotposes);
}

function modelloaded(){
    console.log('model loaded');
}

function gotposes(results){

    if(results.length > 0){

    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    right_wrist = results[0].pose.rightWrist.x;
    left_wrist = results[0].pose.leftWrist.x;
    difference = floor(left_wrist - right_wrist);
    console.log("length" + difference);

    }

}

function draw()
 { 
    zeus = document.getElementById("zeus").value;
    background('#6C91C2');
    textSize(difference);
    fill(zeus);
    text(zeus, 50, 400);
}
