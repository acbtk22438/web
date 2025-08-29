const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  usernameError.textContent = "";
  passwordError.textContent = "";

  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "請輸入帳號";
    valid = false;
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "請輸入密碼";
    valid = false;
  }

  if (valid) {
    alert("登入成功！");
    loginForm.reset();
  }
});
