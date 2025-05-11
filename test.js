// test.js
import axios from "axios";

const option = {
    url: 'https://dummyjson.com/todos/1',
    method: 'GET',
    headers: { // ✅ headers가 아니라 header => headers 로 수정해야 함
        "Content-Type": "application/json"
    }
};

axios(option)
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
