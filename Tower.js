class Tower{
    constructor(x,y,width,height){
        var options={isStatic:true}
        this.width=width
        this.height=height
        this.image=loadImage("assets/tower.png")
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER);
        var pos=this.body.position
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}