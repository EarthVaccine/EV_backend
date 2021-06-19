const express = require("express");
const router = express.Router();
const path = require("path");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../config/jwt");
const axios = require("axios");
const cheerio = require("cheerio");
const { json } = require("express");
const { isBuffer } = require("util");

const causes_name = {
    'earth': '지구',
    'greenhouse': '온실',
    'sea​Level': '해수면',
    'greenGas': '온실가스',
    'northPole': '북극',
    'warming': '온난화',
    'weatherChange': '기후변화',
    'city': '도시',
    'sea': '바다',
    'ecosystem': '생태계',
    'carbonDioxide': '이산화탄소'
};
const lists = ['지구', '온실', '해수면', '온실가스', '북극', '온난화', '기후변화', '도시', '바다', '생태계', '이산화탄소'];

router
.get('/', (req, res) => {
    res.render('index');
})

.post('/setCookie', (req, res) => {
    let token = req.cookies.user;
    if(!token) {
        let user_cookie = jwt.sign({ uid: crypto.createHash('sha256').update(req.body.uid).digest('hex'), cause_data: JSON.stringify(['지구', '온실', '해수면', '온실가스', '북극', '온난화', '기후변화', '도시', '바다', '생태계', '이산화탄소']) }, config.secret, {expiresIn:'100d'});
        res.cookie("user", user_cookie);
    } else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) return res.status(400).json({err:true, msg: err});
            let user_cookie = jwt.sign({ uid: crypto.createHash('sha256').update(req.body.uid).digest('hex'), cause_data: decoded.cause_data }, config.secret, {expiresIn:'365d'});
            res.clearCookie("user");
            res.cookie("user", user_cookie);
        });
    }
    res.status(200).json({cookie_set: "success"});
})

.post('/cause_numerical', async (req, res) => {
    let numerical = await get_numerical(lists);
    res.status(200).json({cause_numerical: numerical});
})
.post('/get_cookie', (req, res) => {
    let token = req.cookies.user;
    if(!token) return res.status(400).json({msg: '쿠키가 존재하지 않습니다.'});
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(400).json({err: true, msg: err});
        res.status(200).json({cookie: decoded});
    });
})

.post('/del_cause', (req, res) => {
    let token = req.cookies.user;
    if(!token) return res.status(400).json({msg: '쿠키가 존재하지 않습니다.'});
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(400).json({err: true, msg: err});
        let causes = JSON.parse(decoded.cause_data);
        causes.splice(causes.indexOf(causes_name[req.body.cause]), 1);

        let user_cookie = jwt.sign({ uid: decoded.uid, cause_data: JSON.stringify(causes) }, config.secret, {expiresIn:'365d'});
        res.clearCookie("user");
        res.cookie("user", user_cookie);
        return res.status(200).json({ result: "del success" });
    });
})
.post('/add_cause', (req, res) => {
    let token = req.cookies.user;
    if(!token) return res.status(400).json({msg: '쿠키가 존재하지 않습니다.'});
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(400).json({err: true, msg: err});
        let causes = JSON.parse(decoded.cause_data);
        causes.splice(lists.indexOf(causes_name[req.body.cause]), 0, causes_name[req.body.cause]);
        
        let user_cookie = jwt.sign({ uid: decoded.uid, cause_data: JSON.stringify(causes) }, config.secret, {expiresIn:'365d'});
        res.clearCookie("user");
        res.cookie("user", user_cookie);
        return res.status(200).json({ result: "add success" });
    });
})

module.exports = router;


async function get_numerical(lists) {
    const getBreeds = async () => {
        return new Promise(async function (resolve, reject) {
            let counts = {
                '지구': 0,
                '온실': 0,
                '해수면': 0,
                '온실가스': 0,
                '북극': 0,
                '온난화': 0,
                '기후변화': 0,
                '도시': 0,
                '바다': 0,
                '생태계': 0,
                '이산화탄소': 0
            };
            for(var j = 0; j < 8; j ++) {
                if(j == 0) { url = "https://www.sciencetimes.co.kr/news/tag/%EC%A7%80%EA%B5%AC%EC%98%A8%EB%82%9C%ED%99%94/"; }
                else { url = "https://www.sciencetimes.co.kr/news/tag/%EC%A7%80%EA%B5%AC%EC%98%A8%EB%82%9C%ED%99%94/page/"+`${j+1}` }

                let body = await axios.post(url);
                const $ = cheerio.load(body.data);
                let parentTag = $("div.board_cont");
                let resultArr = [];

                parentTag.each(function(i, elements) {
                    let itemObj = { 
                        _titles : $(this).find("strong").text(),
                        _texts : $(this).find("p").text(),
                    }
    
                    for(let loops of lists) {
                        if(itemObj._titles.search(loops) != -1) {
                            counts[loops] ++;
                        }
                        if(itemObj._texts.search(loops) != -1) {
                            counts[loops] ++;
                        }
                    }
                    resultArr.push(itemObj);
                });
            }
            resolve(counts);
        });
    }
    return await getBreeds().then(data => { return data; });
}