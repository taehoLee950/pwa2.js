// const user = {
//   name : 'hong', // 최상위 계층
//   age: 20, // 최상위 계층
//   friends: { // 하위 계층 *주소값만 참조
//     id: 90
//   }
// };

// // shallow copy : 최상위 계층의 요소만 독립적으로 복사,
// // 그 외 계층은 참조 형태로 복사.
// // const shallowCopy = {...user};
// // shallowCopy.friends.age = 100;

// // console.log(user, shallowCopy);

// // deep copy : 모든 계층의 요소를 독립적으로 복사
// const jsonCopy = JSON.parse(JSON.stringify(user)); // js obj -> json으로 변환
// jsonCopy.friends.id = 200;

// console.log(user); //원본 바뀌나 확인

// const cloneCopy = structuredClone(user);

// ---------------------
// destructring 
// ---------------------
// 배열 부분
// const arr = ['hong', 20];

// const [name, age] = arr;

// console.log(name, age);

// 객체 부분
const user2 = {
  name : 'hong', // 최상위 계층
  age: 20, // 최상위 계층
  friends: { // 하위 계층 *주소값만 참조
    id: 90
  }
};

const {name, age, friends} = user2;