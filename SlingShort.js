class SlingShort{
    constructor(BodyA,Point2){
        var options = {
            bodyA : BodyA,
            pointB : Point2,
            stiffness : 0.04,
            length : 2
        }

        
       

this.launcher = Constraint.create(options);
this.bodyA = BodyA;
        this.pointB = Point2;

World.add(world,this.launcher);

    }


    fly(){
        this.launcher.bodyA = null;
    }
        
    //attach(BodyA){

//this.launcher.bodyA = BodyA;

    //}
    


    display(){

        strokeWeight(4);
        stroke("red");
        line (this.bodyA.position.x, this.bodyA.position.y,this.pointB.x, this.pointB.y);


    }
}