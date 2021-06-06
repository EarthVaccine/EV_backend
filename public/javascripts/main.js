(function () {
    let xhr = request('POST', '/cause_numerical/');
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data.cause_numerical);
        }
    }
})();