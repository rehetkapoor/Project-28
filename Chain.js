class Chain{
    constructor(bA, pB){
        var options = {
            bodyA: bA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
        var A = this.sling.bodyA.position;
        var B = this.sling.pointB;
        strokeWeight(4);
        line(A.x, A.y, B.x, B.y);
        }
    }
    
    fly(){
        this.sling.bodyA = null
    }

    attach(body){
        this.sling.bodyA=body
    }
}