const sgnp_Home = document.querySelector('.contentsSec')





if(sgnp_Home){
  console.log('present')
}


(SgnpFuc= () => {
  const sgnpobsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        const nodesignup_Btn = node.matches?.(".sgnp_Btn")
          ? node
          : node.querySelector?.(".sgnp_Btn");

        if (nodesignup_Btn) {
          console.log("Sigubtn present")
          const sgnp_usrnm_inpt = document.querySelector('.sgnp_usrnm_inpt')
          const sgnp_hnm_inpt = document.querySelector('.sgnp_phnm_inpt')
          const sgnp_eml_inpt = document.querySelector('.sgnp_eml_inpt')
          const sgnp_psswd_inpt = document.querySelector('.sgnp_psswd_inpt')
          const sgnp_cfmpsswd_inpt = document.querySelector('.sgnp_cfmpsswd_inpt')



         nodesignup_Btn.addEventListener('click' , () => {

           console.log("submit form:")
           console.log(sgnp_usrnm_inpt.value, sgnp_phnm_inpt.value, sgnp_eml_inpt.value,
                      sgnp_psswd_inpt.value, sgnp_cfmpsswd_inpt.value)


            const lgdata = {
  usrnm: sgnp_usrnm_inpt.value,
  pnm: sgnp_hnm_inpt.value,
  eml: sgnp_eml_inpt.value,
  pwd: sgnp_psswd_inpt.value,
  conf_pwd: sgnp_cfmpsswd_inpt.value
};




           console.log(lgdata)


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
                console.log(data.erMgs);
            })
            .catch((error) => console.log(error));
          });

        }
      });
    });
  });

  sgnpobsrvr.observe(sgnp_Home, { childList: true, subtree: true });
})();
