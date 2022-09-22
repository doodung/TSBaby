//클래스에서 제네릭 사용하기
// Queue는 데이터를 등록할 수 있는 자료형이며, 
// 먼저 등록(enqueue)한 항목을 먼저 뽑아(dequeue)올 수 있ㄴ느 성질을 가지고 있다

class Queue<T>{
    list:T[]=[];
    get length(){
        return this.list.length;
    }
    enqueue(item:T){
        this.list.push(item);
    }
    dequeue(){
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
