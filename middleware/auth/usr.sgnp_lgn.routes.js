import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.INTERMEDIATE_KEY;

export const intmdttknoAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      oauthMgs: "Authorization header missing or invalid token format!",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const authenticatedToken = jwt.verify(token, secret);
    req.Auth = authenticatedToken;
    next();
  } catch (error) {
    console.error("Generative token verification failed");
    return res.status(403).json({
      oauthMgs: "Invalid token. Unauthorized access.",
    });
  }
};
