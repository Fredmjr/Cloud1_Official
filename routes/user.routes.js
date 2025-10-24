import express from "express";
import {
  allUsers,
  loginUrl,
  signupUrl,
  prflrUrl,
  authprflUrl,
} from "../controllers/user.controller.js";
import { intmdttknoAuth } from "../middleware/auth/usr.sgnp_lgn.routes.js";
const router = express.Router();
router.get("/users", allUsers);
router.post("/lgn", intmdttknoAuth, loginUrl);
router.post("/sgnp", intmdttknoAuth, signupUrl);
router.post("/prflr", prflrUrl);
router.post("/authprfl", authprflUrl);

export default router;
