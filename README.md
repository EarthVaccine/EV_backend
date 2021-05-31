# web_server

- 준비 (프론트 제작)  
- 1차 개발 (고유번호 생성)  
- 2차 개발 (프론트 화면 전환 애니메이션 생성)  
  
  

## 테스트 방법
  
> bottom_slider 호출 방법.  
> > console에 ```main_animation_page_status.result = true;``` 입력 후 아래에서 위로 드래그  
  
> main page 에 main_container라는 클래스를 가진 곳에서 드래그 해도 인식하지 않습니다.
> > tagul 글이 있을 위치이기 때문에 일부러 그쪽에는 이벤트를 넣지 않았습니다.
  

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