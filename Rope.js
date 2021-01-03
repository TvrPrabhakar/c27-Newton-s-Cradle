class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
        this.rope=Constraint.create(options);
        //alert(options.pointB.x+","+options.pointB.y);
        World.add(world,this.rope);
    }
    display(){
        //alert("Priting offsetX: "+ this.offsetX);
        var bodyA=this.rope.bodyA.position;
        var bodyB=this.rope.bodyB.position;
        var anchorX=this.rope.pointB.x;
        var anchorY=this.rope.pointB.y;     
        //alert("Printing: " + this.rope.options);
        strokeWeight(3);
        line(bodyA.x,bodyA.y,bodyB.x+anchorX,bodyB.y+ anchorY);
        //line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
        
    }
}   