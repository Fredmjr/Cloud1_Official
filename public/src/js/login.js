const Home = document.querySelector(".contentsSec");
const loginBtn = document.querySelector(".loginBtn");
const contentsSec = document.querySelector(".contentsSec");

(lgpg = () => {
  const lgpgobsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        const nodelgn_Btn = node.matches?.(".lgn_Btn")
          ? node
          : node.querySelector?.(".lgn_Btn");

        if (nodelgn_Btn) {
          const eml_inpt = document.querySelector(".lgn_eml_inpt");
          const psswd_inpt = document.querySelector(".lgn_psswd_inpt");
          const sgnpLink = document.querySelector(".sgnpLink");
          const frgtLinkBtn = document.querySelector(".frgtLinkBtn");
          //Link signup
          sgnpLink.addEventListener("click", () => {
            fetch("/app/sgnpg", {
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

          //Login form
          nodelgn_Btn.addEventListener("click", () => {
            console.log("submit form:");
            console.log(eml_inpt.value, psswd_inpt.value);
            const lgdata = {
              eml: eml_inpt.value,
              pwd: psswd_inpt.value,
            };

            console.log(lgdata);

            fetch("/usr/lgn", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // 'Authorization': 'Bearer YOUR_TOKEN',
              },
              body: JSON.stringify(lgdata),
            })
              .then((response) => response.json())
              .then((data) => {
                //erMgs.innerHTML = data;
                //erMgs.style.display = "block";
                if (data.erMgs) {
                  console.log(data.erMgs);
                } else if (data.jwtToken) {
                  console.log(data.jwtToken);
                  //Setup Token
                  const expires = new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                  ); // 7 days
                  document.cookie =
                    `lgrTkn=${encodeURIComponent(data.jwtToken)};` +
                    `Secure; SameSite=Strict; expires=${expires.toUTCString()}; path=/`; //

                  console.log(data.jwtToken);
                  setTimeout(() => {
                    window.location.reload();
                  }, 2000);
                }
              })
              .catch((error) => console.log(error));

            if (sgnpLink) {
              console.log("here");
            }
          });

          //Forgot password URL
          frgtLinkBtn.addEventListener("click", () => {
            fetch("/app/frgtpss", {
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
        }
      });
    });
  });

  lgpgobsrvr.observe(Home, { childList: true, subtree: true });
})();
