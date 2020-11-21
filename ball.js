class Ball {
    constructor(x,y,r){
        var option = {
            density:1,
            frictionAir : 0.005
        }
        this.body = Bodies.circle(x,y,r,option);
        this.radius = r;
        

        World.add(world,this.body);

    }
 displayball(){
     var position = this.body.position;
     var angle = this.body.angle;
     push();
     translate(position.x , position.y);
     rotate(angle);
     
     fill("blue");
     ellipse(0,0,this.radius);
     pop();

 }
}