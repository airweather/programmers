//https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const arr = [];
    const num = Math.trunc(nums.length/2);
    
    for(let i=0;i<nums.length;i++) {
        if(arr.length >= num) return num;
        if(arr.indexOf(nums[i])<=-1) {
            arr.push(nums[i]);
        }
    }
    
    return arr.length;
}