class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }
    fly(){
        //Anulamos al ave para quitar la restricción
        this.sling.bodyA = null 
    }
    display(){
        
        //Solo sí BodyA NO es nulo podemos usar la función display
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}
