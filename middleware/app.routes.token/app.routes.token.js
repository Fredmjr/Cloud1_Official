import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.GENERATIVETOKEN_KEY;

const objgentkn = {
  gentkn: "generative.token",
};

export const genJWT = jwt.sign(objgentkn, secret);
/* console.log(genJWT); */
