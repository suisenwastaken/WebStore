import Router from 'express';
import {post, get} from '../controlers/basketController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.post('/', authMiddleware,  post);
router.get('/', authMiddleware, get);

export default router;