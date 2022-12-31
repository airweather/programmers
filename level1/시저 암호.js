//https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    let answer = '';
    let ascii = '';
    let num = 0;
    
    for(let i=0;i<s.length;i++) {
        num = s.charCodeAt(i);
        if(num === 32) {
            ascii = 32;
        }
        else if(num + n > 90 && num < 91) {
            ascii = num + n - 26;
        }
        else if(num + n > 122) {
            ascii = num + n - 26;
        }
        else {
            ascii = num + n;
        }
        answer += String.fromCharCode(ascii);
    }
    
    return answer;
}