class BOB{
    constructor(){
        var option{
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
        
        }
    }

    display(){

        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(2);
            
            var Anchor1X = pointA.x
            var Anchor1Y = pointA.y

            var Anchor2X = pointA.x +this.offsetX
            var Anchor2Y = pointA.y +this.offsetY
            

            line(Anchor1X,Anchor1Y, Anchor2X,Anchor2Y);
            
       
    }
    
}