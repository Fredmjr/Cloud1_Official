const burgerBtn = document.querySelector(".burgerBtn");
const toggleMenu = document.querySelector(".toggleMenu");
const linkBtn = document.querySelectorAll(".linkBtn");

burgerBtn.addEventListener("click", () => {
  console.log("click");
  toggleMenu.style.display = "block";
});

//clicks on individual links
linkBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (toggleMenu.style.display === "block") {
      console.log("block");
      toggleMenu.style.display = "none";
    }
  });
});
//Hide dropdown menu by click outside
/* document.addEventListener("click", (event) => {
  const clickedInsideToggleMenu = document.body.contains(event.target);
  const clickedOnLinkBtn = Array.from(linkBtn).some((btn) =>
    btn.contains(event.target)
  );

  if (clickedInsideToggleMenu && !clickedOnLinkBtn) {
    linkBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (!btn.contains(event.target)) {
          console.log("outside");
        }
      });
    });
  }
});
 */
