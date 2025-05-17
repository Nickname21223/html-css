// test.js
const http = require("http");
const url = require("url");



const home = (req, res) => {
  res.end("HOME");
};

const user = (req, res) => {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name : ${userInfo.name}, age: ${userInfo.age}`);
};

const feed = (req, res) => {
  res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
      </ul>
      `);
};

const notFound = (req, res) => {
  res.statusCode = 404;
  res.end("404 page not found");
};
const test = {
  "/": home,
  "/user": user,
  "/feed": feed
};

http.createServer((req,res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type","text/html");

  if (path in test) {
    test[path](req, res);  // 존재하면 해당 경로에 맞는 함수 실행
  } else {
    notFound(req, res);  // 경로가 없으면 404 처리
  }

})
.listen("3000", () => console.log("라우터"));