const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon,slingShot;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(400,380,800,20);
  stand = new ground(250,350,200,50);
  
  block1 = new block(330,345,30,40);
  block2 = new block(360,345,30,40);
  block3 = new block(390,345,30,40);
  block4 = new block(420,345,30,40);
  block5 = new block(450,345,30,40);
  
  block6 = new block(360,305,30,40);
  block7 = new block(390,305,30,40);
  block8 = new block(420,305,30,40);

  block9 = new block(390,265,30,40);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new slingshot(polygon,{x:100,y:200});
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  ground1.display();
  stand.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  ground1.display();
  slingShot.display();
  ellipse(50,200,20,20);
  drawSprites();
}
function mouseReleased(){
  slingShot.fly();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function keyPressed (){
   if(keyCode === 32){
     slingshot.attach(this.polygon);
   }
}