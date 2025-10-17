const sgnp_Home = document.querySelector(".contentsSec");

(SgnpFuc = () => {
  const sgnpobsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        const nodesignup_Btn = node.matches?.(".sgnp_Btn")
          ? node
          : node.querySelector?.(".sgnp_Btn");

        if (nodesignup_Btn) {
          const sgnp_usrnm_inpt = document.querySelector(".sgnp_usrnm_inpt");
          const sgnp_phnm_inpt = document.querySelector(".sgnp_phnm_inpt");
          const sgnp_eml_inpt = document.querySelector(".sgnp_eml_inpt");
          const sgnp_psswd_inpt = document.querySelector(".sgnp_psswd_inpt");
          const sgnp_fmpsswd_inpt =
            document.querySelector(".sgnp_fmpsswd_inpt");
          const sgnp_ermgs = document.querySelector("#sgnp_ermgs");
          const lgnLinkBtn = document.querySelector(".lgnLinkBtn");
          //Signup url Form
          nodesignup_Btn.addEventListener("click", () => {
            //console.log("");
            //console.log(""); //issue here app breakable issue!!!!

            const lgdata = {
              usrnm: sgnp_usrnm_inpt.value,
              pnm: sgnp_phnm_inpt.value,
              eml: sgnp_eml_inpt.value,
              pwd: sgnp_psswd_inpt.value,
              conf_pwd: sgnp_fmpsswd_inpt.value,
            };

            //console.log("");

            fetch("/usr/sgnp", {
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
                  sgnp_ermgs.style.display = "block";
                  sgnp_ermgs.innerHTML = data.erMgs;
                  setTimeout(() => {
                    sgnp_ermgs.style.display = "none";
                  }, 3000);
                } else if (data.jwtToken && data.redir) {
                  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 days
                  document.cookie =
                    `lgrTkn=${encodeURIComponent(data.jwtToken)};` +
                    `Secure; SameSite=Strict; expires=${expires.toUTCString()}; path=/`;

                  setInterval(() => {
                    window.location.reload();
                  }, 2000);
                }
              })
              .catch((error) => console.log(error));
          });

          //Switch from Signup to Login page
          lgnLinkBtn.addEventListener("click", () => {
            fetch("/app/login", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                // 'Authorization': 'Bearer YOUR_TOKEN',
              },
            })
              .then((response) => response.text())
              .then((data) => {
                sgnp_Home.innerHTML = data;
              })
              .catch((error) => console.error("Error:", error));
          });
        }
      });
    });
  });

  sgnpobsrvr.observe(sgnp_Home, { childList: true, subtree: true });
})();
