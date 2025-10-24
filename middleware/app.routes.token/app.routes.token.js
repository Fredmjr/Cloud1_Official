import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Generative token
const secret = process.env.GENERATIVETOKEN_KEY;
const objgentkn = {
  gentkn: "generative.token",
};
export const genJWT = jwt.sign(objgentkn, secret);

//Intermediate token
const secret_intmdt = process.env.INTERMEDIATE_KEY;
const objintmdttkn = {
  intmdttkn: "intermediate.token",
};
export const intmdtJWT = jwt.sign(objintmdttkn, secret_intmdt);
