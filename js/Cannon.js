//cannon is not a physics body

class Cannon{
  
    constructor(x,y,width,height,angle)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
     
        this.angle = angle;
         this.cb= loadImage('assets/cannon_base.png');
        this.s = loadImage('assets/CANON.png');
    }

 
    display()
    {
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.58)
        {
            this.angle +=0.02;
        }

        if(keyIsDown(LEFT_ARROW) && this.angle > -1.40)
        {
            this.angle -=0.02
        }

     //   console.log(this.angle);

        fill("grey")
        push();
        translate(this.x, this.y)
        rotate(this.angle);
        rectMode(CENTER)
        rect(50,10,this.width+17, this.height);
        // imageMode(CENTER)
        // image(this.s,0,20,this.width+190, this.height+100);
        pop();
        arc(this.x-35, this.y+85, 170, 240, PI, TWO_PI);
         //image(this.cb,this.x-170, this.y-160, 300, 280, PI, TWO_PI);
       
        //not compulsory to give
        noFill();
    }

}