var paper;
var d1,d2,d3;
var ground;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height - 20,800,10);
	paper = new Paper(100,height - 100,35,35);
	d1 = new Dustbin(600,580,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  d1.display();
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper.Body,paper.Body.position,{x : 85, y : -85});
	
	}   

}