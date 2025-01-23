
var slides = document.querySelectorAll("#slides > img");
/*슬라이드 요소 내에 있는 모든 이미지 태그를 선택하여 배열로 저장*/
var prev = document.getElementById("prev");
/*'이전'버튼을 DOM에서 선택하여 저장*/
var next = document.getElementById("next");
/*'다음'버튼을 DOM에서 선택하여 저장*/
var current = 0;
/*현재 표시되고 있는 슬라이드의 인덱스를 나타내는 변수*/

showSlides(current);/*current 인덱스에 해당하는 슬라이드를 표시하는 함수*/
prev.onclick = prevSlide;/*이전 버튼 클릭 시 함수 실행*/
next.onclick = nextSlide;/*다음 버튼 클릭 시 함수 실행*/

function showSlides(n) { /*모든 슬라이드 이미지를 숨긴 후 인덱스 n에 해당하는 슬라이드 이미지를 화면ㅇ ㅔ표시시*/
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";/*인덱스 n에 해당하는 이미지를 block으로 설정해 화면에 표시*/
}



function prevSlide() {
    if(current > 0) current -=1;
    else current = slides.length - 1; /*현재 슬라이드가 첫 번째 슬라이드라면 인덱스를 마지막 슬라이드로 변경하여
    슬라이드가 마지막으로 순환되도록 함*/
        showSlides(current);
}

function nextSlide() {
    if(current < slides.length - 1) current +=1;
    /*현재 인덱스가 마지막 슬라이드의 인덱스보다 작으면(마지막 슬라이드가 아니면) 인덱스를 하나 증가*/
    else current = 0;
        showSlides(current);
}