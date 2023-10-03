// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 성격 유형 검사하기

function solution(survey, choices) {

    let answer = ""
    
    const score = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0,
    };
    
    
    survey.map((str, idx) => {
        const choice = choices[idx];
        
        switch(choice) {
            case 1 : {
                score[str[0]] += 3
                break;
            }
            case 2 : {
                score[str[0]] += 2
                break;
            }
            case 3 : {
                score[str[0]] += 1
                break;
            }
            case 4 : {
                break;
            }
            case 5 : {
                score[str[1]] += 1
                break;
            }
            case 6 : {
                score[str[1]] += 2
                break;
            }
            case 7 : {
                score[str[1]] += 3
                break;
            }
        }
        
    });
    
    answer += score.R >= score.T ? 'R' : 'T'
    answer += score.C >= score.F ? 'C' : 'F'
    answer += score.J >= score.M ? 'J' : 'M'
    answer += score.A >= score.N ? 'A' : 'N'
    
    return answer;
}