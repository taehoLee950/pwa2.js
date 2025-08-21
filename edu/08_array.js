// object
// 여러가지의 키+값 쌍으로 이루어진 복합 데이터 타입(객체)
// 라인 15처럼 함수도 포함 가능
// key와 값으로 구분하고 ',' 로 구분
// id = key 
// ':' = 키와 값의 구분자
// 1  = 값
// ',' 코드 라인 구분
const obj1 = {
  id: 1,
  name: '홍길동',
  gender: '남자',
  age: 20,
  fn: (a, b) => a +b,
};

//obj의 property나 method 접근법
console.log(obj1.id);
console.log(obj1.name);
console.log(obj1.fn(1, 2));

//중복 객체 예시
const obj2 = {
  title: '홍길동이 쓴 글이다.',
  userInfo: obj1,
}

// 객체안에 객체 설정 예시 (line 22와 기능은 동일)
 const obj3 = {
    title: '홍길동이 쓴 글이다.',

    userInfo: {
    id: 1,
    name: '홍길동',
    gender: '남자',
    age: 20,
    fn: (a, b) => a +b,
  }

}

//중복 객체 불러오기 예시
console.log(obj2.userInfo.name);

//객체안 키의 값만 바꾸기
//객체는 주소값으로 찾아가서 객체안의 내용만 바꿀수있다
obj2.userInfo.name = '갑순이';

//optional chaining (ECMA 2022 추가)
//자바스크립트에서 중첩된 객체의 property나 method의 존재가 했는지 기억안날때 안전하게 접근하기 위한 문법
//기본적으로 오류가 나면 js는 해당줄부터 코드가 멈추기때문에 이를 방지하고 계속 이어가게 하기 위함.
//?. 연산자를 기준으로 앞의 평가대상이 undefined || null 이 아니면 처리를 계속 이어가고
// undefined || null이면 false를 반환하고 멈춘다.

obj2.userInfo?.rank


//----------------------------------------
// Array 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 여러 종류의 데이터 타입을 저장 가능
// 배열의 길이는 동적으로 변화
// 각 요소는 0부터 시작하는 인덱스를 가진다.
const arr1 = [1, 2, '홍길동', obj1, 5];

// array 접근법
// '[ ]' 안에 인덱스 값을 넣어주자
console.log(arr1[3]);

// 배열안에 배열
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
// [보라색 방번호] [보라색 방번호 안의 인덱스 값]
console.log(arr2[1][1]); // 리턴값: 5

// 배열안에 배열 (심화) *거의 안 씀
const arr3 = [
  [1, 2, 3],
  [4, 5, [20, 30, 40]],
  [7, 8, 9],
];

// 위 array에서 40을 불러오려면?
// [1번방에] [1번방 안의 2번방에][1번방 안에 2번방에 2번 index]
console.log(arr3[1][2][2]);

// 배열 복사
// spread operator 문법 ...으로 사용
// 객체는 주소값을 참조해서 복사본으로 값을 바꾸면 원본이 바뀔수 있는데 그걸 방지하기 위한 문법이다.
const arr4 = [...arr3];
arr4[0] = [10, 20, 30];
console.log(arr4)

// 일반 객체 복사도 가능 ...으로 복사
const obj4 = {...obj1};

// 배열의 길이 반환
console.log(arr1.length);

// isArray('arg here') : 배열 여부를 체크
// boolean 값으로 반환, array가 맞다면 true.
console.log(Array.isArray(arr1));
console.log(Array.isArray(1));

//  indexOf('searchElement here`) : 배열의 특정 요소를 검색해서 인덱스를 반환
// 배열 안의 요소를 검색하면 그 자릿수 (index)를 가르쳐준다고 생각해.
// 그런데 그 요소가 객체안에 없다면 -1을 반환함.
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.indexOf(4));


// includes('searchElement here') : 특정 요소의, 존재여부 확인, boolean 반환
// 검색요소가 배열안에 있으면 'true' 값 반환.
// 요새는 include를 indexOf 보다 더 쓴다. 이유: boolean으로 쓰면 if문을 쓰기 편함.
console.log(arr5.includes(4));

// push(...args) : 원본 배열에 마지막 요소를 추가하고, 바뀐 length를 반환
const resultLength = arr5.push(100);
console.log(resultLength, arr5);

// concat(...args) : 원본 배열에 마지막 요소를 추가한 새로운 배열을 반환 (원본 변화x)
const arr6 = [1, 2, 3];
const resultConcat = arr6.concat(4, 5, 6, 7); //4, 5, 6, 7 추가
console.log(arr6, resultConcat);

// pop() : 배열의 마지막 요소를 제거하고, 제거한 요소를 반환
const arr7 = [1, 2, 3, 4];
const resultPop = arr7.pop();
console.log(arr7, resultPop);

//unshift(...args) : 원본 배열의 첫번째 요소를 추가, 변경된 length를 반환
const arr8 = [1, 2, 3, 4];
const resultUnshift = arr8.unshift(9, 8, 7, 6);
console.log(arr8, resultUnshift);

//shift() : 원본 배열의 첫번째 요소를 제거, 제거된 요소를 반환
const arr9 = [1, 2, 3, 4];
const resultShift = arr9.shift();
console.log(arr9, resultShift); //반환값 [2, 3, 4] 1

//splice(start, count, ...args) : 원본에서 특정 요소를 자른다.
const arr10 = [1, 2, 3, 4, 5, 6];
// start만 지정 했을 때,
  //start가 양수일 경우 : 인덱스가 start인 요소부터 뒤에 모두 제거하고, 제거된 배열 부분을 반환
    const resultSpliceStartPositive = arr10.splice(3); // 4, 5 ,6 이 잘림
    console.log(arr8, resultSpliceStartPositive);
    //start가 음수일 경우, 배열의 끝 요소부터 start만큼의 요소를 제거하고, 제거된 배열 부분 반환
    const arr11 = [1, 2, 3, 4, 5, 6];
    const resultSpliceStartNegative = arr11.splice(-3); // 반환값 : 3, 4, 5
    console.log (arr11, resultSpliceStartNegative); 
    // * 음수로 시작하면 index 숫자가 아니고 숫자만큼 칸 이동을 한다
// start와 count만 지정할 경우 (중간에 특정 요소만 빼고싶을때)
const arr12 = [1, 2, 3, 4, 5];
const resultSpliceCount = arr12.splice(2, 1); //splice('index#', 'numberOfElements to be deleted from the selected index#')
console.log (arr12, resultSpliceCount);
//start, count, ...args 모두 전달할 경우
const arr13 = [1, 2, 3, 4, 5];
const resultSpliceArgs = arr13.splice(1, 1, 100); //제거된 index 위치 요소를 제거 후 새로운 값 대입
console.log(arr13, resultSpliceArgs);

// join(separator) : 배열의 요소를 구분자(separator)로 연결한 문자열을 만들어서 반환
const arr14 = [1, 2, 3, 4, 5];
const resultJoin = arr14.join(':'); //원본 변경을 안하니 저장값을 저장
console.log(resultJoin, arr14); //리턴값 : 1:2:3:4:5

// sort(`callback` or none) : 원본 배열의 요소를 문자열로 변환 후 오름차순 정렬을 해서 만든 배열을 반환
// (a-b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
// (a-b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
// (a-b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음
const arr15 = [23, 4, 635, 475, 85,];
const resultSort = arr15.sort((a, b) => a - b); //callback 입력한 케이스, 입력안하면 문자열로 배열후 오름차순 정렬만 함
console.log(resultSort, arr15); // 원본도 변화시킴.

// map(`callback here`) : 배열의 모든 요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환
// filter와 비교했을때 map은 조건식 반환값 상관 X
const arr16 = [1, 2, 3, 4, 5];
const resultMap = arr16.map(val => val *= 2);

// for(let i = 0; i < arr14.length; i++) {
//   arr14[i] *= 2;
// }
// console.log(arr14);
console.log(arr16, resultMap);

// 2의 배수만 '이' 라고 출력해주세요.
const arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultMapOdd = arr15.map(val => {
  if(val % 2 === 0) {
    return '이'
  } else {
    return val;
  }
})
console.log(resultMapOdd);

// some(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                조건에 만족하는 결과가 하나라도 있으면 true, 없으면 false
const arr18 = [1, 2, 3, 4, 5];
const resultSome = arr18.some(val => val === 10)

// every(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                모든 요소가 조건에 만족하면 true, 아닐시 false
const arr19 = [1, 2, 3, 4, 5];
const resultEvery = arr19.every(val => val % 3 === 0);
console.log(resultEvery);

// filter(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//                  조건에 맞는 요소만 모아서 새로운 배열로 반환
// map과 비교했을때 filter는 반환값이 boolean
const arr20 = [1, 2, 3, 4, 5];
const resultFilter = arr20.filter(val => val % 2 === 0);
console.log(resultFilter);

// forEach(cb) : 배열의 모든 요소에 대해 콜백함수를 반복 실행
// 반환값이 없어서 return 결과값이 필요 없을 때 사용한다 (리소스 사용량 감소)
const arr21 = [1, 2, 3, 4, 5];
// val = parameter, key = index# of argument
arr21.forEach((val, key) => console.log(`${key} : ${val}`));

// Destructuring 문법
const arr22 = [1, 2];
const num1 = arr22[0];
const num2 = arr22[1];

const [num3, num4] = arr22;
console.log(num3, num4);