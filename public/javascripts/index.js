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
        if(xhr.readyState === 4 && xhr.status === 400) {
            let data = JSON.parse(xhr.responseText);
            alert(`쿠키 오류가 생겼습니다.\n${data.msg}`);
        }
    }
}