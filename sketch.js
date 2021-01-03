
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof,rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    var mConstraint = MouseConstraint.create(engine,options);
    World.add(world,mConstraint);

	//Create the Bodies Here.
	roof = new Roof(400,125,250,15);
	
	bobObject1 = new Bob(330,325,bobDiameter/2);
	bobObject2 = new Bob(360,325,bobDiameter/2);
	bobObject3 = new Bob(390,325,bobDiameter/2);
	bobObject4 = new Bob(420,325,bobDiameter/2);
	bobObject5 = new Bob(450,325,bobDiameter/2);

	rope1 = new Rope(bobObject1.body,roof.body,bobDiameter*-2,0);
	rope2 = new Rope(bobObject2.body,roof.body,bobDiameter*-1,0);
	rope3 = new Rope(bobObject3.body,roof.body,bobDiameter*0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
	//alert(bobDiameter*-2+","+bobDiameter*-1+","+bobDiameter+","+bobDiameter*2+","+bobDiameter*3);
	//-60,-30,30,30,60
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roof.display();
  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display()

  drawSprites();
 
}



