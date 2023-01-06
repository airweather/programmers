//https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
    var answer = 0;
    const stack = [];
    let top = -1;
    
    for(let i=0; i<ingredient.length;i++) {
        if(ingredient[i]===1 && stack[top] ===3 && stack[top-1] ===2 && stack[top-2] ===1) {
            for(let i=0;i<3;i++) {
                stack.pop();
                top--;
            }
            answer++;
        }
        else{
            stack.push(ingredient[i]);
            top++;
        }
    }
    return answer;
}