//https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
    let answer = 0;
       
    score = score.sort((a, b) => b - a);
    
    let i = m-1;
    while(i<score.length) {
        answer += (score[i])*m
        i += m;
    };
        
    return answer;
}