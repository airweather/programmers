//https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    const answer = [];
    const arr = [];
    
    for(let i=0;i<score.length;i++) {
        arr.push(score[i]);
        arr.sort((a,b) => b-a);
        if(arr.length<=k) {
            answer.push(arr[arr.length-1]);
        }
        else{
            answer.push(arr[k-1]);
        }
    }
    
    return answer;
}