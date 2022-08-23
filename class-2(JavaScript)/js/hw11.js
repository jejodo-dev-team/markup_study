$.get('https://codingapple1.github.io/hello.txtds ')
    .done(function(data){
        console.log(data)
    })
    .fail(function(){
        console.log('실패함')
    })
    
$.get('https://codingapple1.github.io/price.json')
    .done(function(data){
        console.log(data.price)
    })
//서버와 유저는 문자로만 주고받을 수 있음 
//object, array 보내고 싶으면 따옴표쳐서 문자처럼 만들어야함 그게 json 형식
fetch('https://codingapple1.github.io/price.json')
    .then(res => res.json()) //받아온 object를 Json으로 변환하는 것 
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

// 카드에 들어갈 정보
const products = [
    { id : 0, price : 87000, title : '화성으로 가는 화섬입주민들', img : '../img/hw9/dozyjam.png'},
    { id : 1, price : 54800, title : '정보석을 잔뜩 모아둔 두도지', img : '../img/hw9/dozy.png'},
    { id : 2, price : 62900, title : '공인즙개사의 실험일지', img : '../img/hw9/girokjam.png'}
];
    
//카드 레이아웃 생성하기 
function maincardTemplate ($ArrayName){
    $ArrayName.forEach((ArrayItem)=>{
        const cardTemplate = 
        `<li class="card">
            <div class="card-img">
                <img src="${ArrayItem.img}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${ArrayItem.title}</h5>
                <p>가격 : <span class="card-price">${ArrayItem.price}</span></p>
                <button class="m-btn black-btn">주문하기</button>
            </div>
        </li>`;
        $('.card-container').append(cardTemplate)
    })  
}
//처음 들어왔을 때 템플릿
maincardTemplate (products);
//낮은가격순
$('.lowPrice-btn').click(function () {
    products.sort(function(a,b) {
        return a.price-b.price
    });
    $('.card-container').html('');
    maincardTemplate (products);
})
//높은 가격순
$('.highPrice-btn').click(function () {
    products.sort(function(a,b) {
        return b.price-a.price
    });
    $('.card-container').html('');
    maincardTemplate (products);
})
//가나다순
$('.letterSort-btn').click(function () {
    products.sort(function(a,b) {
        if (a.title > b.title) return 1;
        else if (b.title > a.title) return -1;
        else return 0;
    });
    $('.card-container').html('');
    maincardTemplate (products);
    })
//6만원 이하
const priceFilter6 = 60000;
$('.priceFillter6-btn').click(function () {
    const productsFilter= products.filter(function(a){
        return a.price < priceFilter6
    });
    $('.card-container').html('');
    maincardTemplate (productsFilter);
})
//더보기 
$('.more-card-btn').click(function () {
    $.get('https://codingapple1.github.io/js/more1.json')
        .done(function(data) {
        maincardTemplate (products);
        })
    $('.more-card-btn').css('display','none')
})

var array = [10,49,20,14,3];
array.sort(function(a,b){//숫자정렬
    return a-b
    //a와 b는 array 안의 자료 return 오른쪽이 양수면 a를 오른쪽으로 
    //음수면 b를 오른쪽으로 옮겨오기 때문에 오름차순으로 정렬할 수 있다. 
});
console.log(array);
var newArray = array.filter(function(a){
    return a < 4
});
console.log(newArray);
var newArray = array.map(function(a){
    return a * 4
});
console.log(newArray);
