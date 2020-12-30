
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1,rope2,rope3,rop4,rope5;

function preload() {
		
}

	function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	//roof
	roof= new Roof(400,100,250,20);
	//bob1
	bob1=new Bob(400,400);
	rope1=new Rope(bob1.body,{x:400,y:200});
	//bob2
	bob2=new Bob(450,400);
	rope2=new Rope(bob2.body,{x:450,y:200});
	//bob3
	bob3=new Bob(500,400);
	rope3=new Rope(bob3.body,{x:500,y:200});
	//bob4
	bob4=new Bob(550,400);
	rope4=new Rope(bob4.body,{x:550,y:200});
	//bob5
	bob5=new Bob(600,400);
	rope5=new Rope(bob5.body,{x:600,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("yellow");
  
  if (keyDown("up")){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-25,y:-15});
}

	//roof
	roof.display();
	//bob1
	bob1.display();
	rope1.display();
	//bob2
	bob2.display();
	rope2.display();
	//bob3
	bob3.display();
	rope3.display();
	//bob4
	bob4.display();
	rope4.display();
	//bob5
	bob5.display();
	rope5.display();
 
}



