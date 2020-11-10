
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2,bob3,bob4,bob5,roof
var rope, rope1, rope2, rope3, rope4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(400,400,75);
	bob2=new Bob(440,400,75);
	bob3=new Bob(480,400,75);
	bob4=new Bob(360,400,75);
	bob5=new Bob(320,400,75);
	roof=new Roof(400,200,600,20);
	Engine.run(engine);
	rope = new Rope(bob.body,{x:200, y:50});
	rope1 = new Rope(bob.body,{x:200, y:50});
	rope2 = new Rope(bob.body,{x:200, y:50});
	rope3 = new Rope(bob.body,{x:200, y:50});
	rope4 = new Rope(bob.body,{x:200, y:50});
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
}



