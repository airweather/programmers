-- https://school.programmers.co.kr/learn/courses/30/lessons/151136
-- ROUND : 반올림, AVG : 평균
-- 평균 일일 대여 요금 구하기
SELECT ROUND(AVG(DAILY_FEE)) AS AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR WHERE CAR_TYPE = 'SUV';