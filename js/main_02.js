// 마우스를 아래로 스크롤 할 때 Home 부분을 투명처리하기 //

const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', ()=> {
    home.style.opacity = 1 - (window.scrollY / homeHeight);
    // opacity 값은 0 ~ 1 입니다. 음수 값이 나와도 최소값이 0이므로 결과 값은 0으로 처리됩니다 //

})