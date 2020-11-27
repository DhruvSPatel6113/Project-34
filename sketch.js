const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1 , bob2 , bob3 , bob4 , bob5;

var string1 , string2 , string3 , string4 , string5;

function setup(){
    createCanvas(windowWidth/2 , windowHeight/2);

    engine = Matter.Engine.create();
    world = engine.world;

    bob1 = new Pendulum(250 , 250, "lightseaGreen");
    bob2 = new Pendulum(290 , 250, "lightseaGreen");
    bob3 = new Pendulum(330 , 250, "lightseaGreen");
    bob4 = new Pendulum(370 , 250, "lightseaGreen");
    bob5 = new Pendulum(410 , 250, "lightseaGreen");

    string1 = new Sling(bob1.body , {x:250 , y:50});
    string2 = new Sling(bob2.body , {x:290 , y:50});
    string3 = new Sling(bob3.body , {x:330 , y:50});
    string4 = new Sling(bob4.body , {x:370 , y:50});
    string5 = new Sling(bob5.body , {x:410 , y:50});

    Engine.run(engine);

}

function draw(){
    background(0);

    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();

}