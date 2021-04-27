const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var maxDrops = 100;
var Drops =[];


var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
                        "bat4.png","bat5.png","bat6.png",
                        "bat7.png","bat8.png","bat9.png",
                        "bat10.png","bat11.png","bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
   if(frameCount % 150 === 0)
   {
       for(var i = 0;i<maxDrops;i = i+1)
       {
         Drops.push(new drops(random(0,400),random(0,400)))
       }
   }
  
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
   var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }  

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    for(var i=0;i<maxDrops;i++){
        Drops[i].display();
        Drops[i].update();
       }
    umbrella.display();
    drawSprites();
}   

