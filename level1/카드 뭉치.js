//https://school.programmers.co.kr/learn/courses/30/lessons/159994
//카드 뭉치
function solution(cards1, cards2, goal) {
    
    for(let i=0; i<goal.length; i++) {
        if(goal[i] === cards1[0]) {
            cards1.splice(0, 1);
        }
        else if(goal[i] ===cards2[0]){
            cards2.splice(0, 1);
        }
        else {
            return "No"
        }
    }
   
    return "Yes";
}