class Cannon{
    constructor(x,y,width,height,angle){
        this.width=width
        this.x=x
        this.y=y
        this.height=height
        this.angle=angle

    }
    display(){
        rectMode(CENTER);
        push()
        translate(this.x,this.y)
        rotate(this.angle)
        fill("black")
        rect(-10,-20,this.width,this.height)
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI)
        pop()
    }
}