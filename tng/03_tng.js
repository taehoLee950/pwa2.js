// IF로 만들어주세요.
// 성적
// 범위 :
//    100   : A+
//    90이상 100미만 : A
//    80이상 90미만 : B
//    70이상 80미만 : C
//    60이상 70미만 : D
//    60미만: F

//처음만든것 : 변수를 미리 작성한게 실패요인이었다.

//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"
// let score = 90;
// let perfect = 'A+';
// let gradeA = 'A';
// let gradeB = 'B';
// let gradeC = 'C';
// let gradeD = 'D';
// let gradeF = 'F';

// if(score === 100){
//   console.log('당신의 점수는 ' + score + '점 입니다.');
// }
// else if(score >= 90 || score <= 99){
//   console.log('당신의 점수는 ' + score + '점 입니다.' + gradeA +);
// }
// else if(score >= 80 || score <= 89){
//   console.log('당신의 점수는 ' + score + '점 입니다.' + gradeB ++);
// }
// else if(score >= 70 || score <= 79){
//   console.log('당신의 점수는 ' + score + '점 입니다.');
// }
// else if(score >= 60 || score <= 69){
//   console.log('당신의 점수는 ' + score + '점 입니다.');
// }
// else if(score <= 59){
//   console.log('당신의 점수는 ' + score + '점 입니다.');
// }

// 2번째 만든것 : 변수는 변하는 값이다. 미리 변수를 다 지정해두지 말고 코드가 진행됨에따라 자연스럽게 변수가 변하게 만들어보자.!!
// let score = 100;
// let grade;
// if (score === 100){
//   grade = '국가권력급';
// }
// else if (score >= 90 && score >= 99){
//   grade = 'A';
// }
// else if (score >= 80 && score >= 89){
//   grade = 'B';
// }
// else if (score >= 70 && score >= 79){
//   grade = 'C';
// }
// else if (score >= 60 && score >= 69){
//   grade = 'D';
// }
// else {
//   grade = 'F';
// }

// console.log('당신의 점수는 ' + score + '점 입니다' + '<' + grade + '>');

// 세번째 만든것 : 같이 만든것.
let score = 90;
let grade = 'F';

if (score > 100 || score < 0) {
  console.log('잘못된 값입니다?');
} else {
  if(score === 100) {
    grade = 'A+';
  } else if (score >= 90){ // 굳이 &&로 안 묶어준다. 이미 점수 100값은 지정 되어있으니 100이 아닐시에 90~99 범위가 실행되기 때문.
    grade = 'A';
  } else if (score >= 80){
    grade = 'B';
  }
  else if (score >= 70){
    grade = 'C';
  }
  else if (score >= 60){
    grade = 'D';
  }
  else {
    grade = 'F';
  }

  console.log('당신의 점수는 ' + score + '점 입니다. <' + grade + '>');
  console.log(`당신의 점수는 ${score}점 입니다. <${grade}>`); // backtick 으로 감싸고 $ {} 로 변수 넣기. ***편함
}