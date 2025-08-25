// String 객체

// escape '\' 을 사용하면 바로 뒤에 있는 기호를 문자열로 인식하게 해줌
let str = `문자"'\`열입니다.`;

// length : 문자열의 길이를 반환
console.log(str.length);

// charAt(idx) : idx의 요소 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 searchStr을 찾아 최초의 인덱스를 반환
// 찾지 못하면 -1 반환
//  idx는 값 부터 시작해서 찾기 시작 (스타팅 포인트), *생략 가능
str = '문자열입니다. 문자열이라니까요.';
console.log(str.indexOf('열')); // 출력값: 2
console.log(str.indexOf('열', 3)); // 출력값 10 (index 값 3부터 시작해서 그 이후에 나오는 '열' index 값 출력)
console.log(str.indexOf('입니다')); // 출력값 3
console.log(str.indexOf('없는거')); // -1 (없을 시 -1 반환)
console.log(str.includes('없는거')); // 존재여부 체크할때는 line19 말고 'includes'를 사용하는게 가독성이 좋아보임

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement로 치환한 문자열을 반환
str = '문자열입니다. 문자열 아니라니까요.';
console.log(str.replace('문자열', '황치열')); //출력값: 황치열입니다. 문자열 아니라니까요 (첫번째 만난 문자열만 바꿔서 후속 문자열은 바꾸지않음)

// replaceAll(pattern, replace) : pattern을 찾아서 모든 문자열을 치환 
str = '문자열입니다. 문자열입니다2222.';
console.log(str.replaceAll('문자열', '황치열'));

// substring(startIdx, endIdx) : startIdx부터 endIdx까지 자른 문자열을 반환
str = '문자열입니다. 문자열입니다2222.';
console.log(str.substring(3, 5)); //출력값 : '입니'

// split(separator, limit) : 문자열에서 separator를 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
// limit = 1 이라면 배열에 요소가 1개만 들어감. * limit 생략 가능
// 사용예시: 배열에 담긴 유저값들을 배열로 반환 시키고 싶을때 사용 가능
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(','); // 문자열의 separator가 동일해야 사용가능,

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '      하 하  ';
console.log(str.trim()); // 출력값 : 하_하 *문자 사이의 공백은 삭제하지 않음.

// toUpperCase(), toLowerCase() : 영어 대/소문자 변환 후 반환
str = 'AfkvifkaSDFKFEO';
console.log(str.toUpperCase());
console.log(str.toLowerCase());
