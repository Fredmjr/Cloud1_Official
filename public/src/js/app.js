const welcomePage = document.querySelector(".welcomePage");
const menuBtn = document.querySelector(".menuBtn");
const toggleMenu = document.querySelector(".toggleMenu");
const loginBtn = document.querySelector(".loginBtn");
const contentsSec = document.querySelector(".contentsSec");
const notifications = document.querySelector(".notifications");
const profileMenu = document.querySelector(".profileMenu");
const floatingMgs = document.querySelector(".floatingMgs");
const librarySec = document.querySelector(".librarySec");
const homeSec = document.querySelector(".homeSec");
const searchSec = document.querySelector(".searchSec");
const cloud1L = document.querySelector(".cloud1L");
const loginPage = document.querySelector(".loginPage");
const signupPage = document.querySelector(".signupPage");

//welcome page with logo
setTimeout(function () {
  welcomePage.style.display = "none";
}, 2000);

//Login section
loginBtn.addEventListener("click", () => {
  fetch("/app/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//notifications section
notifications.addEventListener("click", () => {
  fetch("/app/notifications", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//profileMenu section
profileMenu.addEventListener("click", () => {
  fetch("/app/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//cloud1AImodel section
floatingMgs.addEventListener("click", () => {
  fetch("/app/cloud1AImodel", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//librarySec section
librarySec.addEventListener("click", () => {
  fetch("/app/library", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//home section by click
homeSec.addEventListener("click", () => {
  /* homeFuc(); */

  fetch("/app/home", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const dataData = data;
      contentsSec.innerHTML = dataData;
    })
    .catch((error) => console.error("Error:", error));
});

//Auto Home render
function homeFuc() {
  fetch("/app/home", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
}
homeFuc();

//search section
searchSec.addEventListener("click", () => {
  fetch("/app/search", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error("Error:", error));
});

//cloud1L logo icon section
cloud1L.addEventListener("click", () => {
  window.location.reload();
  //should take user home, not reloading, bro fix this in the future!!
});

//signup section
function signupFuc() {
  signupPage.style.display = "block";
  loginPage.style.display = "none";
}
