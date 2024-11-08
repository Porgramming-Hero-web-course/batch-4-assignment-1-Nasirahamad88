//Problem 4

type Circle ={
    shape:"circle",
    radius:number;
}
type Rectangle = {
    shape:"rectangle",
    width:number;
    height:number;

}

type Shape = Circle | Rectangle;

function calculateShapeArea(shape:Shape): number {
    if (shape.shape=== "rectangle"){
        return shape.width * shape.height;

    }else(shape.shape==="circle") {
        return parseFloat((Math.PI * shape.radius ** 2).toFixed());

    }
    return 0;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea)
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea)