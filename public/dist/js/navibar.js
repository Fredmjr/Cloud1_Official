var n=document.querySelector(".burgerBtn"),e=document.querySelector(".toggleMenu"),o=document.querySelectorAll(".linkBtn");n.addEventListener("click",()=>{console.log("click"),e.style.display="block"});o.forEach((l,t)=>{l.addEventListener("click",()=>{e.style.display==="block"&&(console.log("block"),e.style.display="none")})});
//# sourceMappingURL=navibar.js.map
