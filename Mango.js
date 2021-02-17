class Mango{
  constructor(x, y,r) {
    var options = {
        'restitution':0,
        'isStatic': true,
        'friction': 1,
    }
    this.x=x
    this.y=y
    this.r=r
    this.body = Bodies.rectangle(this.x, this.y, this.r, options);
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
  }
}