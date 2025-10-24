const burgerBtn = document.querySelector(".burgerBtn");
const toggleMenu = document.querySelector("#profilePrev");
const linkBtn = document.querySelectorAll(".linkBtn");

//Universal Bearer url token
let uni_nvbrtkn = ((elem) => {
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
console.log(uni_nvbrtkn);
const nvbrHeader = `Bearer ${uni_nvbrtkn}`;

//MENU TOGGLE
//open dropdwon menu
burgerBtn.addEventListener("click", () => {
  const toggleMenu = document.querySelector(".toggleMenu");
  toggleMenu.style.display = "block";
});

//closing drop-down menu
document.addEventListener("click", (event) => {
  const burgerBtn = document.querySelector(".burgerBtn");
  const toggleMenu = document.querySelector(".toggleMenu");
  if (!burgerBtn.contains(event.target)) {
    toggleMenu.style.display = "none";
  }
});

//clicks on individual links to close drop-down menu
linkBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const toggleMenu = document.querySelector(".toggleMenu");
    if (toggleMenu.style.display === "block") {
      toggleMenu.style.display = "none";
    }
  });
});

//prpfile page when proile btn clicked
profilePrev.addEventListener("click", () => {
  fetch("/open/gen", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const gntkn = data.gentkn;
      const genHeader = `Bearer ${gntkn}`;
      fetch("/app/prflpg", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: genHeader,
        },
      })
        .then((response) => response.text())
        .then((data) => {
          const contentsSec = document.querySelector(".contentsSec");
          contentsSec.innerHTML = data;
        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
});
