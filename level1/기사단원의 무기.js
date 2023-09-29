// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 기사단원의 무기

function solution(number, limit, power) {
    let weight = 1;
    
    function divisor(targetNumber) {
        let counter = 1;
        for(let i=1;i<=targetNumber/2;i++) {
            if(targetNumber%i ===0) counter++;
        }
        return counter > limit? power: counter;
    }

    for(let i=2;i<=number;i++) {
        const ownPower = divisor(i);
        weight += ownPower;
    }    
    return weight;
}