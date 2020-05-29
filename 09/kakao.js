const $btn = document.querySelector("#search-btn");
const $text = document.querySelector("#search-text");
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = {
    Authorization: "KakaoAK ee5adcecd697e1c53a34a89a7ef72589",
};

function success(data) {
    console.log(data);
}
function error() {
    alert('에러');
}

function search() {
    const { value } = $text;
    if (value === '') {
        alert('검색어 입력');
        return false;
    }


    fetch('${url}?query=${value}', { headers }).then((res) => res.json()).then(success).catch(error);

    return true;
}

$btn.addEventListener('click', search);