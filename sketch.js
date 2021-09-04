const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var myEngine, myWorld;

var tower, towerImg, ground, cannon, cannonBallImg;
var backgroundImg;

//do 2 go to line 115
var balls = [];

//example of array
var a = [1,2,3,4,5,6,7];
console.log(a);
console.log(a.length);
//splice takes 1 parameter as position(index) and 2nd parameter as num of elements
a.splice(2,1,"hellow");
console.log("a",a);

//array holding different data types
var b = [1, "Adam", true];
console.log(b);
console.log(b[1]);

//array holding a list of arrays (arrays inside array)
var c = [[1,3], [2,4], [8,5], [9,7]];
console.log(c);
console.log(c[0][1]);

var cannonbase, shooter;

function preload()
{
  towerImg = loadImage("assets/tower.png");
  backgroundImg = loadImage('assets/background.gif');
  cannonBallImg = loadImage('assets/cannonball.png');
  cannonbase = loadImage('assets/cannon_base.png');
  shooter = loadImage('assets/CANON.png');
    
    
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

/*
    var render = Render.create({
        element: document.body,
        engine: myEngine,
        options: {
          width: 1200,
          height: 600,
          wireframes: false
        }
      });
      Render.run(render);
*/
    tower = new Tower(150, 380, 190, 330);

    ground = new Ground(600, height-1, 1200,1);
    angle = -PI/4
    cannon = new Cannon(190, 150, 90, 56,angle);
   
 

   //do 1 : show that in last class we created 1 cannonBall 
   //& then goto line 13
   cannonBall = new CannonBall(cannon.x, cannon.y, 40);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);

    ground.display();
    tower.display();
    cannon.display();
    //do 6 & run:error only when var is inside for cannonball declaration 
    //go to line 133 and comment
    //call the showCannonBalls
    for(var i=0; i<balls.length; i++)
    {
      showCannonBalls(balls[i], i);
    }

    //do4 and goto line 100
   // cannonBall.display();

    textSize(20)
    text(mouseX + "," + mouseY, mouseX,mouseY);
}

//do 5 --> only 104 and then call the function inside draw() line 80
//this is the array --> cannonball 
function showCannonBalls(ball, index)
{
  //do 5 and then call the function inside draw() line 85
    ball.display();

    //do7 and goto "CannonBall.js" for trajectory
    //remove the ball once it hits the ground or out of the canvas
    if(ball.body.position.x >= width ||ball.body.position.y >=height -50)
    {
      Matter.World.remove(myWorld, ball.body);
      balls.splice(index,1);
      
    }
}

//do3 and hide cannonball.display() in line 94

function keyPressed()
{
  if(keyCode === DOWN_ARROW)
  {
    //if u write the var outside then 138 & 135 both works but var declaration here will not let 138 work
    var cannonBall = new CannonBall(cannon.x +10, cannon.y+10, 40);
    balls.push(cannonBall);
  }
}

function keyReleased()
{
    if(keyCode === DOWN_ARROW)
    {
      //do6
     /*when we declare the variable outside (line 124)
      then we need cannonBall.shoot();
     */
    // cannonBall.shoot();
      
     balls[balls.length -1].shoot();
      //end 6 goto line 107
    
    }
}

