import express from "express";
import {
  allUsers,
  loginUrl,
  signupUrl,
  prflrUrl,
  authprflUrl,
} from "../controllers/user.controller.js";

const router = express.Router();
router.get("/users", allUsers);
router.post("/lgn", loginUrl);
router.post("/sgnp", signupUrl);
router.post("/prflr", prflrUrl);
router.post("/authprfl", authprflUrl);

export default router;
