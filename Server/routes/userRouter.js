import Router from 'express';
import {registration, login, check} from '../controlers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();



router.post('/registration', registration);
router.post('/login', login);

router.get('/auth', authMiddleware, check);

export default router;