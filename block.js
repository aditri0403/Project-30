class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 0;
        World.add(world, this.body);
      }
      display(){
        fill("yellow");
        var angle = this.body.angle;
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        rotate(angle);
        console.log(this.body.speed);
        if(this.body.speed < 3){
          this.body.display;
        }
        else{
            World.remove(world,this.body);
            push()
            this.visibilty = this.visibilty-5;
            tint(0,this.visibilty);
            pop()
        }
        
    }
};