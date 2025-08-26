// 문제 1
// 아래는 사용자 정보 배열입니다.
// const users = [
//   { id: 1, name: '철수', age: 21 },
//   { id: 2, name: '영희', age: 17 },
//   { id: 3, name: '민수', age: 30 },
//   { id: 4, name: '지영', age: 15 },
//   { id: 5, name: '준호', age: 19 }
// ];
// ❓조건:
// 나이가 20세 이상인 사용자만 필터링하세요.
// 필터링된 사용자들의 이름만 뽑아서 새 배열로 만드세요.
// 그 배열을 알파벳 오름차순으로 정렬하세요. (힌트: sort())


// const users = [
//   { id: 1, name: '철수', age: 21 },
//   { id: 2, name: '영희', age: 17 },
//   { id: 3, name: '민수', age: 30 },
//   { id: 4, name: '지영', age: 15 },
//   { id: 5, name: '준호', age: 19 }
// ];

// 20살 이상 유저들 모아서 새로운 배열 생성
// const over20 = users.filter(age => age.age >= 20);
// console.log(over20);
// // 객체에서 이름 빼고 오름차순 정렬하기 *한번에
// const nameSorted = over20.map(names => names.name).sort();
// console.log(nameSorted);
// -----------------------------------------------------------------------

// // 문제 2
// // const products = [
// //   { id: 1, name: 'Keyboard', price: 25000 },
// //   { id: 2, name: 'Mouse', price: 18000 },
// //   { id: 3, name: 'Monitor', price: 135000 },
// //   { id: 4, name: 'USB Hub', price: 11000 },
// //   { id: 5, name: 'Webcam', price: 89000 }
// // ];

// // ❓조건:
// // 가격이 2만원 이상인 상품만 필터링하고
// // 그 상품 이름을 대문자로 바꾸어
// // 상품명을 기준으로 알파벳 오름차순 정렬된 배열을 반환하시오.

const products = [
  { id: 1, name: 'Keyboard', price: 25000 },
  { id: 2, name: 'Mouse', price: 18000 },
  { id: 3, name: 'Monitor', price: 135000 },
  { id: 4, name: 'USB Hub', price: 11000 },
  { id: 5, name: 'Webcam', price: 89000 }
];

// 2만원 이상 상품 배열로 반환
const over20K = products.filter(price => price.price >= 2_0000)
console.log(over20K);

// 대문자 변환 및 오름차순
const result = over20K.map(name => name.name.toUpperCase()).sort(); //toUpperCase는 배열 메써드가 아니라 안쪽에 속성값 불러오는데다가 사용해야하고, 
                                                                        // sort는 배열 메서드라 배열 반환값 저장되는 전체에 갖다 붙여도 사용이 가능했다.
console.log(result);



