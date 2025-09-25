import express from 'express';
import {allAssets} from '../controllers/asset.controller.js'


const router = express.Router();
router.get("/allassets", allAssets)

export default router;