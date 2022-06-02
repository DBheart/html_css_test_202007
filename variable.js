// 1. Use strict
//  add in ES 6
//  use this for Valina Javascript.
//  index.html change script, main -> variable.js
'use strict';

// 디지털의 중요사항 : 입력 -> 연산 -> 출력
// 사이트 임팩트가 많이 있다 : 보안, 표기(포매팅)

// 2. Variable
// ES6에 오면서 블록변수가 완전하게 지원된다.
//  let (added in ES6)
//      ES6 : 요즘은 자바스크립트의 기본 문법에 해당한다.
// 자바스크립트도 변수명과 값은 stack과 메모리에 따로따로 저장된다.
// 글로벌 변수는 되도록 쓰지말자. 블록단위 또는 클래스단위로 쓰도록 하자.

let globalNmae = 'global name';
{
let name = 'elli';
console.log(name);
name = 'hello';
console.log(name);
}
console.log(name);//블록에 있기때문에 나올수 없다.
console.log(globalNmae);

// var , (don't ever use this!)
//  - hoistin문제, 블록스콥이 안된다.
// var hoisting
// hoisting : 어디에 선언했냐에 상관없이 제일 위로 끌어올려서 선언전에도 사용할수 있게 한다.
//  - 함수와 var가 그것에 해당된다.
// consle.log(age);
// age = 4;
// console.log(age);
// var age;

// 3. constants
//  - 보안상 이유
//  - 쓰레드에 안전하다.
//  - reduce human mistakes, 되도록 const를 먼저 사용한다.
// mutable : 변경가능한, immutable : 변경이 불가능한
// object와 array로 되어있는것은 조금 특별하다.
// object 변수자체는 다른것으로 object로 변경을 못하지만, object안에 있는것은 변경이 가능하기 때문이다.
// 아마도 아래와 같은 상황아닐까? protype에서 벗어나지 못해서 안에 속해있는 변수가 수정이 가능한것 같다..
let obj = {name:'🍎',key:'🍎'}; //이코드는 아래 코드와 같다.
obj.name = '🍎';
obj.key = '🍎';

// Note!
// 데이터 타입의 종류
// Immutable data : premitive types, frozen objects(i.e. object.freeze())
// Mutable data : all objects by default are mutable in JS
// favor Immutable data type always for a few reasons

// 4. Variable types
// private, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function : 일급함수라는 의미는 펑션자체를 변수에 넣을수 있고, 파라미터(인자)로도 넣을수 있다는 것이다. 리턴타입으로 펑션으로 할수 있다.

// javascript은 동적(dynamic)으로 자기가 맞춰서 타입을 맞춘다.
// - 계산할때는 조금 조심하도록하자. 특히 실수와 정수 계산할때를 말한다.


// 타입스크립트도 꼭 배우도록 하자.

const count = 17; //integer
const size = 17.1;///decimal number
console.log(`value: ${count} type: ${typeof count}`);
console.log(`value: ${size} type: ${typeof size}`);

// number -speicla numberic values
const infinity = 1/0;//무한대
const negativeInfinity = -1/0;
const nAn = 'not a number' /2; //NAN, 숫자아님

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 브라우저에서 지원하지는 않지만.... bigInt라는 값이 있다.
// 숫자뒤에 n만붙여주면 되지만, 아직 모두 지원안되므로 쓰지말자.
const bigInt = 123412312312312312n;

// string
const brendan = 'brendan';
const helloBob = `hi ${brendan}`//template literals (string) : 백틱(`) 기호를 이용해서 변수와 상수를 붙여서 쓸수있다.

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

// null과 undefined의 차이
// null : 값이 없는것을 할당하는것
// undefined는 변수 선언을 했지만 값이 할당되지 않는것.(기본값이 없는것)

// symbol, create unique indentifiers for objets
// 아래와 같이 일한 스트링을 써지만 두개는 다른값이게 된다.
// 심볼 출력을 위해서는 description을 써야한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(`value: ${symbol1.description}, type : ${typeof symbol2}`);

// object, real-life object, data structure


// 5. Dynamic typing : dynamiccally typed language
// 자바스크립트는 할당된 값에 따라서 계속 타입이 변한다.
// 이런것 때문에 타입스크립트가 나왔다.
let text = 'hello';
console.log(text.charAt(0))
console.log(`value: ${text}, type : ${typeof text}`);

text = 1;
console.log(`value: ${text}, type : ${typeof text}`);

text = '7' + 5;
console.log(`value: ${text}, type : ${typeof text}`);

text = '8' / '2';
console.log(`value: ${text}, type : ${typeof text}`);
console.log(text.charAt(0))//이게 위험한것이다. 값이 변했으니까!

