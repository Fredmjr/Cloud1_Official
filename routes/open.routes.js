import express from "express";

import { lgnpgUrl, sgnpgUrl } from "../controllers/open.controller.js";

const router = express.Router();
router.get("/sgnpg", sgnpgUrl);
router.get("/lgnpg", lgnpgUrl);

export default router;
