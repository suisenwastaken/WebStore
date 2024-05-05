import Router from 'express';
import {post, get} from '../controlers/deliveryPointController.js'
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
const router = new Router();

router.post('/', checkRoleMiddleware('ADMIN'), post);
router.get('/', get);

export default router;