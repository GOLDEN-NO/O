const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

var engine, world;
var ground, building, wreckingBall, aine;


function setup(){
    createCanvas(3000,800);
    engine=Engine.create();
    world=engine.world;
    ground = new Grass(600,600,1200,20)
    building = new BUilding()
    wreckingBall = new AWrecking()
    aine = new Ropes(wreckingBall.body,{x:500,y:50})
}
function draw(){
  background("red");
  Engine.update(engine);
  ground.display()
  building.display()
  wreckingBall.display()
  aine.display()
}