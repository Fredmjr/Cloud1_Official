//Get token
(
  profiler = ()=>{

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
    //Profiler
    const Tk_data={
      prflr_tkn: lgrTknckie_Home,
    }
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
        console.log(data);
      })
      .catch((error) => console.log(error));
})();
