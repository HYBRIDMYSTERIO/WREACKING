class Rope {
    constructor(bodyA , pointB){
        var option = {
            bodyA:bodyA,
            pointB: pointB,
            length : 250,
            stiffness : 2.5
        }
        this.pointB = pointB;
        this.rope = Constraint.create(option)
        
        

        World.add(world,this.rope);

    }
 displayrope(){
     if(this.rope.bodyA){
     var positionA = this.rope.bodyA.position;
     var pointB = this.pointB;
     
     push();
     stroke(48,22,8);
     strokeWeight(4);
     line(pointB.x, pointB.y, positionA.x, positionA.y);
     pop();

 }
 }
}