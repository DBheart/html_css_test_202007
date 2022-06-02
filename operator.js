// 1. String concatenation
//  string literals : 백틱을 사용

// 2. Numberic operators

// 3. Increment and decrement operators

// 4. Assignment operators

// 5. Comaprison operators

// 6. Logical operators : ||(or), && (and), ! ( not)
// 조건식이 여러개이면 앞에것이 맞으면 멈춘다.
// 이런식으로 빨리 나갈수 있는것ㅇ르 제거하고나서 진행하도록 한다.
// 조건식이 복잡한것은 제일 마지막에 놓는게 좋다.

// && 연산자 , null을 걸러낼때 쓰인다.

// 7. Equality: ==, ===
// === : 타입까지 검사
// == : 타입을 맞춰서 검사

// object equality by reference
const ellie1 = {name:'ellie'};
const ellie2 = {name:'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);  //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

console.log(0 == false); //true
console.log(0 === false);//false
console.log('' == false);//true
console.log('' === false);//false
console.log(null == undefined);//true
console.log(null === false);//false

// 8. Conditional operators : if
// if, else if, else
// 잘써야한다 break나 끝나지 않으면 다음 else if문을 계속 체그한다.

// 9. Ternary operator, 3단조건식
// 10. switch
// 11. Loops
//  while loop, while the condition is truthy,
// body code is executed

// for loop, for(begin; condition;step)
// nested loops : 중첩 반복문, 빅오가 n에2승으로 굉장히 높다.

// break, continue
// 01. iterate from 0 to 10 and print only even numbers(use continue
// 02. iterate from 0 to 10 and print numbers nuntil reaching 8(use break)

//함수부터 다시봐야겠네