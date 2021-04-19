class drops
{
    constructor(x,y,r)
    {
        var options = 
        {
            //'restitution':0.1,
            'friction':0.1
            //'density':0.3
        }
        this.r = 5;
       this.rain = Bodies.circle(x,y,5,options)       
       World.add(world,this.rain);
     
    }
    display()
    {
        push();
        fill("blue");       
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r);
        pop();
    }
    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain,{x:random(0,350),y:random(0,350)})
        }
    }
    
}