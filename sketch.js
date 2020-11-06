
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bobObject1 =new BOB(100,200,50,50);
	bobObject2 = new BOB(150,200,50,50);
	bobObject3 = new BOB(200,200,50,50);
	bobObject4 = new BOB(250,200,50,50);
	bobObject5 = new BOB(300,200,50,50);
	
	rope1 = new Rope(bobObject1,roofObject -bobDiameter *2,0);
	rope2 = new Rope(bobObject2,roofObject -bobDiameter *2,0);
	rope3 = new Rope(bobObject3,roofObject -bobDiameter *2,0);
	rope4 = new Rope(bobObject4,roofObject -bobDiameter *2,0);
	rope5 = new Rope(bobObject5,roofObject -bobDiameter *2,0);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}



