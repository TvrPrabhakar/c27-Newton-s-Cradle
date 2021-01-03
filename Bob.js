class Bob{
    constructor(x,y,radius){
        var options={
          'restitution' :1,
          'friction' :15,
          'frictionAir':0,
          'density':15,
        }
        this.body=Bodies.circle(x,y,radius,options);    
        Bob.debug = true;
        this.radius=radius;   
        this.x=x;
        this.y=y;
        World.add(world,this.body);

}
      display(){
        var pos=this.body.position;
        
        //ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius*2);   
        console.log(int(pos.x),int(pos.y),this.radius*2);
    }
}
