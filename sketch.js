const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var part1,part2,part3,part4,part5,part6;
var ground;
var bg;

function preload()
{

  bg = loadImage("Bg/bg.png");
}

function setup() 
{
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  part1 = new Part1(80,300,150,20);
  
  part2 = new Part1(80,280,150,20);

  part3 = new Part1(30,250,20,50);

  part4 = new Part1(85,250,20,50);

  part5 = new Part1(60,200,100,50);

  part6 = new Part2(250,100,200,20);

  ground = new Ground(600,height,1200,20);
}

function draw()
 {
  background(bg); 

  Engine.update(engine);
   
  part1.display();
  part2.display();
  part3.display();
  part4.display();
  ground.display();
  part5.display();
  part6.display();
  drawSprites();
 }