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
                <button class="m-btn white-btn buy-btn">장바구니 담기</button>
            </div>
        </li>`;
        $('.card-container').append(cardTemplate)
    })  
}
//처음 들어왔을 때 템플릿
maincardTemplate (products);


// // 주문하기 누르면 localStorage 에 저장하기 
// $('.buy-btn').click(function(e){
//     const cardTitle = $(e.target).siblings('h5').text(); //내가 누른 버튼의 형제 요소(제목)
//     if(localStorage.getItem('cart') != null) { //저장된 정보가 있으면 꺼내서 수정 후 다시 저장 
//         var cartList = JSON.parse(localStorage.cart);
//         cartList.push(cardTitle);
//         localStorage.setItem('cart', JSON.stringify(cartList));
//     }
//     else{ //localStorage 에 아무것도 없으면 누른 상품명 추가하기 
//         localStorage.setItem('cart', JSON.stringify([cardTitle]));
//     }
    
// })

// // 내가 클릭한 상품명은 어떻게 가져올까? 
//     $('.buy-btn').click(function(e){
//         const cardTitletest = $(e.target).siblings('h5').text();
//     });

// //localStorage는 어떻게 들여다볼 수 있을까? 
//     localStorage.getItem('cart')

// // 클릭한 상품명과 localStorage는 어떻게 비교할까? 
//     // 1. localStorage를 문자열로 바꾸기 
//         JSON.parse(localStorage.getItem('cart'))
//     // 2. 그 array 자료형 안에 있는 문자들을 선택
//         const cartArraytest = JSON.parse(localStorage.getItem('cart'))
//         cartArraytest.sort(function(a, b) {
//             if (a > b) return 1;
//             else if (b > a) return -1;
//             else return 0;
//         })
//         console.log(cartArraytest);
//     // 3. 내가 선택한 상품명과 동일한지 비교
//     $('.buy-btn').click(function(e){
//         const cardTitle = $(e.target).siblings('h5').text(); //내가 누른 버튼의 형제 요소(제목)
//         const cartJson = localStorage.getItem('cart');
//         const cartArray = JSON.parse(cartJson);
        
//         if (cartJson === null) {
//             localStorage.setItem('cart', JSON.stringify([cardTitle]));
//         } else {
//             for (let i=0; i<cartArray.length; i++) {
//                 if(cartArray[i] === cardTitle) return;
//             } 
//                 var testCart = cartArray;
//                 testCart.push(cardTitle);
//                 localStorage.setItem('cart', JSON.stringify(testCart));
//         }   
//         })

//클릭 횟수 체크 
// let cnt = 0;
// function clickCounter () {
//     cnt +=1;
//     console.log(cnt);
// }

// $('.buy-btn').click(clickCounter);


//내가 클릭한 상품명과 클릭 수 추가 & 동일한 상품 클릭 시 클릭 수만 추가 
$('.buy-btn').click(function(e){
    const cardTitle = $(e.target).siblings('h5').text(); 
    const numArrayTemplate = {title:cardTitle, num: 1};
    const numJson = localStorage.getItem('num');
    const getnumArray = JSON.parse(numJson);
    
    if (numJson === null) {
        localStorage.setItem('num', JSON.stringify([numArrayTemplate]));
    } else {
        for (let i=0; i<getnumArray.length; i++) {
            if(getnumArray[i].title === cardTitle){
                const plusClickCounter = getnumArray[i].num + 1;
                const reNumArray = {title:cardTitle, num: plusClickCounter};
                
                const newNumArray = getnumArray;
                newNumArray.splice(i); //해당 값 배열에서 삭제
                newNumArray.push(reNumArray); //배열에 다시 넣기
                localStorage.setItem('num',JSON.stringify(newNumArray)); //로컬스토리지에 넣기

                return;
            } 
        } 
        const newNumArray = getnumArray;
        newNumArray.push(numArrayTemplate);
        localStorage.setItem('num', JSON.stringify(newNumArray));
    }   
})

//모든 클릭 수 더해서 보여주기 
const numList = JSON.parse(localStorage.num);
let cartResult = 0;
for (let i=0; i<numList.length; i++) {
    const num1 = numList[i].num;

    cartResult += num1;
}
$('.cart-num').html('');
$('.cart-num').append('담은 상품수: ', cartResult);
