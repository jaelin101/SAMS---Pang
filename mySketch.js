//This game is based on a popular game, but I came up with most of the program independently.

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	moveBall();
	score = 0;
	hiScore = 0;
}

var SPEED = 7;
var x = 500;
var y = 200;
var changeOfX = SPEED;
var changeOfY = SPEED;
var hit = false;
var score;
var hiScore;
let speeds = [-7.01, -7, 7, 7.01];

function draw() {
	background(0, 0, 0, 50);
	noStroke();
	fill(0, 255, 0);
	rect(40, mouseY-20, 30, 130);
	fill(0, 0, 255);
	rect(width - 40, y-20, 30, 130);
	
	moveBall();
	
	fill(0, random(100, 200), random(100, 255)); //fills the text with greens and blues
	textStyle(BOLD);
	textSize(150);
	textAlign(CENTER, CENTER);
	text('p a n g', width/2 , height/2);
	
	fill(255);
	textSize(35);
	textAlign(RIGHT, TOP);
	text('score: ' + score, width - 25, 15);
	text('hi-score: ' + hiScore, width - 25,  55);
	
	//A partner advised me on the section below to allow the paddle to have an impact on the game.
	hit = collideRectCircle(40, mouseY, 30, 130, x, y, 45); //when ball collides with user paddle
	if (hit) {
		changeOfX = -changeOfX*1.2; //increases speed when ball hits user's paddle
		changeOfY = changeOfY*1.1; //increases speed when ball hits user's paddle
		score +=1; //increases score when ball hits the user's paddle
	}
	if (score >= hiScore) {
		hiScore = score;
	}
}

function moveBall() {
	fill(255);
	ellipse(x, y, 45, 45);
	
	x += changeOfX;
	y += changeOfY;
	
	if ( x >= width-57 ) {
		changeOfX = -changeOfX;
	} 
	if (x <= 0) {
		textAlign(CENTER, CENTER);
		text('loser :(', width/2, height/2 +80);
		fill(0, 0, 0);
		rect(width - 40, y-40,30, 180);
	}	
	if ( y >= height ) {
		changeOfY = -changeOfY;
	} 
	if (y <= 0) {
		changeOfY = -changeOfY;
	}
}

function keyReleased() {
	if (key === ' ') {
		x = width/2 - 70; // ball comes out of the a with spacebar
		y = height/2 - 10;// ball comes out of the a with spacebar
		score = 0;
		changeOfX = random(speeds); //sets ball to initial speed with random direction
		changeOfY = random(speeds); //sets ball to initial speed with random direction
		moveBall();
	}
}

function keyTyped() {
	if (key === 'r') {
		x = width/2 - 70; // ball comes out of the a
		y = height/2 - 10; // ball comes out of the a
		hiScore = 0; 
		score = 0;
		changeOfX = random(speeds);
		changeOfY = random(speeds);
		moveBall();
	}
}
