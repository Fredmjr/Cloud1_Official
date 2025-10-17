import express from "express";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();

export const allUsers = async (req, res) => {
  res.render("components/login");
  console.log("all users");
};

//SIGN UP URL
export const signupUrl = async (req, res) => {
  const { usrnm, pnm, eml, pwd, conf_pwd } = req.body;

  try {
    if ((usrnm !== "", pnm !== "", eml !== "", pwd !== "", conf_pwd !== "")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailTrimmed = eml.trim();
      //Email format validation
      if (!emailRegex.test(eml)) {
        return res.json({
          erMgs: "Please enter a valid email address.",
        });
      } else {
        //Password verification
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|]{8,}$/;
        const passwdVerify = passwordRegex.test(pwd);
        const inputRules =
          "<br>- At least one lowercase letter. <br>- At least one uppercase letter. <br> - At least one digit. <br> - At least one special character.  <br> - No periods! (.) <br>- No spaces  <br> - Minimum length of 8 characters.";
        //Password match
        if (pwd === conf_pwd) {
          //Check if user exists
          if (passwdVerify) {
            const ifexists = await userModel.findOne({
              where: {
                email: eml,
              },
            });
            if (ifexists) {
              res.json({
                erMgs: "User with provided credentials exists!",
              });
            } else {
              //Data Encyption before storing in db (very important encypt then store)
              const salt = bcrypt.genSaltSync(10);
              const hashedpassword = bcrypt.hashSync(pwd, salt);
              //Create user if user doesnt exist
              const newUser = await userModel.create({
                username: usrnm,
                phone: pnm,
                email: eml,
                password: hashedpassword,
              });

              if (newUser) {
                const data = {
                  usrnm: newUser.username,
                  phm: newUser.phone,
                  eml: newUser.email,
                };

                const JWT = jwt.sign(data, process.env.SECRET_KEY, {
                  expiresIn: "24h",
                });
                res.json({
                  redir: true,
                  jwtToken: JWT,
                });
              }
            }
          } else {
            res.json({
              erMgs: inputRules,
            });
          }
        } else {
          res.json({
            erMgs: "password doesn't match!",
          });
        }
      }
    } else {
      res.json({
        erMgs: "Fill in all fileds!",
      });
    }
  } catch (error) {
    console.log(error);
    //chceking wrong phone number format
    if (
      error.name === "SequelizeValidationError" &&
      error.errors &&
      error.errors.some(
        (err) =>
          err.message === "Validation is on phone failed" &&
          err.type === "Validation error" &&
          err.path === "phone"
      )
    ) {
      res.json({
        erMgs: "Invalid phone number format!",
      });
    }
  }
};

//LOGIN URL
export const loginUrl = async (req, res) => {
  const { eml, pwd } = req.body;

  try {
    if ((eml !== "", pwd !== "")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailTrimmed = eml.trim();
      //Email format validation
      if (!emailRegex.test(eml)) {
        return res.json({
          erMgs: "Please enter a valid email address.",
        });
      } else {
        //Password verification
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|])[A-Za-z\d!@#$%^&*()_+\-=[\]{};:'",.<>/?~`|]{8,}$/;
        const passwdVerify = passwordRegex.test(pwd);
        const inputRules =
          "<br>- At least one lowercase letter. <br>- At least one uppercase letter. <br> - At least one digit. <br> - At least one special character.  <br> - No periods! (.) <br>- No spaces  <br> - Minimum length of 8 characters.";
        //Password match
        if (pwd) {
          //password format
          if (passwdVerify) {
            const ifexists = await userModel.findOne({
              where: {
                email: eml,
              },
            });
            //Password chceking of existing usr email
            if (ifexists) {
              const isValid = bcrypt.compareSync(pwd, ifexists.password);
              if (isValid) {
                const usrData = {
                  usrnm: ifexists.username,
                  phm: ifexists.phone,
                  eml: ifexists.email,
                };
                console.log(usrData);
                const JWT = jwt.sign(usrData, process.env.SECRET_KEY, {
                  expiresIn: "24h",
                });
                res.json({
                  jwtToken: JWT,
                  redir: true,
                });
              } else {
                res.json({
                  erMgs: "Incorrect password!",
                });
              }
            } else {
              res.json({
                erMgs: "No user with such credentials!",
              });
            }
          } else {
            res.json({
              erMgs: inputRules,
            });
          }
        } else {
          res.json({
            erMgs: "Please provide your password!",
          });
        }
      }
    } else {
      res.json({
        erMgs: "Fill in all fileds!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//Auto-Prolder controller
export const prflrUrl = async (req, res) => {
  const { prflr_tkn } = req.body;
  try {
    if (prflr_tkn) {
      const opnTkn = jwt.verify(prflr_tkn, process.env.SECRET_KEY);
      res.json({
        usrnm: opnTkn.usrnm,
        phm: opnTkn.phm,
        eml: opnTkn.eml,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

//
export const authprflUrl = async (req, res) => {
  const { tkndata } = req.body;
  try {
    if (tkndata && tkndata !== "") {
      res.json({
        prflpg: "prflpg",
      });
    } else {
      res.json({
        erMgs: "lgpg",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
