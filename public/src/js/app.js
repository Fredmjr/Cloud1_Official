const welcomePage = document.querySelector(".welcomePage");
const menuBtn = document.querySelector(".menuBtn");
const toggleMenu = document.querySelector(".toggleMenu");
const loginBtn = document.querySelector(".loginBtn");
const contentsSec = document.querySelector(".contentsSec");
const notifications = document.querySelector(".notifications");
const floatingMgs = document.querySelector(".floatingMgs");
const librarySec = document.querySelector(".librarySec");
const homeSec = document.querySelector(".homeSec");
const searchSec = document.querySelector(".searchSec");
const cloud1L = document.querySelector(".cloud1L");
const loginPage = document.querySelector(".loginPage");
const signupPage = document.querySelector(".signupPage");
const drppflBtn = document.querySelector("#drppflBtn");
const drpmychtsBtn = document.querySelector("#drpmychtsBtn");
const drpexprBtn = document.querySelector("#drpexprBtn");
const drpdaymdBtn = document.querySelector("#drpdaymdBtn");
const drpstngsBtn = document.querySelector("#drpstngsBtn");
const drpdwnldBtn = document.querySelector("#drpdwnldBtn");
const drphpspBtn = document.querySelector("#drphpspBtn");
const drplgoutBtn = document.querySelector("#drplgoutBtn");

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
//This section is in profile.js

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
/* function homeFuc() {
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
 */
(async = () => {
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
})();

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
signupFuc = () => {
  signupPage.style.display = "block";
  loginPage.style.display = "none";
};

drppflBtn.addEventListener("click", () => {
  fetch("/app/prflpg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});

drpmychtsBtn.addEventListener("click", () => {
  fetch("/app/chtspg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});

//Explore page
drpexprBtn.addEventListener("click", () => {
  fetch("/app/exppg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});
//Daylight mode page
drpdaymdBtn.addEventListener("click", () => {
  fetch("/app/dymdpg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});
//Settings page
drpstngsBtn.addEventListener("click", () => {
  fetch("/app/stngspg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});
//downloads page
drpdwnldBtn.addEventListener("click", () => {
  fetch("/app/dwnldpg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});
//Help and support page
drphpspBtn.addEventListener("click", () => {
  fetch("/app/hpsppg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
  })
    .then((response) => response.text())
    .then((data) => {
      const contentsSec = document.querySelector(".contentsSec");
      contentsSec.innerHTML = data;
    })
    .catch((error) => console.error(error));
});

//Logout function
drplgoutBtn.addEventListener("click", () => {
  console.log("loging out");
  document.cookie = `lgrTkn=; Secure; SameSite=Strict; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  setTimeout(() => {
    window.location.reload();
  }, 500);
});
