
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustBin;
var Ball;

var edge1, edge2, edge3;

function preload()
{	
dustBin = loadImage("Images/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Paper(100, 250);
	edge1 = new Dustbin(1050, 665, 200, 15);
	edge2 = new Dustbin(940, 622, 20, 100);
	edge3 = new Dustbin(1155, 622, 20, 100);
	
	var ground_options = {
		isStatic:true
	}
	ground = Bodies.rectangle(600, 680, 1200, 20, ground_options);
	World.add(world, ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  edge1.display();
  edge2.display();
  edge3.display();
  Ball.display();
  keyPressed();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(Ball.body, Ball.body.position, {x: 85, y:-85});
	}
}

