//https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
    const answer = [];
    const arr = [];
    
    for(let i=0;i<s.length;i++) {
        arr.indexOf(s[i]) > -1 ? answer.push(arr.indexOf(s[i])+1) : answer.push(-1);
        arr.unshift(s[i]);
    }
    
    return answer;
}