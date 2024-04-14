import Router from 'express';
import {post, get, getById, getPromo} from '../controlers/deviceController.js'
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
import { postRate } from '../controlers/ratingController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), post);
router.get('/', get);
router.get('/promo', getPromo);
router.get('/:id', getById);
router.post('/:id', authMiddleware, postRate)

export default router;