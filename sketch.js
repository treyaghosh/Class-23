const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower,ground;
var cannon;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    tower= new Tower(150,350,160,310);
    ground=new Ground(0,height-1,width*2,1);
    cannon = new Cannon(180,110,100,50,PI/4);
}

function draw(){
    background(250,250,250);
    Engine.update(engine);
    tower.display();
    ground.display();
    cannon.display();
}
