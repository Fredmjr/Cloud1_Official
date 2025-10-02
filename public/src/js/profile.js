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
console.log(lgrTknckie_Home);
})();
