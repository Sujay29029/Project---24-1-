
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(780,660,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(0, 255, 0));
  
  
  ball.display();
 
}



