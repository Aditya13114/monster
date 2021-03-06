class Bob{
    constructor(x,y,R){
     var options = {isStatic : false, restitution : 1.3, friction:0, density : 1.2}
     this.body = Bodies.circle(x,y,R,options);
     this.Radius = R;
     World.add(world, this.body);
    }

  display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS);
      ellipse(0,0,this.Radius, this.Radius);
      pop();
  }

}