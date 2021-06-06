let custom_box = document.querySelector(".custom_box");

for(let i of total_cause) {
    let cbx_div = document.createElement("div");
    cbx_div.classList.add("cbx", "on");
    

    let cbx = document.createElement("input");
    cbx.type = "checkbox";
    cbx.id = causes_id.i + "_cbx";
    cbx.checked = true;
    
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
    i.ontouchend = () => {
        if(cbx_touching) {
            i.firstElementChild.checked = i.firstElementChild.checked ? false : true;
            i.classList.remove("off", "on");
            if(i.firstElementChild.checked) {
                i.classList.add("on");
            } else {
                i.classList.add("off");
            }
        }
        cbx_touching = false;
    }
}