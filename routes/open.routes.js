import express from "express";

import {
  gentknUrl,
  lgnpgUrl,
  sgnpgUrl,
} from "../controllers/open.controller.js";

const router = express.Router();
router.get("/sgnpg", sgnpgUrl);
router.get("/lgnpg", lgnpgUrl);
router.get("/gen", gentknUrl);

export default router;
