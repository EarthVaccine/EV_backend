const express  = require('express');
const router = express.Router();
const User = require('../model/Db');

// test
var newCause = ['해수면 상승', '빙하 감소', '이상기후로 인한 사상자', '1인당 에너지 소비랑', '온도 상승', '탄소 소비량', '오존층', '에너지 원단위', '전력 소비량', '온실효과를 주는 기체 지수', '강수량 변화', '프레온 가스 소비량', '최종에너지 소비량']

// 어짜피 저희가 save 할거는 active_cause 밖에 없어서 요런쪽으로 하면 ㄱㅊ할듯
var users = new User({
    cause_active : [newCause[0], newCause[1]]
})

users.save((err, names) => {
    if(err){
        console.log(err);
    }
});

console.log('users db saves', users);

module.exports = router;