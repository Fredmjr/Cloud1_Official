/* const loginBtn = document.querySelector(".loginBtn"); */
/* const contentsSec = document.querySelector(".contentsSec"); */
const profileMenu = document.querySelector(".profileMenu");
const drpusrnm = document.querySelector(".usrPrlusername");
const drpml = document.querySelector(".usrPrlEmail");

//Get token
(() => {
  lgrTknckie = (elem) => {
    let ckies = document.cookie.split("; ");
    for (let i = 0; i < ckies.length; i++) {
      let cookie = ckies[i];
      let [name, value] = cookie.split("=");
      if (name === elem) {
        return decodeURIComponent(value);
      }
    }
    return null;
  };

  let lgrTknckie_Home = lgrTknckie("lgrTkn");
  //hide login icon is token present (usr loged in)
  if (lgrTknckie_Home) {
    const loginBtn = document.querySelector(".loginBtn");
    loginBtn.style.display = "none";
    //add icon here in place of login icon
  }

  //Profiler
  const Tk_data = {
    prflr_tkn: lgrTknckie_Home,
  };

  if (lgrTknckie_Home) {
    fetch("/usr/prflr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': 'Bearer YOUR_TOKEN',
      },
      body: JSON.stringify(Tk_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.usrnm, data.eml, data.phm);
        if (data.usrnm && data.eml) {
          drpusrnm.textContent = data.usrnm;
          drpml.textContent = data.eml;
        }
      })
      .catch((error) => console.log(error));
  }
})();

//profile page configuration
(() => {
  let tkn = ((elem) => {
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
  const tknobj = {
    tkndata: tkn,
  };

  fetch("/usr/authprfl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
    body: JSON.stringify(tknobj),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.prflpg) {
        //Profile page
        profileMenu.addEventListener("click", () => {
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
      } else {
        //Redirect to login page if no login tkn found
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
              const contentsSec = document.querySelector(".contentsSec");
              contentsSec.innerHTML = data;
            })
            .catch((error) => console.error(error));
        });
      }
    })
    .catch((error) => console.error(error));
})();
