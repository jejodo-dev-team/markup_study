//이름이 출석부에 있으면 '있어요!'를 출력해주기
const 출석부 = ['흥민', '성희', '철수', '준영', '차차', '정은'];
// array 반복문 돌리는 방법
출석부.forEach(function (a) {
    console.log(a)
});

//for 반복문을 사용
function 이름찾기2 (name) {
    for(let i = 0; i <출석부.length; i++) {
        if (name === 출석부[i]) {
            return console.log('있삼')
        } 
    }
}
이름찾기2 ('철수');
이름찾기2 ('유리');
이름찾기2 ('명수');

// 입력한 값에 따라 메세지 표시해주기
document.querySelector('.name-book button').addEventListener('click', function(e) {
    e.preventDefault();
    for(let i = 0; i <출석부.length; i++) {
        if (document.querySelector('.name-book input').value === 출석부[i]) {
            document.querySelector('.correct').classList.add('ms-show')
        }
    }
})


// 갑자기 구구단을 출력해보고 싶다네요.. 
const 구구단 =  10;

for (let k=2; k<구구단; k++) {
    for(let i = 1; i<구구단; i++) {
            const answer = k * i ;
            console.log(answer)
    }
}


// 평균점수 계산기 만들기
function score ([a,b,c,d], z) {
    const 점수비교식 = ((a+b+c+d)/4)-z;
    if (점수비교식 >0) {
        console.log('평균보다'+점수비교식+'점이 올랐군요');
    } else if (점수비교식 === 0) {
        console.log('평균과 동일하네요!')
    } else {
        console.log('평균보다'+점수비교식+'점이 떨어졌네요 재수도 가망없겠는걸요..');
    }
}
score ([20, 30, 40, 50], 50);
// 과목이 여러개여도 상관없는 코드
function AverageScore (myscore, average) {
    // myscore을 다 더한 값 나누기 myscore의 길이
    let PlusScore= 0;
    for (let i = 0; i < myscore.length; i++) {
        PlusScore = PlusScore + myscore[i];
    }
    const myAverageScore = PlusScore / myscore.length ;
    // 그걸 average와 비교해서 결과 알려주기 
    if (myAverageScore - average > 0) {
        const score = myAverageScore - average
        console.log('평균보다 '+score+'점이 올랐네요!');
    } else if (myAverageScore - average === 0) {
        console.log('평균과 동일하네요!')
    } else {
        const minusScore = average - myAverageScore
        console.log('평균보다 '+ minusScore + '점이 떨어졌네요 재수추천');
    }
}
AverageScore ([70, 85, 50, 97], 50);
AverageScore ([50, 50], 50);
AverageScore ([30, 20, 37], 50);

