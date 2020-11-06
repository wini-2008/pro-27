class Roop{
    constructor(body1, body2,offsetX,offsetY){
       
       this.offsetX = offsetX
       this.offsetY = offsetY

        var options = {
            body1: body1,
            body2: body2,
            pointB:{x: this.offsetX,y: this.offsetY}
        }
        


        this.roop= Constraint.create(options);
        World.add(world, this.roop);
    }



    
}
