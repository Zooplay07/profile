/* 
1. 마우스를 아래로 스크롤 할 때 화면의 1/2까지 내려오면 Top 버튼이 숨겼다가 나타나도록 제작하겠습니다.
2. homeHeight 변수는 위에서 설정하여 여기서 변수 값 설정은 생략합니다.
3. arrow_up 클래스 css에 transition: all 1000ms; 추가하면 자연스럽게 나타납니다.
*/

const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

const top_button = document.querySelector(".arrow_up");

document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        top_button.style.opacity = 1;
    } else {
        top_button.style.opacity = 0;
    }
})
