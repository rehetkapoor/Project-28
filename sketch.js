const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mango1, mango2, mango3, mango4, mango5;
var boy,tree
var backgroundImg,platform;
var stone, S;
var gameState="inHand"

function preload(){
    boy=loadImage("sprites/boy.png");
    tree=loadImage("sprites/tree.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    mango1 = new Mango(1100,140,70,70);
    mango2 = new Mango(920,170,70,70);
    mango3 = new Mango(1000,140,70,70);
    mango4 = new Mango(920,90,70,70);
    mango5 = new Mango(810,160,70,70);

    stone = new Stone(100,100);
    S = new Chain(stone.body, {x:135, y:235});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    detectCollision(stone,mango1)
    detectCollision(stone,mango2)
    detectCollision(stone,mango3)
    detectCollision(stone,mango4)
    detectCollision(stone,mango5)

    image(tree, 700, 10, 500, 400)
    mango1.display();
    mango2.display();
    ground.display();

    mango3.display();
    mango4.display();

    mango5.display();
    image(boy, 100, 170, 200, 300)
 
    stone.display();

}

function mouseDragged(){
if (gameState==="inHand"){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased(){
    S.fly();
    gameState="launched"
}

function keyPressed(){
    if (keyCode===32){
        S.attach(stone.body);
    }
}

function detectCollision(stone, mango){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if (distance<=mango.r+stone.r){
        Matter.Body.setStatic(mango.body, false)
    }

}