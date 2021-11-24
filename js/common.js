// html에서 .search인 요소를 가져옴
const searchEl = document.querySelector('.search');
// searchEl에서 input 태그를 가진 요소를 가져옴
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
    // 실제로 해당 요소에 포커스 액션을 주는 것
    searchInputEl.focus();
});

// 자바스크립트는 이벤트 리스너를 통해 요소에 클래스를 추가/삭제할 수 있다
// 이걸 css에서 구현해서 사용자의 행동에 따라 페이지가 변화하는 걸 보여줌
searchInputEl.addEventListener('focus', function (){
    searchEl.classList.add('focused');
    // (속성의 이름, 속성 값)
    searchInputEl.setAttribute('placeholder', '통합 검색');
});

searchInputEl.addEventListener('blur', function (){
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder');
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();