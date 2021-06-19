let cookie;
const total_cause = ['지구', '온실', '해수면', '온실가스', '북극', '온난화', '기후변화', '도시', '바다', '생태계', '이산화탄소'];

const causes_id = {
    '지구': 'earth',
    '온실': 'greenhouse',
    '해수면': 'sea​Level',
    '온실가스': 'greenGas',
    '북극': 'northPole',
    '온난화': 'warming',
    '기후변화': 'weatherChange',
    '도시': 'city',
    '바다': 'sea',
    '생태계': 'ecosystem',
    '이산화탄소': 'carbonDioxide'
};
const causes_name = {
    'earth': '지구',
    'greenhouse': '온실',
    'sea​Level': '해수면',
    'greenGas': '온실가스',
    'northPole': '북극',
    'warming': '온난화',
    'weatherChange': '기후변화',
    'city': '도시',
    'sea': '바다',
    'ecosystem': '생태계',
    'carbonDioxide': '이산화탄소'
};
const causes_explain = {
    'earth': '지구(地球) 또는 어스(영어: Earth)는 태양으로부터 세 번째 행성이며,<br>얇은 대기층으로 둘러싸여 있고,<br>지금까지 발견된 지구형 행성 가운데 가장 크다.<br>지구는 45억 6700만 년 전 형성되었으며,<br>용암 활동이 활발했던 지구와 행성 테이아의<br>격렬한 충돌로 생성되었을 달을 위성으로 둔다.<br>지구의 중력은 우주의 다른 물체,<br>특히 태양과 지구의 유일한 자연위성인 달과 상호작용한다.<br>지구와 달 사이의 중력 작용으로 조석 현상이 발생한다.<br>지구 온난화는 지구의 평균 기온이 상승하는 현상을 말한다.<br>산업화 이후, 인류의 과도한 화석 연료 사용으로 인해<br>추가적으로 발생한 온실 기체가 원인이라는 설이 가장 유력하다.<br>지구온난화의 예는 1880년대의 -19mm였던 해수면이 1930년 제1회 월드컵 때는 3mm로,<br>지금은 37mm로 높아져서 지구 온난화로 인해 사라진 섬들이 많다.<br>최근에는 이런 온난화를 막기 위해 노력하고 있는데,<br>이를테면 선진국에서 개발한 도심 속의 숲, 전기자동차, 한국에서 개발한 승용차 요일제 등이 있다.',
    'northPole': '북극(영어: Arctic, 北極)은 지구 북극점 근처의 지역이다.<br>북극점을 "북극"으로 부르기도 한다.<br>북극은 북극해뿐만 아니라 러시아,<br>시베리아(러시아), 알래스카(미국), 캐나다, 그린란드,<br>아이슬란드, 스칸디나비아(노르웨이, 스웨덴, 핀란드)를 포함한다.<br>남극과 마찬가지로 북극에도 대한민국을 포함한<br>여러 나라가 연구 기지를 설치하였다.<br>북극 지방은 여러가지 정의가 있다.<br>여름에 해가 지지 않고 겨울에 해가<br>뜨지 않는 북위 66° 33’의 북극권 북쪽 지방으로<br>정의하거나 기후와 식생을 기준으로<br>여름철 기온이 10 °C를 넘지 않는 선을 기준으로 하기도 한다.<br>이 기준은 대략 수목한계선과 일치한다.<br>북극 빙하의 감소 원인이 지구 온난화라 규정되었다.<br>이는 최근 몇 년 간의<br>유빙(流氷)의 융해(融解)로 보다 명백해졌다.<br>기후 모형은 북극에서는 전지구 평균보다<br>큰 온난화가 있을 것을 예견하였다.<br>2011년에 처음으로 오존홀이 발견 되기도 하였다.<br>인류는 이미 지구 가장 위에 떠있는 빙하의 3/4을 잃었다.'
}


function request(method, url, data=null) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if(data) xhr.send(JSON.stringify(data));
    else xhr.send();
    return xhr;
}
window.onload = () => {
    let uuid = new DeviceUUID().get();
    let xhr = request('POST', '/setCookie', {uid: uuid});
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let xhr1 = request('POST', '/get_cookie');
            xhr1.onreadystatechange = () => {
                if(xhr1.readyState === 4 && xhr1.status === 200) {
                    cookie = JSON.parse(JSON.parse(xhr1.responseText).cookie.cause_data);
                } else if(xhr1.readyState === 4 && xhr1.status === 400) {
                    location.replace(location.href);
                }
            }
        } else if(xhr.readyState === 4 && xhr.status === 400) {
            let data = JSON.parse(xhr.responseText);
            alert(`쿠키 오류가 발생하였습니다.\n${data.msg}`);
        }
    }

    let causeExplain = document.querySelector(".causeExplain");
    causeExplain.style.height = window.innerHeight - window.innerHeight * 0.15 - 100 + "px";
}