const express = require("express"); // express 가져오기
const dotenv = require("dotenv");

const app = express(); // express 함수 호출

// 환경변수 로드
dotenv.config();

// buiness logic이 들어감

// 서버 실행 (js 코드의 가장 하단에 위치)
app.listen(8080, () => {
    console.log("Server running", process.env.PORT);
})