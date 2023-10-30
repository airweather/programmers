// https://school.programmers.co.kr/learn/courses/30/lessons/138476
// 귤 고르기

// function solution(k, tangerine) {
    
//     const counter = (arr) => {
//         const obj = {};
        
//         arr.map((item) => {
            
//             obj[item] ? obj[item] += 1 : obj[item] = 1
                        
//         });
        
//         return obj;
//     };
    
//     const counted = Object.entries(counter(tangerine)).sort((a, b) => b[1] - a[1]);
    
//     let i = 0;
//     while(k > 0) {
//         k -= counted[i][1];
//         i++;
//     }
    
//     return i;
// }

function solution(k, tangerine) {
    const counter = (arr) => {
        const obj = new Map();
        
        for (const item of arr) {
            obj.set(item, (obj.get(item) || 0) + 1);
        }
        
        return obj;
    };
    
    let maxCount = 0;
    for (const count of counter(tangerine).values()) {
        maxCount = Math.max(maxCount, count);
    }
    
    return maxCount >= k ? k : maxCount;
}
