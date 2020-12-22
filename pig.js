class Pig{
    constructor(x, y){
        //JSON Format
        var options = {
            'density': 1,
            'friction': 1,
            'restitution': 0.8
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height, [options]);
        this.width = 50;
        this.height = 50;
        World.add (world, this.body);

  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push ();
      translate (pos.x , pos.y);
      rotate (angle);
      rectMode (CENTER);
      fill ("red");
      rect (0, 0, this.width, this.height);
      pop ();
  }
}