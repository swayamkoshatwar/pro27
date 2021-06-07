
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
var bobObject,roofObject;
//var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roofObject=new roof(480,100,250,30);

	bob1=new bob(400,300);
	bob2=new bob(450,300);
	bob3=new bob(500,300);
	bob4=new bob(550,300);
	bob5=new bob(600,300);


	rope1=new rope(bob1.body,roofObject.body,-80);
	rope2=new rope(bob2.body,roofObject.body,-40);
	rope3=new rope(bob3.body,roofObject.body,0);
	rope4=new rope(bob4.body,roofObject.body,40);
	rope5=new rope(bob5.body,roofObject.body,80);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  roofObject.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed()
 { if (keyCode === UP_ARROW) 
{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50}); } }



