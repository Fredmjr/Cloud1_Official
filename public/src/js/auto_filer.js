//This js will do automatic fill usr data throughtout application. (profile.js is reserved for profile config & page data)
//Universal Bearer url token

(async = () => {
  let uni_autotkn = ((elem) => {
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
  console.log(uni_autotkn);

  //The res of logic here
})();
