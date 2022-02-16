class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        sling1 = loadImage('sprites/sling1.png');
        sling2 = loadImage('sprites/sling2.png');
        sling3 = loadImage('sprites/sling3.png');
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
       this.sling.bodyA = body;
    }

    display(){
        
        image(sling1, 200, 20);
        image(sling2, 170, 15);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke('#301608');
            if(pointA.x < 200){
                strokeWeight(15);
                line(pointA.x - 15, pointA.y + 10, pointB.x + 45, pointB.y);
                line(pointA.x - 15, pointA.y + 10, pointB.x, pointB.y);
                image(sling3, pointA.x - 20, pointA.y + 10, 20, 15);
            }
            else{
                strokeWeight(17);
                line(pointA.x + 25, pointA.y + 10, pointB.x + 45, pointB.y);
                line(pointA.x + 25, pointA.y + 10, pointB.x, pointB.y);
                image(sling3, pointA.x +20, pointA.y , 20, 30);
            }
            pop();
        }
    }
    
}