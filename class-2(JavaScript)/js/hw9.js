// Modal Window
const Modal = document.querySelector('.dimmed')
const passwordLength = 6;
const userID = document.querySelector('#user-id');
const userPW = document.querySelector('#user-pw');
const errorInputID = document.querySelector('.message-id');
const errorInputPW = document.querySelector('.message-pw');
const errorInputPWLength = document.querySelector('.message-pw-length');

// 로그인 모달 보여줘
document.querySelector('.login-modal').addEventListener('click', function(){
    Modal.classList.toggle('modal-show');
})
// 모달 닫아줘
document.querySelector('.modal-close').addEventListener('click', function(){
    Modal.classList.toggle('modal-show');
    errorInputID.classList.remove('error-show');
    errorInputPW.classList.remove('error-show');
    errorInputPWLength.classList.remove('error-show');
})
// 배경눌렀을 때 모달 닫기
Modal.addEventListener('click', function(e){
    if (e.target === Modal) {
        Modal.classList.toggle('modal-show');
    }
})
// 모달에 입력한 정보
document.getElementsByClassName('modal-submit')[0].addEventListener('click', function(e){
    if (userID.value === '') { //아이디를 입력 안 했을 때 
        e.preventDefault();
        errorInputID.classList.add('error-show');
    }
    if (userPW.value === '') { //비밀번호를 입력 안 했을 때
        e.preventDefault();
        errorInputPW.classList.add('error-show');
    } else if (userPW.value.length < passwordLength ) { //비밀번호가 너무 짧을 때
        e.preventDefault();
        errorInputPWLength.classList.add('error-show');
        errorInputPW.classList.remove('error-show');
    } else if (userID.value.length >1 && userPW.value.length > passwordLength ) { //완성!
        alert('로그인 되었습니다!');
    } 
});

// 카드에 들어갈 정보
const products = [
  { id : 0, price : 17000000, title : '화성으로 가는 화섬입주민들' },
  { id : 1, price : 54800000, title : '정보석을 잔뜩 모아둔 두도지' },
  { id : 2, price : 62900000, title : '공인즙개사의 실험일지' }
];

const cardAllTitle = document.querySelectorAll('.card-title');
const cardAllPrice = document.querySelectorAll('.card-price');

for (i=0; i< cardAllTitle.length; i++) {
    cardAllTitle[i].innerHTML = products[i].title;
    cardAllPrice[i].innerHTML = products[i].price;
}
