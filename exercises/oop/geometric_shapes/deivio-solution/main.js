import Square from "./Square.js" ;
import Rectangle from "./Rectangle.js";
import Circle from "./Circle.js";

const square = new Square(2);
const rectangle = new Rectangle(2, 4);
const circle = new Circle(5);

const list = [square, rectangle, circle];

function createAreaList(objList) {
    const areaList = [];
    for(let obj of objList) {
        const currArea = obj.calculateArea();
        areaList.push(currArea);
    }
    return areaList;
}

function createPerimeterList(objList) {
    const perimeterList = [];
    for(let obj of objList) {
        const currPerimeter = obj.calculatePerimeter();
        perimeterList.push(currPerimeter);
    }
    return perimeterList;
}

console.log("Areas: "+createAreaList(list));
console.log("Perimeters: "+createPerimeterList(list));

function listOfObj(objList) {
    const shapeObj = [];
    for(let shape of objList) {
        const obj = {};
        const key = getTypeAsString(shape);

        const objInside = {};
        objInside.perimeter = shape.calculatePerimeter();
        objInside.area = shape.calculateArea();

        obj[key]=objInside;

        shapeObj.push(obj);
    }
    return shapeObj;
}

function getTypeAsString(obj) {
    if (obj instanceof Circle) {
        return "circle";
    }
    if (obj instanceof Square) {
        return "square";
    }
    if (obj instanceof Rectangle) {
        return "rectangle";
    }
    throw new Error("Bad shape created! Doesn't satisfy any condition!");
}

console.log(listOfObj(list));
