const Home = document.querySelector(".contentsSec");
/* const loginBtn = document.querySelector(".loginBtn"); */
/* const contentsSec = document.querySelector(".contentsSec"); */

(() => {
  //Universal Bearer url token
  let uni_logintkn = ((elem) => {
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
  console.log(uni_logintkn);

  //gen

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
          const lgn_erMgs_pnl = document.querySelector("#lgn_erMgs_pnl");
          //Link signup
          sgnpLink.addEventListener("click", () => {
            fetch("/open/sgnpg", {
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
            fetch("/open/4cf9b9c9-5b1d-479b-84db-5d90a7465204", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                const intmtHeader = `Bearer ${data.intmdttkn}`;

                fetch("/usr/lgn", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: intmtHeader,
                  },
                  body: JSON.stringify(lgdata),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    //erMgs.innerHTML = data;
                    //erMgs.style.display = "block";
                    if (data.erMgs) {
                      console.log(data.erMgs);
                      lgn_erMgs_pnl.innerHTML = data.erMgs;
                      lgn_erMgs_pnl.style.display = "block";
                      setTimeout(() => {
                        lgn_erMgs_pnl.style.display = "none";
                      }, 3000);
                    } else if (data.jwtToken) {
                      console.log(data.jwtToken);
                      //Setup Token
                      const expires = new Date(
                        Date.now() + 24 * 60 * 60 * 1000
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
              })
              .catch((error) => console.error(error));

            if (sgnpLink) {
              console.log("here");
            }
          });

          //Forgot password URL
          frgtLinkBtn.addEventListener("click", () => {
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
                fetch("/app/frgtpss", {
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
                  .catch((error) => console.error("Error:", error));
              })
              .catch((error) => console.error("Error:", error));
          });
        }
      });
    });
  });

  lgpgobsrvr.observe(Home, { childList: true, subtree: true });
})();

//Login page mutational elems and events
(() => {
  const lgBtnseventsbsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        //pwd toggle visibility button
        const node_pwdtoggleicn = node.matches?.(".pwdtoggleicn")
          ? node
          : node.querySelector?.(".pwdtoggleicn");
        const nodelgn_psswd_inpt = node.matches?.(".lgn_psswd_inpt")
          ? node
          : node.querySelector?.(".lgn_psswd_inpt");
        if (node_pwdtoggleicn) {
          node_pwdtoggleicn.addEventListener("click", () => {
            //toggle show and hide pwd
            if (nodelgn_psswd_inpt.type === "password") {
              nodelgn_psswd_inpt.type = "text";
            } else {
              nodelgn_psswd_inpt.type = "password";
            }
          });
        }
        //
      });
    });
  });

  lgBtnseventsbsrvr.observe(Home, { childList: true, subtree: true });
})();
