
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var hammer;
var rubber,stone;

function setup() {
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

hammer = new Hammer(200,100);
stone = new Stone(700,320,70,70);
ground = new Ground(600,height,1200,20);
rubber = new Rubber(700,100,100,100);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  hammer.display();
  stone.display();
  ground.display(); 
  rubber.display();
}



