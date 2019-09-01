class Part2
{
    constructor(x,y,width,height)
    {
    var options =
    {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        
    }
    this.body = Bodies.circle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }


display()
{
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    var angle =this.body.angle;
    circleMode(CENTER);
    fill('cyan');
    stroke(0);
    strokeWeight(4);
    circle(0, 0, this.width, this.height);
   
    pop();

}
};