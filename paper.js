class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
      }
      this.r = radius
      this.x = x
      this.y = y
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2, options);
      

      World.add(world, this.body);
    }
    display(){
      //fill("white");
      push ()
      ellispeMode(CENTER);
      translate(this.body.position.x, this.body.position.y);
      ellispe(0,0,this.r,this.r)
     pop ()
    }
  }