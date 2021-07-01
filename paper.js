class paper{
    constructor(x,y,r,options){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.bodies=Bodies.circle(x,y,r,options);
        this.r=r;
        this.x=x;
        this.y=y;
        World.add(world, this.bodies);
    }
    display(){
       
        var paperpos=this.bodies.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop();
    
    }
}