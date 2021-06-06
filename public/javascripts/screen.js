let menu_lo = document.getElementById("menu_lo");
let main_lo = document.getElementById("main_lo");
let paro_lo = document.getElementById("paro_lo");

let main_page = document.getElementById("main");
let parody_page = document.getElementById("parody");
let menu_page = document.getElementById("menu");

let slider_explain = document.querySelector(".slider_explain");

let bottom_slider = document.getElementById("bottom_slider");

let main_page_status = {
    aInternal: true,
    aListener: function(val) {},
    set result(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get result() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
main_page_status.registerListener(function(val) {
    if(val === true) {
        if(!main_page.classList.contains("on")) {
            main_page.classList.remove("on", "off");
            main_page.classList.add("on");
            main_lo.classList.remove("a1");
            paro_lo.classList.remove("a1");
            menu_lo.classList.remove("a1");
            main_lo.classList.add("a1");
        }
    } else if(val === false) {
        main_page.classList.remove("on", "off");
        main_page.classList.add("off");
    }
});

let main_animation_page_status = {
    aInternal: false,
    aListener: function(val) {},
    set result(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get result() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
main_animation_page_status.registerListener(function(val) {
    if(val === true) {
        slider_explain.classList.remove("off", "on");
        slider_explain.classList.add("on");
    } else if(val === false) {
        slider_explain.classList.remove("off", "on");
        slider_explain.classList.add("off");
    }
});

let parody_page_status = {
    aInternal: false,
    aListener: function(val) {},
    set result(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get result() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
parody_page_status.registerListener(function(val) {
    if(val === true) {
        if(!parody_page.classList.contains("on")) {
            parody_page.classList.remove("on", "off");
            parody_page.classList.add("on");
            main_lo.classList.remove("a1");
            paro_lo.classList.remove("a1");
            menu_lo.classList.remove("a1");
            paro_lo.classList.add("a1");
        }
    } else if(val === false) {
        parody_page.classList.remove("on", "off");
        parody_page.classList.add("off");
    }
});

let menu_page_status = {
    aInternal: false,
    aListener: function(val) {},
    set result(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get result() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
menu_page_status.registerListener(function(val) {
    if(val === true) {
        if(!menu_page.classList.contains("on")) {
            menu_page.classList.remove("on", "off");
            menu_page.classList.add("on");
            main_lo.classList.remove("a1");
            paro_lo.classList.remove("a1");
            menu_lo.classList.remove("a1");
            menu_lo.classList.add("a1");
        }
    } else if(val === false) {
        menu_page.classList.remove("on", "off");
        menu_page.classList.add("off");
    }
});


let bottom_slider_status = {
    aInternal: false,
    aListener: function(val) {},
    set result(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get result() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
};
bottom_slider_status.registerListener(function(val) {
    if(val === true) {
        if(!bottom_slider.classList.contains("on")) {
            bottom_slider.classList.remove("on", "off");
            bottom_slider.classList.add("on");
        }
    } else if(val === false) {
        bottom_slider.classList.remove("on", "off");
        bottom_slider.classList.add("off");
    }
});

let startX, endX;
let x1, x2;

let startY, endY;
let y1, y2;


// main screen animation
main_page.addEventListener("touchstart", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "cloud") return;
    if(main_page_status.result && !menu_page_status.result) {
        e.preventDefault();
        startX = e.changedTouches[0].screenX;
        x1 = e.changedTouches[0].pageX;
        main_page.classList.remove("on", "off");
        main_page.style.transform = "translateX(0%)";
        menu_page.classList.remove("on", "off");
        menu_page.style.transform = "translateX(-100%)";
        parody_page.classList.remove("on", "off");
        parody_page.style.transform = "translateX(100%)";
        if(main_animation_page_status.result && !bottom_slider_status.result) {
            startY = e.changedTouches[0].screenY;
            y1 = e.changedTouches[0].pageY;
            bottom_slider.classList.remove("on", "off");
            bottom_slider.style.transform = "translate(0%, 15%) translateY(100%)";
        }
    }
});
main_page.addEventListener("touchmove", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "cloud") return;
    if(main_page_status.result) {
        if(x1 - e.changedTouches[0].pageX < 0) {  // 메인페이지에서 왼쪽으로 넘기려 했을 때, 메인페이지는 가만히 있고 메뉴페이지만 이동.
            e.preventDefault();
            x2 = x1 - e.changedTouches[0].pageX;
            if(x2*-1 > window.innerWidth) {
                menu_page.style.transform = 'translateX(0%)';
                parody_page.style.transform = 'translateX(-100%)';
                menu_page.style.transform = 'translateX(0%)';
                return;
            }
            menu_page.style.transform = `translateX(calc(-100% + ${x2*-1}px))`;
            main_page.style.transform = 'translateX(0%)';
            parody_page.style.transform = 'translateX(100%)';
        } else {  // 메인페이지를 오른쪽으로 넘기려 했을 때, 메인페이지와 페러디페이지가 같이 왼쪽으로 이동.
            x2 = x1 - e.changedTouches[0].pageX;
            if(x2 > window.innerWidth) {
                menu_page.style.transform = 'translateX(-100%)';
                parody_page.style.transform = 'translateX(0%)';
                menu_page.style.transform = 'translateX(-100%)';
                return;
            }
            main_page.style.transform = `translateX(calc(0% - ${x2}px))`;
            parody_page.style.transform = `translateX(calc(100% - ${x2}px))`;
            menu_page.style.transform = 'translateX(-100%)';
        }
        if(main_animation_page_status.result && !bottom_slider_status.result) {
            if(y1 - e.changedTouches[0].pageY > 0) {  // 메인페이지에서 화면을 위로 드래그 할 때, bottom slider 위로 애니메이션.
                main_page.style.transform = "translateX(0%)";
                menu_page.style.transform = "translateX(-100%)";
                parody_page.style.transform = "translateX(100%)";
                y2 = y1 - e.changedTouches[0].pageY;
                bottom_slider.style.transform = `translate(0%, 15%) translateY(calc(100% - ${y2}px))`;
                if(y2 > (window.innerHeight - window.innerHeight*0.15)) {  // bottom slider 높이가 최대치로 올라왔을 때 가만히.
                    bottom_slider.style.transform = "translate(0%, 15%) translate(0%)";
                }
            } else { // 메인페이지에서 화면을 아래로 드래그 할 때, bottom slider 는 가만히.
                bottom_slider.style.transform = "translate(0%, 15%) translateY(100%)";
            }
        }
    }
});
main_page.addEventListener("touchend", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "cloud") return;
    if(main_page_status.result) {
        endX = e.changedTouches[0].screenX;
        if((endX - startX) > -30 && (endX - startX) < 30) {
            main_page_status.result = true;
            menu_page_status.result = false;
            parody_page_status.result = false;
            bottom_slider_status.result = false;
        } else if((endX - startX) < -30) {
            main_page_status.result = false;
            menu_page_status.result = false;
            parody_page_status.result = true;
            bottom_slider_status.result = false;
        } else if((endX - startX) > 30) {
            main_page_status.result = true;
            menu_page_status.result = true;
            parody_page_status.result = false;
            bottom_slider_status.result = false;
        }
        if(main_animation_page_status.result && !bottom_slider_status.result) {
            endY = e.changedTouches[0].screenY;
            if(((endY - startY) < 0 ? -1 * (endY - startY) : (endY - startY)) < ((endX - startX) < 0 ? -1 * (endX - startX) : (endX - startX))) return;
            if((endY - startY) < -30) {
                main_page_status.result = true;
                menu_page_status.result = false;
                parody_page_status.result = false;
                bottom_slider_status.result = true;
            } else {
                main_page_status.result = true;
                menu_page_status.result = false;
                parody_page_status.result = false;
                bottom_slider_status.result = false;
            }
        }
    }
});


// menu screen animation
menu_page.addEventListener("touchstart", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "custom_box" || e.target.id.indexOf("_cbx") !== -1 || e.target.className == "checkspan" || e.target.classList.contains("cbx")) return;
    if(menu_page_status.result) {
        e.preventDefault();
        startX = e.changedTouches[0].screenX;
        x1 = e.changedTouches[0].pageX;
        menu_page.classList.remove("on", "off");
        menu_page.style.transform = "translateX(0%)";
    }
});
menu_page.addEventListener("touchmove", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "custom_box" || e.target.id.indexOf("_cbx") !== -1 || e.target.className == "checkspan" || e.target.classList.contains("cbx")) return;
    if(menu_page_status.result) {
        if(x1 - e.changedTouches[0].pageX < 0) {
            e.preventDefault();
            menu_page.style.transform = 'translateX(0%)';
        } else {
            x2 = x1 - e.changedTouches[0].pageX;
            menu_page.style.transform = `translateX(calc(0% - ${x2}px))`;
        }
    }
});
menu_page.addEventListener("touchend", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "custom_box" || e.target.id.indexOf("_cbx") !== -1 || e.target.className == "checkspan" || e.target.classList.contains("cbx")) return;
    if(menu_page_status.result) {
        endX = e.changedTouches[0].screenX;
        if((endX - startX) > -30) {
            menu_page_status.result = true;
        } else {
            main_page_status.result = false;
            main_page_status.result = true;
            menu_page_status.result = false;
            parody_page_status.result = false;
            bottom_slider_status.result = false;
        }
    }
});


// parody screen animation
parody_page.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
    x1 = e.changedTouches[0].pageX;
    startY = e.changedTouches[0].screenY;
    y1 = e.changedTouches[0].pageY;
    if(e.target !== e.currentTarget) if(e.target.className == "form-control" || e.target.className == "mainService" || e.target.className.indexOf("service") != -1 || e.target.className.indexOf("Container") != -1) {
        return;
    }
    if(parody_page_status.result) {
        e.preventDefault();
        startX = e.changedTouches[0].screenX;
        x1 = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].screenY;
        y1 = e.changedTouches[0].pageY;
    }
});
let parody_page_move_x = false;
let parody_page_move_y = false;
parody_page.addEventListener("touchmove", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "form-control") return; // input에 드래그를 했을 때, 끝내기
    if(parody_page_status.result) {
        if((y1 - e.changedTouches[0].pageY > 5 || y1 - e.changedTouches[0].pageY < -5) && !parody_page_move_x) {  // 페러디 페이지에서 위나 아래로 스크롤 할 때.
            parody_page_move_y = true;
            return;
        } else if(x1 - e.changedTouches[0].pageX < -5) {
            parody_page_move_x = true;
            parody_page.classList.remove("on", "off");
            main_page.classList.remove("on", "off");
            if(x1 - e.changedTouches[0].pageX > 0) {   // 페러디 화면에서 오른쪽으로 넘기려 했을 때 가만히.
                e.preventDefault();
                parody_page.style.transform = 'translateX(0%)';
                menu_page.style.transform = 'translateX(-100%)';
            } else {  // 페러디 화면에서 왼쪽으로 넘기려 했을 때.
                x2 = x1 - e.changedTouches[0].pageX;
                parody_page.style.transform = `translateX(calc(0% - ${x2}px))`;
                main_page.style.transform = `translateX(calc(-100% - ${x2}px))`;
            }
        }
    }
});
parody_page.addEventListener("touchend", (e) => {
    if(e.target !== e.currentTarget) if(e.target.className == "form-control") return; // input에 드래그를 했을 때, 끝내기
    if(parody_page_status.result) {
        endX = e.changedTouches[0].screenX;
        if((endX - startX) < 30) {
            if(parody_page_move_x) {
                parody_page_status.result = true;
                main_page_status.result = false;
            }
        } else {
            if(!parody_page_move_y) {
                main_page_status.result = true;
                menu_page_status.result = false;
                parody_page_status.result = false;
                bottom_slider_status.result = false;
            }
        }
        parody_page_move_x = false;
        parody_page_move_y = false;
    }
});


// bottom screen animation
bottom_slider.addEventListener("touchstart", (e) => {
    if(bottom_slider_status.result) {
        e.preventDefault();
        startY = e.changedTouches[0].screenY;
        y1 = e.changedTouches[0].pageY;
        bottom_slider.classList.remove("on", "off");
        bottom_slider.style.transform = "translate(0%, 15%) translateY(0%)";
    }
});
bottom_slider.addEventListener("touchmove", (e) => {
    if(bottom_slider_status.result) {
        if(y1 - e.changedTouches[0].pageY > 0) {
            e.preventDefault();
        } else {
            y2 = y1 - e.changedTouches[0].pageY;
            bottom_slider.style.transform = `translate(0%, 15%) translateY(calc(0% - ${y2}px))`;
        }
    }
});
bottom_slider.addEventListener("touchend", (e) => {
    if(bottom_slider_status.result) {
        endY = e.changedTouches[0].screenY;
        if((endY - startY) < 30) {
            bottom_slider_status.result = true;
        } else {
            main_page_status.result = true;
            menu_page_status.result = false;
            parody_page_status.result = false;
            bottom_slider_status.result = false;
        }
    }
});