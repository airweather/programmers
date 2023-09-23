// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
    const obj = {}
    name.map((item, idx) => {
        obj[item] = yearning[idx]
    })

    return photo.map((item) => {
        return item.reduce((acc, cur) =>{
            return obj[cur] ? obj[cur] + acc : acc
        }, 0)
    })
}