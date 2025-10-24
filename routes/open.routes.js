import express from "express";

import {
  gentknUrl,
  intmdttknUrl,
  lgnpgUrl,
  sgnpgUrl,
} from "../controllers/open.controller.js";

const router = express.Router();
router.get("/sgnpg", sgnpgUrl);
router.get("/lgnpg", lgnpgUrl);
router.get("/gen", gentknUrl);
router.get("/4cf9b9c9-5b1d-479b-84db-5d90a7465204", intmdttknUrl);

export default router;
