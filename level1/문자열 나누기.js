//https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
    let answer = 0;
    let x = '';
    let counter = 0;
    
    for(let i=0;i<s.length;i++) {
         if(counter === 0) {
            x = s[i]
            answer++;
        }
        
        if(s[i] === x) {
            counter++;
        }
        else{
            counter--;
        }
    }
    
    return answer;
}