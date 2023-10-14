// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

function solution(answers) {
    let one = 0;
    let two = 0;
    let three = 0;
    
    const answer = [];
    
//     1
    answers.map((num, i) => {
        if(num === i%5+1) {
            one++;
        };
    });
//     2
  
    let twoNum = 1;
    
    const twoCalc = () => {
        switch(twoNum) {
            case 1 : {
                twoNum++;
                return 1;
            };
            case 2 : {
                twoNum++;
                return 3;
            };
            case 3 : {
                twoNum++;
                return 4;
            };
            case 4 : {
                twoNum = 1;
                return 5;
            };
        };
    };
    
    answers.map((num, i) => {
        const answer = i % 2 === 0 ? 2 : twoCalc();
        
        if(num === answer) {
            two++;
        };
    });
    
//     3
    
    const threeCalc = (num) => {
        switch(num) {
            case 0 : return 3;
            case 1 : return 3;
            case 2 : return 1;
            case 3 : return 1;
            case 4 : return 2;
            case 5 : return 2;
            case 6 : return 4;
            case 7 : return 4;
            case 8 : return 5;
            case 9 : return 5;
        };
    };
    
    answers.map((num, i) => {
        const answer = threeCalc(i%10);
        
        if(num === answer) {
            three++;
        };
    });
    
    if(one > 0 && one >= two && one >= three) {
        answer.push(1);
    };
    
    if(two > 0 && two >= one && two >= three) {
        answer.push(2);
    };
    
    if(three > 0 && three >= one && three >= two) {
        answer.push(3);
    };
    
    return answer;
}