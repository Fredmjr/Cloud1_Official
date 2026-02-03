import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.GENERATIVETOKEN_KEY;

export const gentknoAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return (
      res
        .status(401)
        /* .send("Authorization header missing or invalid token format!"); */
        .json({
          oauthMgs: "Authorization header missing or invalid token format!",
        }) //json as response is more controllable than res.send
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const authenticatedToken = jwt.verify(token, secret);
    req.Auth = authenticatedToken;
    next();
  } catch (error) {
    console.error("Generative token verification failed");
    /* return res.status(403).send("Invalid token. Unauthorized access."); */
    return res.status(403).json({
      oauthMgs: "Invalid token. Unauthorized access.",
    });
  }
};
