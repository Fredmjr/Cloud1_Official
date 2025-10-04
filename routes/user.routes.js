import express from 'express';
import {allUsers, loginUrl, signupUrl, prflrUrl} from '../controllers/user.controller.js'


const router = express.Router();
router.get("/users", allUsers)
router.post("/lgn", loginUrl)
router.post('/sgnp', signupUrl)
router.post('/prflr', prflrUrl)

export default router;
