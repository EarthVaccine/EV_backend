let cookie;
const total_cause = ['지구', '온실', '해수면', '온실가스', '북극', '온난화', '기후변화', '도시', '사태', '생태계', '이산화탄소'];

const causes_id = {
    '지구': 'earth',
    '온실': 'greenhouse',
    '해수면': 'sea​Level',
    '온실가스': 'greenGas',
    '북극': 'northPole',
    '온난화': 'warming',
    '기후변화': 'weatherChange',
    '도시': 'city',
    '사태': 'situation',
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
    'situation': '사태',
    'ecosystem': '생태계',
    'carbonDioxide': '이산화탄소'
};
const causes_explain = {
    'earth': '지구(地球) 또는 어스(영어: Earth)는 태양으로부터 세 번째 행성이며,<br>얇은 대기층으로 둘러싸여 있고,<br>지금까지 발견된 지구형 행성 가운데 가장 크다.<br>지구는 45억 6700만 년 전 형성되었으며,<br>용암 활동이 활발했던 지구와 행성 테이아의<br>격렬한 충돌로 생성되었을 달을 위성으로 둔다.<br>지구의 중력은 우주의 다른 물체,<br>특히 태양과 지구의 유일한 자연위성인 달과 상호작용한다.<br>지구와 달 사이의 중력 작용으로 조석 현상이 발생한다.<br>지구 온난화는 지구의 평균 기온이 상승하는 현상을 말한다.<br>산업화 이후, 인류의 과도한 화석 연료 사용으로 인해<br>추가적으로 발생한 온실 기체가 원인이라는 설이 가장 유력하다.<br>지구온난화의 예는 1880년대의 -19mm였던 해수면이 1930년 제1회 월드컵 때는 3mm로,<br>지금은 37mm로 높아져서 지구 온난화로 인해 사라진 섬들이 많다.<br>최근에는 이런 온난화를 막기 위해 노력하고 있는데,<br>이를테면 선진국에서 개발한 도심 속의 숲, 전기자동차, 한국에서 개발한 승용차 요일제 등이 있다.'
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