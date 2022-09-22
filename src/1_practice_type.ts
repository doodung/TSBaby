let count = 0; // 숫자
count += 1;
//count = '문자열 ' -> 에러남

const message: string = 'hello world'; //문자열
const done: boolean = true; //불리언 값
const numbers: number[] = [1,2,3]; //숫자 배열
const messages:string[] = ['hello','world']; //문자열 배열
//messages.push(1) -> 에러남

let mightBeUndefined: string|undefined=undefined; 
//string 일수도 있고 undefined 일수도 있음
let nullableNumber:number|null = null;
//number 일수도 있고 null 일수도 있음

let color: 'red'|'orange'|'yellow' = 'red';
//red, orange, yellow중 하나임
color = 'yellow';
//color = 'green'; -> 에러남

//타입 스크립트를 사용하면 이렇게 특정 변수 또는 상수 타입을 지정할 수 있고,
//우리가 사전에 지정한 타입이 아닌 값이 설정될 때 바로 에러를 발생시킨다.
// 이렇게 에러가 나타났을 땐 컴파일이 되지 않는다.
