class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(200,200, 20,options);
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
  
      fill("purple");
      ellipse(this.body.position.x,this.body.position.y,20,20 );

    }
  };