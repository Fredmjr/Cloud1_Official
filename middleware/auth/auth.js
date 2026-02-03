import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRET_KEY;

//openin the jwttoken
//Helped but same logic..........................................................
export const authorization = (req, res, next) => {
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
  if (!token) {
    return res.status(401).send("Token not found in header.");
  }

  try {
    const authenticatedToken = jwt.verify(token, secret);

    req.Auth = authenticatedToken;
    next();
  } catch (error) {
    console.error("Token verification failed");
    if (error.name === "TokenExpiredError") {
      return res.status(401).send("Token has expired. Please log in again.");
    }
    return res.status(403).send("Invalid token. Unauthorized access.");
  }
};
