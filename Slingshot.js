class slingShot{
    constructor(bodyA, pointB){ // {x:34 , y: 56}
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
        World.add(world, this.sling)
    }

    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
        var pA = this.sling.bodyA.position
        var pB = this.pointB
        strokeWeight(5)
        stroke("lightblue")

        line(pA.x, pA.y, pB.x, pB.y)
    }
}
}