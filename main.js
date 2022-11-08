rightWrist = 0;
song="";

function draw()
{
    canvas=createCanvas(600,400);

    fill("#FF000");
    stroke("FF000");
        
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        
    }
    
    function gotPoses()
    {
        scoreRightWrist = results[0].pose.keypoints[10].score;    
        

    }

   

   isPlaying(song_variable.isPlaying);

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        stop(song_variable.stop);
        
    }




    