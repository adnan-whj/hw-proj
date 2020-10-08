
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,bin4,bin4js;
var paper1;
var ground1;

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

  bin1 = new bin(windowWidth-400,windowHeight-70,200,20);
	bin2 = new bin(windowWidth-500,windowHeight-100,20,100);
  bin3 = new bin(windowWidth-300,windowHeight-100,20,100);
  bin4 = new bin(windowWidth-300,windowHeight-200,20,100);
  bin4js = new bin(windowWidth-400,windowHeight-150,200,200);

  ground1 = new Ground(windowWidth-windowWidth/2,windowHeight-50,windowWidth,20);

	paper1 = new Paper(100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill("green");
  textSize(40);
  stroke("blue");
  text("  Reduce DIRTINESS. Respect CLEANLINESS  ",0,windowHeight-550);
  textSize(35);
  stroke("pink");
  text("  As a part of swach BHARAT mission,you have to maintain cleanliness.",0,windowHeight - 500);
  text("  To throw paper into dustbin ,press UP ARROW",0,windowHeight-400);
  text("  You need to throw that waste paper into the dustbin",0,windowHeight - 450);
  bin1.display();
  bin2.display();
  bin3.display();
  bin4.display();
  bin4js.display();

  paper1.display();
  ground1.display();
  if (keyCode === UP_ARROW){
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-4});
  }  
drawSprites();
 
}



