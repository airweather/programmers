//https://school.programmers.co.kr/learn/courses/30/lessons/68644
//두 개 뽑아서 더하기

//function solution(numbers) {
    
//    const result = new Set();
    
//    for(let i = 0; i < numbers.length; i++) {
//        for(let j=1; j<numbers.length; j++) {
//            if(i===j) {
//                continue;
//            };
//            result.add(numbers[i]+numbers[j]);
//        };
//    };
    
//    return [...result].sort((a, b)=> a-b);
//}

function solution(numbers) {
    const result = [];
    const addedPairs = new Set(); // 이미 더한 숫자 쌍을 기록

    for (const [i, num1] of numbers.entries()) {
        for (const [j, num2] of numbers.entries()) {
            if (i !== j) { // 같은 인덱스가 아닌 경우에만 더함
                const sum = num1 + num2;
                if (!addedPairs.has(sum)) { // 이미 더한 숫자 쌍이 아니라면
                    result.push(sum);
                    addedPairs.add(sum); // 중복을 방지하기 위해 추가
                }
            }
        }
    }

    return result.sort((a, b) => a - b);
}
