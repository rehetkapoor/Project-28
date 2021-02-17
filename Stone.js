class Stone{
  constructor(x, y, r) {
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.2,
        'isStatic':false
    }
    this.x=x
    this.y=y
    this.r=r
    this.body = Bodies.rectangle(this.x, this.y, this.r*2, options);
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
  }
}
