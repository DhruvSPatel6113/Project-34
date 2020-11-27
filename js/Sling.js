class Sling{

    constructor(bodyA , pointB){

       var options = {

        bodyA:bodyA,
        pointB:pointB,
        stiffness:1 ,
        length:220

       } 

        this.sling = Constraint.create(options);

       World.add(world , this.sling);

    }

    display(){

        push();
        strokeWeight(4);
        line(this.sling.bodyA.position.x , this.sling.bodyA.position.y , this.sling.pointB.x , this.sling.pointB.y);
        pop();


    }

}

function mouseDragged(){

    Matter.Body.setPosition(bob5.body , {x:mouseX , y:mouseY});

}