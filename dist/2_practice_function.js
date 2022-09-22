"use strict";
function sum(x, y) {
    return x + y;
    //return null을 하면 반환형이 number이기 때문에 오류난다.
}
sum(1, 2);
//배열의 내장함수를 사용할 때도 타입 유추가 잘 이루어진다.
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
//함수에서 아무것도 반환하지 않아야 한다면 반환 타입을 void로 설정하자.
function returnNothing() {
    console.log('I an just saying hello world');
}
