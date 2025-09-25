import express from 'express';
import {loginUrl, homeUrl, notificationsUrl, libraryUrl, cloud1AImodelUrl, searchUrl} from '../controllers/app.controller.js'


const router = express.Router();
router.get("/login", loginUrl)
router.get("/home", homeUrl)
router.get('/notifications', notificationsUrl)
router.get("/login", loginUrl)
router.get("/library", libraryUrl)
router.get("/cloud1AImodel", cloud1AImodelUrl)
router.get("/search", searchUrl)

export default router;