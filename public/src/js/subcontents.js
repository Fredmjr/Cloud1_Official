const ftdwrhndle = document.querySelector(".ftdwrhndle");
/* const floathdnmenu = document.querySelector(".floathdnmenu");
const floatinghiddenmenu = document.querySelector(".floatinghiddenmenu");
const floathiddenMenu = document.querySelector(".floathiddenMenu");
const floatingClsBtnIcon = document.querySelector(".floatingClsBtnIcon");
const floatingMenu = document.querySelector(".floatingMenu");
const floatingClsBtn = document.querySelector(".floatingClsBtn");

//open hiddenmenu
floathdnmenu.addEventListener("click", () => {
  floatinghiddenmenu.style.display = "none";
  floathiddenMenu.style.display = "block";
});

floatingClsBtnIcon.addEventListener("click", () => {
  const floathiddenMenu = document.querySelector(".floathiddenMenu");
  floathiddenMenu.style.display = "none";
});

//closing hdden menu
document.addEventListener("click", (event) => {
  const floatinghiddenmenu = document.querySelector(".floatinghiddenmenu");
  if (!floatinghiddenmenu.contains(event.target)) {
    floatinghiddenmenu.style.display = "block";
  }
});

floatingMenu.addEventListener("click", () => {});
 */

//Open and clode drawer
ftdwrhndle.addEventListener("click", () => {
  const dwrcntnts = document.querySelector(".dwrcntnts");
  const isOpening = !dwrcntnts.classList.contains("open");

  if (isOpening) {
    dwrcntnts.style.display = "block";
    setTimeout(() => {
      dwrcntnts.classList.add("open");
    }, 10);
  } else {
    dwrcntnts.classList.remove("open");
    setTimeout(() => {
      dwrcntnts.style.display = "none";
    }, 1000);
  }
});

//Closed drawer without handle
document.addEventListener("click", (event) => {
  const dwrcntnts = document.querySelector(".dwrcntnts");
  const ftdwrhndle = document.querySelector(".ftdwrhndle");
  if (!ftdwrhndle.contains(event.target)) {
    dwrcntnts.classList.remove("open");
    setTimeout(() => {
      dwrcntnts.style.display = "none";
    }, 1000);
  }
});
