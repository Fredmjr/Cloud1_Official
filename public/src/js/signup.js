const sgnp_Home = document.querySelector(".contentsSec");
const Home = document.querySelector(".contentsSec");

//Universal Bearer url token
let uni_sgntkn = ((elem) => {
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
console.log(uni_sgntkn);
const sgnHeader = `Bearer ${uni_sgntkn}`;

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
            fetch("/open/4cf9b9c9-5b1d-479b-84db-5d90a7465204", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                const intmtHeader = `Bearer ${data.intmdttkn}`;
                //Signup url
                fetch("/usr/sgnp", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: intmtHeader,
                  },
                  body: JSON.stringify(lgdata),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.erMgs) {
                      console.log(data.erMgs);
                      sgnp_ermgs.style.display = "block";
                      sgnp_ermgs.innerHTML = data.erMgs;
                      setTimeout(() => {
                        sgnp_ermgs.style.display = "none";
                      }, 3000);
                    } else if (data.jwtToken && data.redir) {
                      const expires = new Date(
                        Date.now() + 24 * 60 * 60 * 1000
                      ); // 24 days
                      document.cookie =
                        `lgrTkn=${encodeURIComponent(data.jwtToken)};` +
                        `Secure; SameSite=Strict; expires=${expires.toUTCString()}; path=/`;

                      setInterval(() => {
                        window.location.reload();
                      }, 2000);
                    }
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.error("Error:", error));
          });

          //Switch from Signup to Login page
          lgnLinkBtn.addEventListener("click", () => {
            fetch("/open/lgnpg", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.text())
              .then((data) => {
                const sgnp_Home = document.querySelector(".contentsSec");
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

//signup page mutational elems and events
(() => {
  const sgnpBtnseventsbsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        //toggle1
        const node_sgnppwdtoggleicn1 = node.matches?.(".sgnppwdtoggleicn1")
          ? node
          : node.querySelector?.(".sgnppwdtoggleicn1");
        const node_sgnp_psswd_inpt = node.matches?.(".sgnp_psswd_inpt")
          ? node
          : node.querySelector?.(".sgnp_psswd_inpt");

        //toggle2
        const node_sgnppwdtoggleicn2 = node.matches?.(".sgnppwdtoggleicn2")
          ? node
          : node.querySelector?.(".sgnppwdtoggleicn2");
        const node_sgnp_fmpsswd_inpt = node.matches?.(".sgnp_fmpsswd_inpt")
          ? node
          : node.querySelector?.(".sgnp_fmpsswd_inpt");
        //toggler 1
        if (node_sgnppwdtoggleicn1) {
          node_sgnppwdtoggleicn1.addEventListener("click", () => {
            //toggle show and hide pwd
            if (node_sgnp_psswd_inpt.type === "password") {
              node_sgnp_psswd_inpt.type = "text";
            } else {
              node_sgnp_psswd_inpt.type = "password";
            }
          });
        }

        //toggler 2
        if (node_sgnppwdtoggleicn2) {
          node_sgnppwdtoggleicn2.addEventListener("click", () => {
            //toggle show and hide pwd
            if (node_sgnp_fmpsswd_inpt.type === "password") {
              node_sgnp_fmpsswd_inpt.type = "text";
            } else {
              node_sgnp_fmpsswd_inpt.type = "password";
            }
          });
        }

        //
      });
    });
  });

  sgnpBtnseventsbsrvr.observe(Home, { childList: true, subtree: true });
})();
