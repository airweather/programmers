//https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let answer = '';
    let foodAmount = 0;
    let reverse = '';
    
    for(let i=1;i<food.length;i++) {
        foodAmount = Math.trunc(food[i]/2);
        for(let j=0;j<foodAmount;j++) {
            answer += i
        }
    }
    
    reverse = answer.split("").reverse().join("");
    answer += 0;
    answer += reverse;
    
    return answer;
}