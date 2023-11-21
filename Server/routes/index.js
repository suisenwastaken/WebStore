import Router from 'express';
const router = new Router();

import deviceRouter from './deviceRouter.js';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';
import userRouter from './userRouter.js';
import basketRouter from './basketRouter.js';

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.use('/basket', basketRouter);

export default router;