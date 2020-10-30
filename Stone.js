class Stone extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
    this.image = loadImage("sprites/stone.png");
  }

  display() {
    super.display();
  }
}
