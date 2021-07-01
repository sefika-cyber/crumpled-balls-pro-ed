
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObject, dustbinObject, groundObject;
var world; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
  dustbinObj=new Dustbin(600,650);
	paperObject=new paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	//Create the Bodies Here.

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbinObj.display();
  groundObject.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
  }
}


