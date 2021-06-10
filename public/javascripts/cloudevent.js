let cause_title = document.querySelector(".causeTitle");
let cause_explain = document.querySelector(".causeExplain");


function event_set() {
    let clouds = document.querySelectorAll(".cloud");
    for(let i of clouds) {
        i.onclick = (e) => {bottom_up(e);}
    }
}

function bottom_up(e) {
    e = e.target.id;
    for(let i of total_cause) {
        let target = document.getElementById(causes_id[i]);
        for(let j of total_cause) { target.classList.remove(causes_id[j]); }
        target.classList.remove("on");
        target.classList.add(e, "on");
    }
    main_animation_page_status.result = true;
    cause_title.innerHTML = causes_name[e];
    cause_explain.innerHTML = causes_explain[e];
}