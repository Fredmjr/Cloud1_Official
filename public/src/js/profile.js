/* const loginBtn = document.querySelector(".loginBtn"); */
/* const contentsSec = document.querySelector(".contentsSec"); */
const profileMenu = document.querySelector(".profileMenu");

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
      })
      .catch((error) => console.log(error));
  }
})();

//profileMenu section
profileMenu.addEventListener("click", () => {
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
  const tkn_data = {
    prflr_tkn: tkn,
  };
  console.log("stuck here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

  //login page
  /*   fetch("/app/prfl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': 'Bearer YOUR_TOKEN',
    },
    body: JSON.stringify(tkn_data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.lognd) {
        console.log("plase login");
      } else {
        contentsSec.innerHTML = data;
      }
    })
    .catch((error) => console.error("Error:", error)); */
});
