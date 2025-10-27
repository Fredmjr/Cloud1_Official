const menuBtn = document.querySelector(".menuBtn");
const toggleMenu = document.querySelector(".toggleMenu");
const loginBtn = document.querySelector(".loginBtn");
const drplgoutBtn = document.querySelector("#drplgoutBtn");
const contentsSec = document.querySelector(".contentsSec");

//Non-generative tkn funtions
(() => {
  //Universal Bearer url token
  let uni_apptkn = ((elem) => {
    let ckies = document.cookie.split("; ");
    for (let i = 0; i < ckies.length; i++) {
      let cookie = ckies[i];
      let [name, value] = cookie.split("=");
      if (name === elem) {
        return decodeURIComponent(value);
      }
    }
    return null;
  })("lgrTkn");
  console.log(uni_apptkn);
  const appHeader = `Bearer ${uni_apptkn}`;
  //use appHeader tkn in all urls except /open/ (is always) & /app/ (protected by gen different tkn)

  //Login section
  loginBtn.addEventListener("click", () => {
    fetch("/open/lgnpg", {
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

  //Logout function
  drplgoutBtn.addEventListener("click", () => {
    console.log("loging out");
    document.cookie = `lgrTkn=; Secure; SameSite=Strict; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    setTimeout(() => {
      window.location.reload();
    }, 500);
  });
})();

//Generative tkn  fucntions
(() => {
  //universal_gen app url token
  fetch("/open/gen", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
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

      const gntkn = data.gentkn;
      const genHeader = `Bearer ${gntkn}`;
      //notifications section
      notifications.addEventListener("click", () => {
        fetch("/app/notifications", {
          method: "GET",
          headers: {
            Authorization: genHeader,
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
      /*       floatingMgs.addEventListener("click", () => {
        fetch("/app/cloud1AImodel", {
          method: "GET",
          headers: {
            Authorization: genHeader,
          },
        })
          .then((response) => response.text())
          .then((data) => {
            contentsSec.innerHTML = data;
          })
          .catch((error) => console.error("Error:", error));
      }); */

      //librarySec section
      librarySec.addEventListener("click", () => {
        fetch("/app/library", {
          method: "GET",
          headers: {
            Authorization: genHeader,
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
        fetch("/app/home", {
          method: "GET",
          headers: {
            Authorization: genHeader,
          },
        })
          .then((response) => response.text())
          .then((data) => {
            const dataData = data;
            contentsSec.innerHTML = dataData;
          })
          .catch((error) => console.error("Error:", error));
      });

      (() => {
        fetch("/app/home", {
          method: "GET",
          headers: {
            Authorization: genHeader,
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
            Authorization: genHeader,
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

      drppflBtn.addEventListener("click", () => {
        fetch("/app/prflpg", {
          method: "GET",
          headers: {
            Authorization: genHeader,
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
            Authorization: genHeader,
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
            Authorization: genHeader,
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
            Authorization: genHeader,
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
            Authorization: genHeader,
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
            Authorization: genHeader,
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
            Authorization: genHeader,
          },
        })
          .then((response) => response.text())
          .then((data) => {
            const contentsSec = document.querySelector(".contentsSec");
            contentsSec.innerHTML = data;
          })
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error("Error:", error));
})();
