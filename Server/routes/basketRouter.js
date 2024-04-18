import Router from 'express';
import {post, get, updateDeviceCount} from '../controlers/basketController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.post('/', authMiddleware,  post);
router.post('/update_count', authMiddleware,  updateDeviceCount);
router.get('/', authMiddleware, get);

export default router;