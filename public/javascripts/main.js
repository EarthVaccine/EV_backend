let main_container = document.querySelector(".main_container");

(function () {
    let xhr = request('POST', '/cause_numerical/');
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let list = [];
            for(let i of total_cause) {
                list.push(
                    [i, data.cause_numerical[i]]
                )
            }
            WordCloud(main_container, {list});
        }
    }
})();

function live_del(cause) {
    let target = document.getElementById(cause);
    target.classList.add("disappear");
}
function live_add(cause) {
    let target = document.getElementById(cause);
    target.classList.remove("disappear");
}