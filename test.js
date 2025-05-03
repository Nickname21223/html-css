// test.js
let wrap = document.createElement('div');
wrap.id = "wrap";

wrap.innerHTML = `
  <form id="login-form">
    <label for="user-id">username</label><br />
    <input type="text" id="user-id" name="user-id" /><br />
    <label for="user-pw">password </label><br />
    <input type="password" id="user-pw" name="user-pw" /><br />
    <button type="submit">submit</button>
  </form>
`;

document.body.appendChild(wrap);
