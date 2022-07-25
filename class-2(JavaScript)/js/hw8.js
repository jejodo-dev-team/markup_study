// 버튼 1을 눌렀을 때
// document.getElementsByClassName('tab-btn')[1].addEventListener('click', function() {
//     document.getElementsByClassName('tab-btn')[0].classList.remove('tab-active');
//     document.getElementsByClassName('tab-btn')[1].classList.add('tab-active');
//     document.getElementsByClassName('tab-btn')[2].classList.remove('tab-active');
    
//     document.getElementsByClassName('tab-content')[0].classList.remove('show');
//     document.getElementsByClassName('tab-content')[1].classList.add('show');
//     document.getElementsByClassName('tab-content')[2].classList.remove('show');
// })

//이걸 확장성 있는 코드로 전환
for (let i = 0; i < $('.tab-btn').length; i++){

    $('.tab-btn').eq(i).on('click', function(){
      $('.tab-btn').removeClass('tab-active');
      $('.tab-btn').eq(i).addClass('tab-active');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(i).addClass('show');
    })
};

