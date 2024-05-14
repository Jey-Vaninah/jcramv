let defaultPassword = "vaninah91003";
let defaultUserName = "vaninah@gmail.com";

const loginButton = document.querySelector(".loginButton");
const error = document.querySelector(".error");

loginButton.addEventListener("click", function () {
  const loginInput = document.querySelector(".loginInput").value;
  const passwordInput = document.querySelector("#passwordInput").value;

  loginButton.innerHTML = "...";
  if (loginInput !== defaultUserName || passwordInput !== defaultPassword) {
    setTimeout(function () {
      error.style.display = "flex";
      loginButton.innerHTML = "Login Now";
    }, 1000);
  } else {
    setTimeout(() => {
      window.location.href = "/page.html";
    }, 1000);
  }
});
