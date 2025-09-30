import express from 'express'


export const allUsers = async (req, res) => {
res.render('components/login')
console.log('all users')
}


//SIGN UP URL
export const signupUrl = async (req, res) => {
    const {usrnm, pnm, eml, pwd, conf_pwd} = req.body;

    try {
        if (usrnm !== '', pnm !== '', eml !== '', pwd !== '', conf_pwd !== '') {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailTrimmed = eml.trim();
 //Email format validation
            if (!emailRegex.test(eml)){
                return res.json({
                    erMgs: "Please enter a valid email address.", });
            }else {

  //Password verification
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|]{8,}$/;
        const passwdVerify = passwordRegex.test(pwd);
        const inputRules =
          "<br>- At least one lowercase letter. <br>- At least one uppercase letter. <br> - At least one digit. <br> - At least one special character.  <br> - No periods! (.) <br>- No spaces  <br> - Minimum length of 8 characters.";
//Password match
                if (pwd === conf_pwd){
//password format
                if (passwdVerify) {
                    res.json({pass:'okay'})

//db query data based on email and passsword







                }else {
                     res.json({
                         erMgs: inputRules,
                     })
                }
                }else {
                    res.json({
                        erMgs: "password doesn't match!",
                    });}
                } }else {res.json({
            erMgs: "fill in all fileds!",
      });

        }
} catch (error) {
    console.log(error)
}
}



//LOGIN URL
export const loginUrl = async (req, res)=>{
const {eml, pwd, conf_pwd} = req.body;

    try {
        if ( eml !== '', pwd !== '', conf_pwd !== '') {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailTrimmed = eml.trim();
 //Email format validation
            if (!emailRegex.test(eml)){
                return res.json({
                    erMgs: "Please enter a valid email address.", });
            }else {

  //Password verification
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|]{8,}$/;
        const passwdVerify = passwordRegex.test(pwd);
        const inputRules =
          "<br>- At least one lowercase letter. <br>- At least one uppercase letter. <br> - At least one digit. <br> - At least one special character.  <br> - No periods! (.) <br>- No spaces  <br> - Minimum length of 8 characters.";
//Password match
                if (pwd === conf_pwd){
//password format
                if (passwdVerify) {
                    res.json({pass:'okay'})

//db query data based on email and passsword







                }else {
                     res.json({
                         erMgs: inputRules,
                     })
                }
                }else {
                    res.json({
                        erMgs: "password doesn't match!",
                    });}
                } }else {res.json({
            erMgs: "fill in all fileds!",
      });

        }
} catch (error) {
    console.log(error)

}}
