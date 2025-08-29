const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  if (username.value.trim() === "") {
    usernameError.textContent = "請輸入使用者名稱";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "請輸入 Email";
    valid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Email 格式錯誤";
    valid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "請輸入密碼";
    valid = false;
  }

  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "請確認密碼";
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "密碼不一致";
    valid = false;
  }

  if (valid) {
    alert("註冊成功！");
    form.reset();
  }
});
