const express = require('express'); //Express 모듈 불러오기

//Constants 
const PORT = 8080; //Express 서버를 위한 포트 설정

//APP 
const app = express(); //새로운 Express 어플 생성
app.get('/', (req,res) => {
    res.send('반가워요!!')
}); //"/"이 경로로 요청이 오면 Hello World를 결과값으로 전달

app.listen(PORT); //해당 포트와 호스트에서 HTTP 서버를 시작
console.log("Server is running");