textX = 0;
textY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
show = 22;

function setup()
{

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}


function draw() 
{

document.getElementById("text_side").innerHTML = "Width and Height of text will be = " + difference +"px"
 background('#454545');
 textSize('25px')
 fill('ECE5E5')
 text( textX, textY, show);

}

function modelLoaded()
{

console.log('PoseNet is intialized')

}

function gotPoses(results)
{

if(results.length > 0)
{

console.log(results);
textX = results[0].pose.nose.x;
textY = results[0].pose.nose.y;
console.log("textX = " + textX +" textY = " + textY);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);

console.log("leftWristX =" + leftWristX + " rightWristX = "+rightWristX + " difference = " + difference);

}

}


