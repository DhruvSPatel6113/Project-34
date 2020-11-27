class Pendulum{

        constructor(x,y,colour){
    
           var options={
                restitution:1,
                friction:0,
                interia:Infinity
            }
 
            this.body=Matter.Bodies.circle(x,y,20,options);
            this.colour = colour;
            World.add(world,this.body);
        }
    
        display(){
    
            var pos=this.body.position;
    
            ellipseMode(CENTER);
            stroke("white");
            fill(this.colour);
            ellipse(pos.x,pos.y,38,38);
            
        }
    
    }