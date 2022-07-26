// 로그인 모달 보여줘
document.getElementsByClassName('login-modal')[0].addEventListener('click', function(){
    document.getElementsByClassName('dimmed')[0].classList.toggle('modal-show');
})

// 모달 닫아줘
document.getElementsByClassName('modal-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('dimmed')[0].classList.toggle('modal-show');
    document.getElementsByClassName('message-id')[0].classList.remove('error-show');
    document.getElementsByClassName('message-pw')[0].classList.remove('error-show');
    document.getElementsByClassName('message-pw-length')[0].classList.remove('error-show');
})
// 배경눌렀을 때 모달 닫기
document.getElementsByClassName('dimmed')[0].addEventListener('click', function(e){
    if (e.target === document.getElementsByClassName('dimmed')[0]) {
        document.getElementsByClassName('dimmed')[0].classList.toggle('modal-show');
    }
})

// 모달에 입력한 정보
document.getElementsByClassName('modal-submit')[0].addEventListener('click', function(e){
    if (document.getElementById('user-id').value == '') { //아이디를 입력 안 했을 때 
        e.preventDefault();
        document.getElementsByClassName('message-id')[0].classList.add('error-show');
    }
    if (document.getElementById('user-pw').value == '') { //비밀번호를 입력 안 했을 때
        e.preventDefault();
        document.getElementsByClassName('message-pw')[0].classList.add('error-show');
    } else if (document.getElementById('user-pw').value.length < 6 ) { //비밀번호가 너무 짧을 때
        e.preventDefault();
        document.getElementsByClassName('message-pw-length')[0].classList.add('error-show');
        document.getElementsByClassName('message-pw')[0].classList.remove('error-show');
    } else if (document.getElementById('user-id').value.length >1 && document.getElementById('user-pw').value.length > 6 ) { //완성!
        alert('로그인 되었습니다!');
    } 
});

// 카드에 들어갈 정보
var products = [
  { id : 0, price : 17000000, title : '화성으로 가는 화섬입주민들' },
  { id : 1, price : 54800000, title : '정보석을 잔뜩 모아둔 두도지' },
  { id : 2, price : 62900000, title : '공인즙개사의 실험일지' }
];

var cardTitle = document.querySelectorAll('.card-title');
var cardPrice = document.querySelectorAll('.card-price');

for (i=0; i< cardTitle.length; i++) {
    cardTitle[i].innerHTML = products[i].title;
    cardPrice[i].innerHTML = products[i].price;
}
