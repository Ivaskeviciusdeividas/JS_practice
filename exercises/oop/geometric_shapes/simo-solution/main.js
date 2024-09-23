import Circle from "./Circle.js";
import Square from "./Square.js";
import Rectangle from "./Rectangle.js";

const circle = new Circle(5);
const square = new Square(4);
const rectangle = new Rectangle(3, 4);

const shapes = [circle, square, rectangle];


function getAreaList(shapeList) {
    const ret = [];
    for (let shape of shapeList) {
        const area = shape.calculateArea();
        ret.push(area);
    }
    return ret;
}


function getPerimeterList(shapeList) {
    const ret = [];
    for (let shape of shapeList) {
        const perimeter = shape.calculatePerimeter();
        ret.push(perimeter);
    }
    return ret;
}

console.log("Areas: ", getAreaList(shapes));
console.log("Perimeters: ", getPerimeterList(shapes));

// BONUS:
function getShapeDataObject(shapeList) {
    const ret = [];

    shapeList.forEach(shape => {
        const obj = {};
        const key = getTypeAsString(shape);

        const innerObj = {};
        innerObj.perimeter = shape.calculatePerimeter();
        innerObj.area = shape.calculateArea();

        obj[key] = innerObj;

        ret.push(obj);
    })
    return ret;
}


function getTypeAsString(shape) {
    if (shape instanceof Circle) {
        return "circle";
    }
    if (shape instanceof Square) {
        return "square";
    }
    if (shape instanceof Rectangle) {
        return "rectangle";
    }
    throw new Error("Bad shape created! Doesn't satisfy any condition!");
}


console.log(getShapeDataObject(shapes));











