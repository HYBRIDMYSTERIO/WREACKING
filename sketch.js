const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine , world ,box_2, box_1, ground,ball, rope ;


function setup() {
  var canvas = createCanvas(1000,800);

  

  engine = Engine.create();
  world = engine.world;
  box_1 = new Box(540,400,50,50);
  box_2 = new Box(540,350,50,50);
  box_3 = new Box(540,300,50,50);
  box_4 = new Box(540,250,50,50);
  box_5 = new Box(540,200,50,50);
  box_6 = new Box(540,150,50,50);
  box_7 = new Box(540,100,50,50);
  box_8 = new Box(540,50,50,50);
  box_9 = new Box(540,0,50,50);
  box_10 = new Box(600,400,50,50);
  box_11 = new Box(600,350,50,50);
  box_12 = new Box(600,300,50,50);
  box_13 = new Box(600,250,50,50);
  box_14 = new Box(600,200,50,50);
  box_15 = new Box(600,150,50,50);
  box_16 = new Box(600,100,50,50);
  box_17 = new Box(600,50,50,50);
  box_18 = new Box(600,0,50,50);
  box_19 = new Box(660,400,50,50);
  box_20 = new Box(660,350,50,50);
  box_21 = new Box(660,300,50,50);
  box_22 = new Box(660,250,50,50);
  box_23 = new Box(660,200,50,50);
  box_24 = new Box(660,150,50,50);
  box_25 = new Box(660,100,50,50);
  box_26 = new Box(660,50,50,50);
  box_27 = new Box(660,0,50,50);

  ball = new Ball(150,200,60);
  rope = new Rope(ball.body, {x:300, y:50})
  ground = new Ground(500,600,1000,20);












  

  
  
}

function draw() {
  background("black");
  Engine.update(engine);
  box_1.displayboxes();
  box_2.displayboxes();
  box_3.displayboxes();
  box_4.displayboxes();
  box_5.displayboxes();
  box_6.displayboxes();
  box_7.displayboxes();
  box_8.displayboxes();
  box_9.displayboxes();
 
  box_10.displayboxes();
  box_11.displayboxes();
  box_12.displayboxes();
  box_13.displayboxes();
  box_14.displayboxes();
  box_15.displayboxes();
  box_16.displayboxes();
  box_17.displayboxes();  
  box_18.displayboxes();

  box_19.displayboxes();
  box_20.displayboxes();
  box_21.displayboxes();
  box_22.displayboxes();
  box_23.displayboxes();
  box_24.displayboxes();
  box_25.displayboxes();
  box_26.displayboxes();  
  box_27.displayboxes();

  ground.displayground();
  ball.displayball();
  rope.displayrope();
  
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}
