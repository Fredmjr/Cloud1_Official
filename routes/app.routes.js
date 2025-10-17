import express from "express";
import {
  loginUrl,
  homeUrl,
  notificationsUrl,
  libraryUrl,
  cloud1AImodelUrl,
  searchUrl,
  sgnpgUrl,
  frgtpssUrl,
  profileUrl,
  prflpgUl,
  chtspgUrl,
  exppgUrl,
  dymdppUrl,
  stngspgUrl,
  dwnldpgUrl,
  hpsppgUrl,
} from "../controllers/app.controller.js";

const router = express.Router();
router.get("/login", loginUrl);
router.get("/home", homeUrl);
router.get("/notifications", notificationsUrl);
router.get("/login", loginUrl);
router.get("/library", libraryUrl);
router.get("/cloud1AImodel", cloud1AImodelUrl);
router.get("/search", searchUrl);
router.get("/sgnpg", sgnpgUrl);
router.get("/frgtpss", frgtpssUrl);
router.post("/prfl", profileUrl);
router.get("/prflpg", prflpgUl);
router.get("/chtspg", chtspgUrl);
router.get("/exppg", exppgUrl);
router.get("/dymdpg", dymdppUrl);
router.get("/stngspg", stngspgUrl);
router.get("/dwnldpg", dwnldpgUrl);
router.get("/hpsppg", hpsppgUrl);

export default router;
