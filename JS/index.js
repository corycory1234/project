// --------------------Carousel-----------------------//
$(".owl-carousel").owlCarousel({

    loop: true,
    lazyLoad:true,
    margin: 50,
    nav: true,

    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,

    responsive: {
        0: {
            items: 1
        },
    }
})

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


//---------------------------- skrollr卷軸滾動 ----------------------------//
let s = skrollr.init();


// // NAV導覽列滑動
// $(window).scroll(function(event){
//     if ($(window).scrollTop() > 0) 
//     $(".nav-container").addClass("nav-scroll");
//     else if ($(window).scrollTop() = 0){
//         $(".navcon-container").addClass("navcon-container")
//     }
// })


// ------------------------ 按讚 -------------------------- //
let number = 0

function click(number_var){
  number = number + number_var
  $(".thumb_number").text(number);
}

$(".fa-thumbs-up").click(
    function(){
      click(1);
      }
  )











// ------------------------5星評分-------------------------- //
// let title = document.querySelector("#title");
// let nickName = document.querySelector("#nickName");
// let content = document.querySelector("#content");
// let btn = document.querySelector(".btn");
// let board_Example =document.querySelector(".board_Example")
// // let board = document.querySelector(".board")
// // let board_container = document.querySelector(".board-container");
// let board_array = [];

// function render (){
//     let boardStr = "";
//     board_array.forEach(function(item, index){
//         boardStr = boardStr + `
//         <div class="board_example">
//             <div class="board-Txt">
//                 <h1>${item.title}</h1>
//                 <p>${item.nickName}</p>
//                 <p>${item.content}</p>
//             </div>
//         </div>
//         `
//     title.value = "";
//     nickName.value = "";
//     content.value = "";
//     })
//     board_Example.innerHTML = boardStr;
// }

// btn.addEventListener("click", function(){
//     board_array.unshift({
//         title: title.value,
//         nickName: nickName.value,
//         content: content.value,
//     })
//     render();
// })


//------------------- 留言板 --------------------- //

let title = document.querySelector("#title");
let nickName = document.querySelector("#nickName");
let content = document.querySelector("#content")
let btn = document.querySelector(".btn")
let board_Txt = document.querySelector(".board-Txt")
let arr = [];

function render (){
    let str = "";
    arr.forEach(function(item, index){
        str += `
        <h4>標題：${item.title}</h4>
            <p>暱稱：${item.nickName}</p>
            <p>留言：${item.content}</p>
        `
        title.value ="";
        nickName.value ="";
        content.value ="";
    })
    board_Txt.innerHTML = str;
}





btn.addEventListener("click", function(){
    if(title.value === "" || nickName.value === "" || content.value === ""){
        alert("留言資料不正確!")
        return;
    }
    arr.unshift({
        title: title.value,
        nickName: nickName.value,
        content: content.value,
    })
    render();
})