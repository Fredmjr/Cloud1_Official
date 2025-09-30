import express from 'express';
import {allUsers, loginUrl, signupUrl} from '../controllers/user.controller.js'


const router = express.Router();
router.get("/users", allUsers)
router.post("/lgn", loginUrl)
router.post('/sgnp', signupUrl)

export default router;
