function setup () {
    canvas = createCanvas(400,400)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background("#FFE7CC")};

    function modelLoaded(){
        console.log('Posenet Is Initalized');
    }
    function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        difference = floor(leftwristx - rightwristx)
    }
}