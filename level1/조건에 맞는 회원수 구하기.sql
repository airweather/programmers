-- https://school.programmers.co.kr/learn/courses/30/lessons/131535
-- 조건에 맞는 회원수 구하기
SELECT COUNT(USER_ID) USERS FROM USER_INFO WHERE JOINED LIKE '2021%' AND AGE >=20 AND AGE <= 29;