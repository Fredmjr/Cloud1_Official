const Home = document.querySelector('.contentsSec')





if(Home){
  console.log('present')
}


(lgpg = () => {
  const lgpgobsrvr = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        const nodelgn_Btn = node.matches?.(".lgn_Btn")
          ? node
          : node.querySelector?.(".lgn_Btn");

        if (nodelgn_Btn) {
            console.log("loginbtm present")
          const eml_inpt = document.querySelector('.lgn_eml_inpt')
          const psswd_inpt = document.querySelector('.lgn_psswd_inpt')
          const cfmpsswd_inpt = document.querySelector('.lgn_cfmpsswd_inpt')
        const sgnpLink = document.querySelector(".sgnpLink")



//Link signup
sgnpLink.addEventListener("click", ()=>{
  fetch('/app/sgnpg', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer YOUR_TOKEN',
      }
     })
      .then(response => response.text())
        .then(data => {
          Home.innerHTML = data;
      })
      .catch(error => console.error('Error:', error));
})


//Login form
         nodelgn_Btn.addEventListener('click' , () => {
           console.log("submit form:")
           console.log(eml_inpt.value,
                       psswd_inpt.value, cfmpsswd_inpt.value)
           const lgdata ={
             eml: eml_inpt.value,
             pwd: psswd_inpt.value,
             conf_pwd: cfmpsswd_inpt.value
           }

           console.log(lgdata)

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
                console.log(data.erMgs);
            })
            .catch((error) => console.log(error));


             if (sgnpLink) {
                 console.log("here")
             }
         });

        }
      });
    });
  });

  lgpgobsrvr.observe(Home, { childList: true, subtree: true });
})();
