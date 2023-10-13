//https://school.programmers.co.kr/learn/courses/30/lessons/68644
//두 개 뽑아서 더하기

function solution(numbers) {
    
    const result = new Set();
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j=1; j<numbers.length; j++) {
            if(i===j) {
                continue;
            };
            result.add(numbers[i]+numbers[j]);
        };
    };
    
    return [...result].sort((a, b)=> a-b);
}