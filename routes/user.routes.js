import express from "express";
import { authorization } from "../middleware/auth/auth.js";
import {
  allUsers,
  loginUrl,
  signupUrl,
  prflrUrl,
} from "../controllers/user.controller.js";
import { intmdttknoAuth } from "../middleware/auth/usr.sgnp_lgn.routes.js";
const router = express.Router();
//itermediate oauths (only for login and sgnup urls, these automatically sent client)
router.post("/lgn", intmdttknoAuth, loginUrl);
router.post("/sgnp", intmdttknoAuth, signupUrl);
//authorization oauths (except for login and sgnup rest are auth blocked urls, these login or signup is required then sent client)
router.get("/users", authorization, allUsers);
router.post("/prflr", authorization, prflrUrl);

export default router;
