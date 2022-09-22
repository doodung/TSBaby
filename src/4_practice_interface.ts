// 일반 객체를 interface로 타입 설정하기

// interface Person{
//     name:string;
//     age?:number; // 물음표 : 설정 해도되고 안해도 된다.
// }
// interface Developer{
//     name:string;
//     age?:number;
//     skills:string[];
// }

// const person:Person={
//     name:'이수정사람',
//     age:27
// };
// const expert:Developer={
//     name:'이수정개발',
//     skills:['js','react']
// };

//위의 코드를 아래와 같이 extends를 사용해서 상속받을 수 있다.

interface Person{
    name:string;
    age?:number;
}
interface Developer extends Person{
    skills: string[];
}

const person:Person={
    name:'이수정사람',
    age:27
};

const expert:Developer={
    name:'이수정개발',
    skills:['js','react']
};

const people:Person[]=[person,expert];
