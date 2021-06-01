# web_server

- 준비 (프론트 제작)  
- 1차 개발 (고유번호 생성)  
- 2차 개발 (프론트 화면 전환 애니메이션 생성)  
  
  

## 테스트 방법
  
> bottom_slider 호출 방법.  
> > console에 ```main_animation_page_status.result = true;``` 입력 후 아래에서 위로 드래그  
  
> main page 에 main_container라는 클래스를 가진 곳에서 드래그 해도 인식하지 않습니다.
> > tagul 글이 있을 위치이기 때문에 일부러 그쪽에는 이벤트를 넣지 않았습니다.


## DB 관련
### Settings ✅
```
mkdir config
touch mongoose.js
```
mongoose.js => 노션에 있는 소스를 붙여넣어주세요~! 비밀번호 정보가 있어서 노션에다가 올립니다. ✨

### DB Schema 🌈
간단하게, 어떠한 구조로 모델링이 되었는지 소개를 시켜 드리겠습니다~ 🎉
```json
// userSchema
// id 값으로 uuid module을 통하여, 유저 각각의 id를 저장하고 있어요 🙌
id : {
	type: String, 
	default: uuid.v1,
	unique : true
}, 

// cause_active 값으로 Array 형태이며, 유저가 원하는 단어들을 저장하고 있어요 🙌
cause_active : {
	type : Array
}
```
```js
// 여기도 userSchema 부분인데, 여기에는 카운트 숫자를 저장하고 있어요 🙌
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
    model:'users',
    field: 'uid', // auto-increment할 field
    startAt: 0, // 0에서 부터
    increment: 1 // 1씩 증가
});

```

## 실행방법

- ```npm i```
- ```node app.js```
- port = 80
  
#  
#  
  
깃허브 커밋하실때 각자 branch 생성해서 거기에 커밋해주세요.  
> branch 생성 ```git branch <생성할 branch 이름>```  
> branch 이동 ```git checkout <branch 이름>```  
  
### git push
- " add: <추가 한 내용> "  
- " feat: <수정 한 내용> "   
- " del: <삭제 한 내용> "  

```git add .```  
```git commit -m "feat: README.md"```  
```git push```  
  
  
### git pull
```git pull```