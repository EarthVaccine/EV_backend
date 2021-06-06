let cause_title = document.querySelector(".causeTitle");
let cause_explain = document.querySelector(".causeExplain");


function bottom_up(e) {
    for(let i of total_cause) {
        let target = document.getElementById(causes_id[i]);
        for(let j of total_cause) { target.classList.remove(causes_id[j]); }
        target.classList.add(causes_id[e[0]]);
    }
    main_animation_page_status.result = true;
    cause_title.innerHTML = e[0];
}