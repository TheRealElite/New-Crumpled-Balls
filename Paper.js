class Paper {

constructor(x, y){
   var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
this.x = x;
this.y = y;
this.radius = 60;
this.body = Bodies.circle(this.x, this.y, this.radius, options);
this.image = loadImage("Images/paper.png");
World.add(world, this.body);
}
display() {
    var pos = this.body.position;
    push();
    imageMode(RADIUS);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    pop();
}
}