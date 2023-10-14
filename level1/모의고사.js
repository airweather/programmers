// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

// function solution(answers) {
//     let one = 0;
//     let two = 0;
//     let three = 0;
    
//     const answer = [];
    
// //     1
//     answers.map((num, i) => {
//         if(num === i%5+1) {
//             one++;
//         };
//     });
// //     2
  
//     let twoNum = 1;
    
//     const twoCalc = () => {
//         switch(twoNum) {
//             case 1 : {
//                 twoNum++;
//                 return 1;
//             };
//             case 2 : {
//                 twoNum++;
//                 return 3;
//             };
//             case 3 : {
//                 twoNum++;
//                 return 4;
//             };
//             case 4 : {
//                 twoNum = 1;
//                 return 5;
//             };
//         };
//     };
    
//     answers.map((num, i) => {
//         const answer = i % 2 === 0 ? 2 : twoCalc();
        
//         if(num === answer) {
//             two++;
//         };
//     });
    
// //     3
    
//     const threeCalc = (num) => {
//         switch(num) {
//             case 0 : return 3;
//             case 1 : return 3;
//             case 2 : return 1;
//             case 3 : return 1;
//             case 4 : return 2;
//             case 5 : return 2;
//             case 6 : return 4;
//             case 7 : return 4;
//             case 8 : return 5;
//             case 9 : return 5;
//         };
//     };
    
//     answers.map((num, i) => {
//         const answer = threeCalc(i%10);
        
//         if(num === answer) {
//             three++;
//         };
//     });
    
//     if(one > 0 && one >= two && one >= three) {
//         answer.push(1);
//     };
    
//     if(two > 0 && two >= one && two >= three) {
//         answer.push(2);
//     };
    
//     if(three > 0 && three >= one && three >= two) {
//         answer.push(3);
//     };
    
//     return answer;
// }

function solution(answers) {
    const counts = [0, 0, 0];

    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            if (answers[i] === patterns[j][i % patterns[j].length]) {
                counts[j]++;
            }
        }
    }

    const maxCount = Math.max(...counts);
    const result = [];

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === maxCount) {
            result.push(i + 1);
        }
    }

    return result;
}
