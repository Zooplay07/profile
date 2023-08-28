'use strict'; // 선언하지 않은 변수는 오류되도록 해줍니다. javascript 성능 향상 // 

// 마우스를 아래로 스크롤 할 때 header에 있는 메인메뉴 배경 색상 변경하기 //
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;
    //const headerHeight = header.getBoundingClientRect().height; 로 하셔도 됩니다. //

document.addEventListener('scroll', function() {
    //document.addEventListener('scroll', () => { 로 하여도 됩니다.
    console.log(window.scrollY);
    if(window.scrollY > headerHeight) {
        header.classList.add('header-dark');
    } else {
        header.classList.remove('header-dark');
    }
}) 