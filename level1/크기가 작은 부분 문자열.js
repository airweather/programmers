//https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
    let text = '';
    let count = 0;
    
    for(let i=0;i<t.length;i++) {
        text = '';
        for(let j=0;j<p.length;j++) {
            text += t[i+j]
        }
        if(t.length-i < p.length) break;
        if(text <= p) count++;
    }
    return count;
}