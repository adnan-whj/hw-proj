class Paper{
    constructor(x,y,radius){
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density : 1.2
     }
     this.body = Bodies.circle(x,y,radius,options);
     this.radius = 70;

     this.image= loadImage("Sprites/paper.png");
     World.add(world,this.body);

    }
    display(){
     
     translate(this.body.position.x,this,body.position.y);
     image(this.image,100,100,this.radius);
        
    }

}