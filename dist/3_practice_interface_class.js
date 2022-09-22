"use strict";
// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법
// 클래스에서 interface를 implements 하기
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    //너비를 가져오는 함수
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius); //에러없이 작동
//console.log(rectangle.width); // width가 private라 에러 발생
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
