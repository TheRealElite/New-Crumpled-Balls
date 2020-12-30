class Dustbin {

    constructor(x, y, width, height){
       var options={
            isStatic:true,
            friction:1,
            density:10
        }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    }
    display() {
        var posit = this.body.position;
        rectMode(CENTER);
        rect(posit.x, posit.y, this.width, this.height);
    }
    }