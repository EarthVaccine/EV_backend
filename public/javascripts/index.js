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
}
