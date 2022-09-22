
// interface는 클래스 또는 객체를 위한 타입을 지정할 때 사용되는 문법
// 클래스에서 interface를 implements 하기

//  -> 우리가 클래스를 만들 때, 특정 조건을 준수해야 함을 명시하고 싶을 때
//     inteface를 사용하여 클래스가 가지고 있어야 할 요구사항을 설정한다.
//     그리고 클래스를 선언할 때 implements 키워드를 사용하여 해당 클래스가
//     특정 interface의 요구사항을 구현한다는 것을 명시한다.

interface Shape{
    getArea(): number;
    // Shape interface에는 getArea 라는 함수가 꼭 있어야 하며,
    // 해당 함수의 반환값은 숫자이다.
}

class Circle implements Shape{
    // implements 키워드를 사용하여 해당 클래스가 Shape interface의 
    // 조건을 충족하겠다는 것을 명시
    radius: number; // 멤버변수 radius 값을 설정

    constructor(radius: number){
        this.radius = radius;
    }

    //너비를 가져오는 함수
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    // width: number;
    // height: number;
    constructor(private width:number, private height:number){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}


const circle = new Circle(5);
const rectangle = new Rectangle(10,5);

console.log(circle.radius); //에러없이 작동
//console.log(rectangle.width); // width가 private라 에러 발생

const shapes:Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape =>{
    console.log(shape.getArea());
})