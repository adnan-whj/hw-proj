class bin {
  constructor(x,y,width,height){
   var options={
      isStatic : true
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   this.image=loadImage("Sprites/dustbingreen (1).png");
  
   World.add(world,this.body);
  }
  display(){
    
    image(this.image,windowWidth-300,windowHeight-260,this.width,this.height);
  }

}