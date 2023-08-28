   
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


// 마우스를 아래로 스크롤 할 때 Home 부분을 투명처리하기 //
const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
    // opacity 값은 0 ~ 1 입니다. 음수 값이 나와도 최소값이 0이므로 결과 값은 0으로 처리됩니다 //
})

/* 
1. 마우스를 아래로 스크롤 할 때 화면의 1/2까지 내려오면 Top 버튼이 숨겼다가 나타나도록 제작하겠습니다.
2. homeHeight 변수는 위에서 설정하여 여기서 변수 값 설정은 생략합니다.
3. arrow_up 클래스 css에 transition: all 1000ms; 추가하면 자연스럽게 나타납니다.
*/
const top_button = document.querySelector(".arrow_up");

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        top_button.style.opacity = 1;
    } else {
        top_button.style.opacity = 0;
    }
})


// 햄버거 버튼 클릭 이벤트 //
const navMenu = document.querySelector('.header_menu');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

// 모바일 화면에서 네비게이션 메뉴를 클릭하면 메뉴 숨김 //
navMenu.addEventListener('click', () => {
    navMenu.classList.remove('open');
})