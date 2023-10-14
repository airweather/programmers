// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기

function solution(strings, n) {
    
    for(let i=0;i<strings.length;i++) {
        for(let j=0; j< strings.length-1; j++) {
            if(strings[j][n] === strings[j+1][n] && strings[j] > strings[j+1]) {
                const temp = strings[j+1];
                strings[j+1] = strings[j];
                strings[j] = temp;
            }
            
            if(strings[j][n] > strings[j+1][n]) {
                const temp = strings[j+1];
                strings[j+1] = strings[j];
                strings[j] = temp;
            }
        }
    }
    
    
    
    return strings;
}