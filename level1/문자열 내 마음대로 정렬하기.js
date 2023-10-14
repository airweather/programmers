// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기

//function solution(strings, n) {
    
//    for(let i=0;i<strings.length;i++) {
//        for(let j=0; j< strings.length-1; j++) {
//            if(strings[j][n] === strings[j+1][n] && strings[j] > strings[j+1]) {
//                const temp = strings[j+1];
//                strings[j+1] = strings[j];
//                strings[j] = temp;
//            }
            
//            if(strings[j][n] > strings[j+1][n]) {
//                const temp = strings[j+1];
//                strings[j+1] = strings[j];
//                strings[j] = temp;
//            }
//        }
//    }
    
    
    
//    return strings;
//}

function solution(strings, n) {
  return strings.sort((a, b) => {
    // 주어진 인덱스(n)에 있는 문자를 비교
    const compareByN = a[n].localeCompare(b[n]);
    
    if (compareByN === 0) {
      // 주어진 인덱스의 문자가 같은 경우, 사전적으로 비교
      return a.localeCompare(b);
    }
    
    return compareByN;
  });
}