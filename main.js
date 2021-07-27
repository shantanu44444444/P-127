song = "";

function preload(){
song = loadSound("remix.mp3");
}

function setup(){
canvas = createCanvas( 440 , 440 );
canvas.center();

video = createCapture(VIDEO);
video.hide();
}

function draw(){ 
image( video , 0 , 0 , 440 , 440 );
}

function Play(){
song.play();
}

function stop(){
    song.stop();
}