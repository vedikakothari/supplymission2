class Box{
     constructor(x,y,width,height){

        var options = {
               isStatic: true,
                friction : 1,
                density : 1
        }

        this.box = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);

     }
    
display(){
   var pos = this.box.position;
   rectMode(CENTER);
   fill("red");
   rect(pos.x,pos.y, this.width, this.height);
}
}