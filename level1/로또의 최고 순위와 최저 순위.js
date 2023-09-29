// https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    var answer = [];
    
    let max = 0
    let min = 0
    
    lottos.map((lotto) => {
        if(win_nums.indexOf(lotto) > -1) {
            max++
            min++
            return;
        }
        
        if(lotto === 0) {
            max++
        }
        
    })
    
    const rank = (num) => {
        switch(num) {
            case 6: return 1;
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5;
            case 1: return 6;
            case 0: return 6;
        }
    }
    
    return [rank(max), rank(min)];
}