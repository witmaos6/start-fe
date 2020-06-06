var $body=document.body;
var $addRed=document.querySelector('.add-red');
var $addBox=document.querySelector('.add-btn');
var $delBox=document.querySelector('.delete-btn');
var $textBtn=document.querySelector('.text-btn');
var $resetBtn=document.querySelector('.reset-btn');
var $toggleBtn=document.querySelector('.toggle-btn');
var $imageBtn=document.querySelector('.image-btn');

var ClickEvent='click';
var addBox='box';
var addRed='red';
var adddiv='div';

function P1(){ //.add-red 클릭하면 .box class 속성에 .red를 추가
    var $boxColor = document.querySelectorAll('.'+addBox);
    $boxColor.forEach(function($box){
        $box.classList.add(addRed);
    })
}

function P2(){ //.add-btn 클릭하면 .box 엘리먼트를 body에 하나씩 추가
    var $box=document.createElement(adddiv);
    $box.classList.add(addBox);
    $body.appendChild($box);
}

function P3(){ // .delete-btn 클릭하면 모든 .box 엘리먼트를 하나씩 삭제
    var $DelBox=document.getElementById(adddiv);
    $DelBox.remove();
}
function P4(){ //.text-btn 클릭하면 .txt에 value 값을 가져와서 .box에 가져온 value 값 텍스트 추가, .box 엘리먼트가 여러개 있을경우 동일하게 추가
    
}
function P5(){ // .reset-btn 클릭하면 모든 .box 엘리먼트 제거
    
}
function P6(){ //.toggle-btn 클릭하면 .box 엘리먼트 숨기고 다시 클릭하면 보이게 토글버튼 처리면
    
}
function P7(){ //.image-btn 클릭하면 .box 엘리먼트에 이미지 출력
    
}

function Run(){
    $addRed.addEventListener(ClickEvent, P1);
    $addBox.addEventListener(ClickEvent, P2);
    $delBox.addEventListener(ClickEvent, P3);
    // $resetBtn.addEventListener(ClickEvent,);
    // $toggleBtn.addEventListener(ClickEvent,);
    // $imageBtn.addEventListener(ClickEvent,);
}

Run();
// 문제 8: 위에서 작성한 코드들을 최대한 함수화, 재사용성 높임 