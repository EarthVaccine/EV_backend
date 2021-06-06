let custom_box = document.querySelector(".custom_box");

(function() {
    setTimeout(() => {
        for(let i of total_cause) {
            let cbx_div = document.createElement("div");
            cbx_div.classList.add("cbx", "off");

            let cbx = document.createElement("input");
            cbx.type = "checkbox";
            cbx.id = causes_id[i] + "_cbx";
            
            for(let j of cookie) {
                if(i == j) {
                    cbx_div.classList.remove("on", "off");
                    cbx_div.classList.add("on");
                    cbx.checked = true;
                }
            }
            

            cbx.onclick = (e) => { edit_cause(e.target.id); };
            
            let check_span = document.createElement("span");
            check_span.classList.add("checkspan");
            check_span.innerHTML = i;
            
            cbx_div.appendChild(cbx);
            cbx_div.appendChild(check_span);
            
            custom_box.appendChild(cbx_div);
            
            /*
            <div class="cbx on">
            <input type="checkbox" id="seaLevelRise_cbx">
            <span class="checkspan">해수면 상승</span>
            </div>*/
        }

        let cbx = document.querySelectorAll(".cbx");
        let cbx_touching = false;
        for(let i of cbx) {
            i.ontouchstart = () => {
                cbx_touching = true;
            }
            i.ontouchmove = () => {
                cbx_touching = false;
            }
            i.ontouchend = (e) => {
                if(cbx_touching) {
                    // i.firstElementChild.checked = i.firstElementChild.checked ? false : true;
                    // i.classList.remove("off", "on");
                    // if(i.firstElementChild.checked) {
                    //     i.classList.add("on");
                    // } else {
                    //     i.classList.add("off");
                    // }
                    if(e.target == e.currentTarget) edit_cause(i.firstElementChild.id);
                    else if(e.target.tagName.toLowerCase() == 'span') edit_cause(i.firstElementChild.id);
                }
                cbx_touching = false;
            }
        }
    }, 1000);
})();

function edit_cause(id) {
    let target = document.getElementById(id);
    let cause = id.split('_')[0];
    if(target.checked) {
        let check_boxs = document.querySelectorAll("input[type='checkbox']");
        let cbx_index = 0;
        for(let i of check_boxs) if(i.checked) cbx_index++;
        if(cbx_index <= 8) {
            target.checked = true;
            alert("최소 활성화 수는 8개입니다.");
            return;
        }
        let xhr = request('POST', 'del_cause', {cause});
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                target.parentElement.classList.remove("off", "on");
                target.parentElement.classList.add("off");
                target.checked = false;

                live_del(cause);
            }
        }
    } else {
        let xhr = request('POST', 'add_cause', {cause});
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                target.parentElement.classList.remove("off", "on");
                target.parentElement.classList.add("on");
                target.checked = true;

                live_add(cause);
            }
        }
    }
}